// Dating Quiz App - Main Application Logic

class DatingQuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.responses = [];
        this.questionQueue = [];
        this.askedQuestions = new Set();
        this.totalQuestions = 0;
    }

    startQuiz() {
        // Initialize quiz
        this.currentQuestionIndex = 0;
        this.responses = [];
        this.questionQueue = [...QUESTIONS.start];
        this.askedQuestions.clear();

        // Calculate estimated total (will adapt)
        this.totalQuestions = QUESTIONS.start.length + QUESTIONS.core.length + 5; // adaptive questions

        // Show quiz screen
        this.showScreen('quiz-screen');
        this.renderQuestion();
    }

    renderQuestion() {
        const question = this.questionQueue[this.currentQuestionIndex];

        if (!question) {
            // Move to core questions if we've finished start/branches
            if (this.currentQuestionIndex < 5) {
                // Add core questions
                QUESTIONS.core.forEach(q => {
                    if (!this.askedQuestions.has(q.id)) {
                        this.questionQueue.push(q);
                    }
                });
            } else if (this.currentQuestionIndex >= QUESTIONS.start.length + QUESTIONS.core.length) {
                // Add adaptive questions if needed
                this.addAdaptiveQuestions();
            }

            // If still no question, move to results
            if (!this.questionQueue[this.currentQuestionIndex]) {
                this.showResults();
                return;
            }
        }

        const currentQ = this.questionQueue[this.currentQuestionIndex];
        this.askedQuestions.add(currentQ.id);

        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('current-q').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-q').textContent = this.totalQuestions;

        // Render question text
        document.getElementById('question-text').textContent = currentQ.text;
        document.getElementById('question-context').textContent = currentQ.context || '';

        // Render answers
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';

        currentQ.answers.forEach((answer, index) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-option';
            answerBtn.textContent = answer.text;
            answerBtn.onclick = () => this.selectAnswer(answer, currentQ);
            answersContainer.appendChild(answerBtn);
        });

        // Update back button
        const backBtn = document.getElementById('back-btn');
        if (this.currentQuestionIndex === 0) {
            backBtn.style.display = 'none';
        } else {
            backBtn.style.display = 'block';
        }
    }

    selectAnswer(answer, question) {
        // Store response
        this.responses.push({
            questionId: question.id,
            question: question.text,
            answer: answer
        });

        // Handle follow-up questions (branching logic)
        if (question.followUp && question.followUp[answer.value]) {
            const followUpId = question.followUp[answer.value];
            const followUpQuestion = QUESTIONS.branches[followUpId];

            if (followUpQuestion && !this.askedQuestions.has(followUpQuestion.id)) {
                // Insert follow-up question next
                this.questionQueue.splice(this.currentQuestionIndex + 1, 0, followUpQuestion);
                this.totalQuestions++;
            }
        }

        // Move to next question
        this.nextQuestion();
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        // Check if we need to add more questions
        if (this.currentQuestionIndex >= this.questionQueue.length) {
            // Check which section we're in
            if (this.askedQuestions.size < QUESTIONS.start.length + 5) {
                // Still in early stages, add core questions
                QUESTIONS.core.forEach(q => {
                    if (!this.askedQuestions.has(q.id)) {
                        this.questionQueue.push(q);
                    }
                });
            } else if (this.responses.length >= 15 && this.responses.length < 25) {
                // Mid-quiz, add adaptive questions
                this.addAdaptiveQuestions();
            } else {
                // Add final questions
                QUESTIONS.final.forEach(q => {
                    if (!this.askedQuestions.has(q.id)) {
                        this.questionQueue.push(q);
                    }
                });
            }
        }

        // Render next question or show results
        if (this.currentQuestionIndex < this.questionQueue.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            // Remove last response
            this.responses.pop();
            this.currentQuestionIndex--;
            this.renderQuestion();
        }
    }

    skipQuestion() {
        // Add empty response
        this.responses.push({
            questionId: this.questionQueue[this.currentQuestionIndex].id,
            question: this.questionQueue[this.currentQuestionIndex].text,
            answer: { text: 'Skipped', value: 'skip', scores: {} }
        });
        this.nextQuestion();
    }

    addAdaptiveQuestions() {
        // Analyze responses so far to determine which adaptive questions to ask
        const tempAnalyzer = new DatingAnalyzer(this.responses);
        const scores = tempAnalyzer.scores;

        // Add adaptive questions based on patterns detected
        QUESTIONS.adaptive.forEach(q => {
            if (!this.askedQuestions.has(q.id)) {
                // Add first few adaptive questions
                if (this.questionQueue.filter(q => QUESTIONS.adaptive.includes(q)).length < 3) {
                    this.questionQueue.push(q);
                }
            }
        });
    }

    showResults() {
        // Analyze responses
        const analyzer = new DatingAnalyzer(this.responses);
        const profile = analyzer.profile;

        // Show results screen
        this.showScreen('results-screen');

        // Render dater type
        document.getElementById('dater-type').textContent = profile.daterType.name;
        document.getElementById('dater-type-description').innerHTML = `
            <p>${profile.daterType.description}</p>
            <div class="strengths-challenges">
                <div class="strengths">
                    <h4>Strengths</h4>
                    <ul>${profile.daterType.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
                <div class="challenges">
                    <h4>Growth Areas</h4>
                    <ul>${profile.daterType.challenges.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
            </div>
        `;

        // Render what they're looking for
        document.getElementById('looking-for-content').innerHTML = profile.lookingFor.map(item => `
            <div class="insight-item">
                <span class="insight-icon">${item.icon}</span>
                <div class="insight-text">
                    <strong>${item.text}</strong>
                    <p>${item.detail}</p>
                </div>
            </div>
        `).join('');

        // Render readiness
        const readinessHtml = `
            <div class="readiness-gauge">
                <div class="gauge-bar">
                    <div class="gauge-fill" style="width: ${profile.readiness.percentage}%"></div>
                </div>
                <div class="gauge-label">${profile.readiness.level} Readiness (${profile.readiness.percentage}%)</div>
            </div>
            <div class="readiness-details">
                <div class="readiness-strengths">
                    <h4>✓ What's Working</h4>
                    <ul>${profile.readiness.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
                ${profile.readiness.considerations.length > 0 ? `
                <div class="readiness-considerations">
                    <h4>↻ Areas to Focus On</h4>
                    <ul>${profile.readiness.considerations.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
                ` : ''}
            </div>
        `;
        document.getElementById('readiness-content').innerHTML = readinessHtml;

        // Render values
        document.getElementById('values-content').innerHTML = profile.values.map(v => `
            <div class="value-item">
                <strong>${v.name}</strong>
                <p>${v.description}</p>
            </div>
        `).join('');

        // Render communication style
        const commHtml = `
            <div class="comm-style">
                <h4>${profile.communicationStyle.type}</h4>
                <p>${profile.communicationStyle.description}</p>
                <div class="comm-details">
                    <div>
                        <strong>Strengths:</strong> ${profile.communicationStyle.strengths.join(', ')}
                    </div>
                    <div>
                        <strong>Watch for:</strong> ${profile.communicationStyle.watchFor.join(', ')}
                    </div>
                </div>
                <div class="comm-tip">
                    <strong>💡 Tip:</strong> ${profile.communicationStyle.tips}
                </div>
            </div>
        `;
        document.getElementById('communication-content').innerHTML = commHtml;

        // Render dimensions chart
        const dimensionsHtml = profile.dimensions.map(d => `
            <div class="dimension-row">
                <div class="dimension-label">${d.name}</div>
                <div class="dimension-bar-container">
                    <div class="dimension-bar" style="width: ${(d.score / 10) * 100}%">
                        <span class="dimension-score">${d.score}/10</span>
                    </div>
                </div>
            </div>
        `).join('');
        document.getElementById('dimensions-chart').innerHTML = dimensionsHtml;

        // Render bio suggestions
        const bioHtml = profile.bioSuggestions.map(suggestion => `
            <div class="bio-suggestion">
                <div class="bio-text">"${suggestion}"</div>
                <button class="copy-btn" onclick="app.copyToClipboard('${suggestion.replace(/'/g, "\\'")}')">Copy</button>
            </div>
        `).join('');
        document.getElementById('bio-suggestions').innerHTML = bioHtml;

        // Render red flags
        document.getElementById('red-flags').innerHTML = profile.redFlags.map(flag =>
            `<li>${flag}</li>`
        ).join('');

        // Render green flags
        document.getElementById('green-flags').innerHTML = profile.greenFlags.map(flag =>
            `<li>${flag}</li>`
        ).join('');

        // Render action steps
        const actionHtml = profile.actionSteps.map((step, index) => `
            <div class="action-step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h4>${step.title}</h4>
                    <p>${step.description}</p>
                </div>
            </div>
        `).join('');
        document.getElementById('action-steps').innerHTML = actionHtml;

        // Scroll to top
        window.scrollTo(0, 0);
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Show feedback
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }

    restartQuiz() {
        this.showScreen('welcome-screen');
        this.currentQuestionIndex = 0;
        this.responses = [];
        this.questionQueue = [];
        this.askedQuestions.clear();
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId).classList.add('active');
    }
}

// Initialize app
const app = new DatingQuizApp();

// Make sure the app is ready when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dating Quiz App Loaded');
});
