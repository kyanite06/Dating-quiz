// Dating Quiz Analyzer - Processes answers and generates insights

class DatingAnalyzer {
    constructor(responses) {
        this.responses = responses;
        this.scores = this.calculateScores();
        this.profile = this.buildProfile();
    }

    calculateScores() {
        const scores = {};

        this.responses.forEach(response => {
            if (response.answer && response.answer.scores) {
                Object.entries(response.answer.scores).forEach(([key, value]) => {
                    scores[key] = (scores[key] || 0) + value;
                });
            }
        });

        return scores;
    }

    buildProfile() {
        return {
            daterType: this.determineDaterType(),
            lookingFor: this.determineLookingFor(),
            readiness: this.assessReadiness(),
            values: this.identifyValues(),
            communicationStyle: this.determineCommunicationStyle(),
            dimensions: this.calculateDimensions(),
            bioSuggestions: this.generateBioSuggestions(),
            redFlags: this.identifyRedFlags(),
            greenFlags: this.identifyGreenFlags(),
            actionSteps: this.generateActionSteps()
        };
    }

    determineDaterType() {
        const types = [];

        // Analyze attachment style
        const anxious = this.scores.attachment_anxiety || 0;
        const avoidant = this.scores.avoidance || 0;
        const secure = this.scores.secure_attachment || 0;

        // Analyze relationship orientation
        const relationshipPriority = this.scores.relationship_priority || 0;
        const independence = this.scores.independence || 0;
        const intentionality = this.scores.intentionality || 0;

        // Analyze depth vs casual
        const emotionalDepth = this.scores.emotional_depth || 0;
        const casualOpenness = this.scores.casual_openness || 0;

        // Analyze growth orientation
        const selfAwareness = this.scores.self_awareness || 0;
        const growthFocus = this.scores.growth_focus || 0;

        // Determine primary dater type
        if (selfAwareness >= 4 && growthFocus >= 2) {
            return {
                name: 'The Conscious Dater',
                description: 'You approach dating with intention and self-awareness. You\'re interested in understanding your patterns and making deliberate choices rather than falling into old habits. You value personal growth and see relationships as a mirror for self-discovery.',
                strengths: ['Self-aware', 'Intentional', 'Growth-oriented', 'Reflective'],
                challenges: ['Can overthink things', 'Might analyze instead of feel', 'May have high standards for yourself']
            };
        }

        if (relationshipPriority >= 4 && emotionalDepth >= 2) {
            return {
                name: 'The True Romantic',
                description: 'You value deep emotional connection and are genuinely excited about finding a meaningful relationship. You\'re not afraid of commitment and you bring emotional authenticity to your dating life. You believe in real connection over casual encounters.',
                strengths: ['Emotionally available', 'Commitment-ready', 'Authentic', 'Values depth'],
                challenges: ['May come on strong', 'Could idealize partners', 'Might rush emotional intimacy']
            };
        }

        if (avoidant >= 3 && independence >= 3) {
            return {
                name: 'The Independent Spirit',
                description: 'You value your freedom and autonomy highly. You\'re drawn to connection but also protective of your independence. You need a relationship that enhances your life without consuming it, and you\'re wary of losing yourself in partnership.',
                strengths: ['Self-sufficient', 'Clear boundaries', 'Knows what they need', 'Values authenticity'],
                challenges: ['May keep people at arm\'s length', 'Can confuse independence with avoidance', 'Might sabotage intimacy']
            };
        }

        if (anxious >= 2 && this.scores.vulnerability_fear >= 2) {
            return {
                name: 'The Guarded Romantic',
                description: 'You want love but you\'re protecting yourself from getting hurt again. You crave connection but fear vulnerability. You\'re learning to balance your desire for intimacy with your need for emotional safety.',
                strengths: ['Emotionally intelligent', 'Loyal once trust is earned', 'Values authenticity', 'Self-protective'],
                challenges: ['May push people away when getting close', 'Can misread situations', 'Might test partners']
            };
        }

        if (intentionality >= 3 && this.scores.pragmatic >= 2) {
            return {
                name: 'The Strategic Dater',
                description: 'You approach dating with clarity and purpose. You know what you want and you\'re not interested in wasting time on poor matches. You value compatibility and intentionality over chemistry and chance.',
                strengths: ['Clear standards', 'Efficient', 'Knows what they want', 'Practical approach'],
                challenges: ['May be too rigid', 'Could miss unexpected connections', 'Might over-filter']
            };
        }

        if (this.scores.balance >= 3 || this.scores.adaptability >= 2) {
            return {
                name: 'The Flexible Connector',
                description: 'You have a balanced, adaptable approach to dating. You\'re open to different types of connections and relationships, and you adjust your expectations based on the person and situation. You value authenticity over following a script.',
                strengths: ['Adaptable', 'Open-minded', 'Goes with the flow', 'Authentic'],
                challenges: ['May lack clarity on what you want', 'Could be too flexible', 'Might not assert needs']
            };
        }

        if ((this.scores.clarity || 0) <= -2 || this.scores.confused >= 1) {
            return {
                name: 'The Explorer',
                description: 'You\'re in a discovery phase, figuring out what you actually want rather than what you think you should want. You\'re open to experiences that help you learn about yourself and what works for you. This is actually a really healthy place to be.',
                strengths: ['Open to discovery', 'No rigid expectations', 'Willing to learn', 'Honest about uncertainty'],
                challenges: ['May lack direction', 'Could attract wrong people', 'Might need more self-clarity']
            };
        }

        if (casualOpenness >= 2 && relationshipPriority <= 1) {
            return {
                name: 'The Present-Focused Dater',
                description: 'You\'re focused on enjoying dating for what it is right now rather than treating it as a means to an end. You value genuine connection and experiences, whether or not they lead to a long-term relationship.',
                strengths: ['Lives in the present', 'Low pressure approach', 'Enjoys the journey', 'Authentic'],
                challenges: ['May avoid defining relationships', 'Could miss deeper connections', 'Might resist commitment']
            };
        }

        // Default
        return {
            name: 'The Open-Hearted Seeker',
            description: 'You\'re genuinely interested in connection and you\'re doing the work to understand yourself better. You\'re navigating the balance between protecting yourself and staying open to possibility. You value authenticity and real connection.',
            strengths: ['Open-minded', 'Willing to grow', 'Values authenticity', 'Seeks genuine connection'],
            challenges: ['Still finding your footing', 'May need more clarity', 'Learning what works for you']
        };
    }

    determineLookingFor() {
        const insights = [];

        const relationshipPriority = this.scores.relationship_priority || 0;
        const casualOpenness = this.scores.casual_openness || 0;
        const longTermFocus = this.scores.long_term_focus || 0;
        const growthFocus = this.scores.growth_focus || 0;

        if (longTermFocus >= 2 || relationshipPriority >= 4) {
            insights.push({
                icon: '💍',
                text: 'A serious, long-term partnership',
                detail: 'You\'re not here for games. You want something real that has the potential to last.'
            });
        } else if (relationshipPriority >= 2) {
            insights.push({
                icon: '🤝',
                text: 'A meaningful connection',
                detail: 'You want something genuine, even if you\'re not sure about the timeline or end goal.'
            });
        } else if (casualOpenness >= 2 && relationshipPriority <= 1) {
            insights.push({
                icon: '✨',
                text: 'Authentic connections without pressure',
                detail: 'You\'re more focused on quality interactions than forcing a specific outcome.'
            });
        } else {
            insights.push({
                icon: '🔍',
                text: 'To figure out what you\'re looking for',
                detail: 'You\'re in discovery mode, and that\'s actually really healthy. You\'re dating with awareness.'
            });
        }

        // Secondary desires
        if (this.scores.emotional_depth >= 2) {
            insights.push({
                icon: '💫',
                text: 'Emotional depth and real intimacy',
                detail: 'Surface-level connection doesn\'t cut it for you. You want someone who goes deep.'
            });
        }

        if (this.scores.companionship >= 2) {
            insights.push({
                icon: '🫂',
                text: 'A true partner and companion',
                detail: 'You want someone to do life with—someone who\'s on your team.'
            });
        }

        if (this.scores.growth_oriented >= 2 || growthFocus >= 2) {
            insights.push({
                icon: '🌱',
                text: 'Someone who challenges you to grow',
                detail: 'You want a relationship that pushes you to be your best self, not one that keeps you small.'
            });
        }

        if (this.scores.balance >= 3) {
            insights.push({
                icon: '⚖️',
                text: 'Balance between togetherness and independence',
                detail: 'You want connection without losing yourself. The sweet spot between "we" and "me."'
            });
        }

        return insights;
    }

    assessReadiness() {
        const emotionalReadiness = this.scores.emotional_readiness || 0;
        const vulnerabilityFear = this.scores.vulnerability_fear || 0;
        const relationshipPriority = this.scores.relationship_priority || 0;
        const pastTrauma = this.scores.past_trauma || 0;
        const selfWork = this.scores.self_work || 0;

        let readinessLevel;
        let readinessScore = emotionalReadiness - (vulnerabilityFear * 0.5) + (relationshipPriority * 0.5);

        if (readinessScore >= 3) {
            readinessLevel = 'High';
        } else if (readinessScore >= 1) {
            readinessLevel = 'Moderate';
        } else {
            readinessLevel = 'Building';
        }

        const insights = {
            level: readinessLevel,
            percentage: Math.min(95, Math.max(15, 50 + (readinessScore * 10))),
            strengths: [],
            considerations: []
        };

        // Readiness strengths
        if (emotionalReadiness >= 2) {
            insights.strengths.push('You\'ve had time to process your past');
        }
        if (this.scores.self_awareness >= 3) {
            insights.strengths.push('You have strong self-awareness');
        }
        if (selfWork >= 2) {
            insights.strengths.push('You\'re actively working on yourself');
        }
        if (this.scores.secure_attachment >= 2) {
            insights.strengths.push('You have healthy attachment patterns');
        }
        if (this.scores.boundaries >= 1) {
            insights.strengths.push('You understand the importance of boundaries');
        }

        // Considerations
        if (vulnerabilityFear >= 2) {
            insights.considerations.push('Work on opening up to vulnerability');
        }
        if (pastTrauma >= 1) {
            insights.considerations.push('Continue processing past relationship wounds');
        }
        if (this.scores.emotional_awareness <= 0) {
            insights.considerations.push('Develop deeper emotional awareness');
        }
        if (this.scores.commitment_fear >= 2) {
            insights.considerations.push('Explore your relationship with commitment');
        }
        if (this.scores.identity_fear >= 2) {
            insights.considerations.push('Work on maintaining your identity in relationships');
        }

        // Add default messages if lists are empty
        if (insights.strengths.length === 0) {
            insights.strengths.push('You\'re taking steps to understand yourself better');
        }
        if (insights.considerations.length === 0) {
            insights.considerations.push('Keep building self-awareness and emotional intelligence');
        }

        return insights;
    }

    identifyValues() {
        const values = [];

        // Identify top values from scores
        if (this.scores.authenticity >= 2 || this.scores.vulnerability_comfort >= 1) {
            values.push({ name: 'Authenticity', description: 'Being real matters more than being perfect' });
        }
        if (this.scores.growth_oriented >= 2 || this.scores.growth_focus >= 2) {
            values.push({ name: 'Growth', description: 'You want to evolve and improve, not stay stagnant' });
        }
        if (this.scores.independence >= 3) {
            values.push({ name: 'Independence', description: 'Your autonomy is non-negotiable' });
        }
        if (this.scores.emotional_depth >= 2) {
            values.push({ name: 'Depth', description: 'Surface-level doesn\'t satisfy you' });
        }
        if (this.scores.stability >= 2 || this.scores.security_need >= 2) {
            values.push({ name: 'Stability', description: 'You need consistency and reliability' });
        }
        if (this.scores.adventurousness >= 2 || this.scores.spontaneity >= 2) {
            values.push({ name: 'Adventure', description: 'You crave novelty and new experiences' });
        }
        if (this.scores.communication >= 3 || this.scores.communication_priority >= 2) {
            values.push({ name: 'Communication', description: 'Open, honest dialogue is essential' });
        }
        if (this.scores.compassion_priority >= 2) {
            values.push({ name: 'Kindness', description: 'Empathy and compassion are core to who you are' });
        }
        if (this.scores.intentionality >= 3) {
            values.push({ name: 'Intentionality', description: 'You value purpose and deliberate action' });
        }
        if (this.scores.loyalty >= 2) {
            values.push({ name: 'Loyalty', description: 'Commitment and dedication matter to you' });
        }

        // Add defaults if needed
        if (values.length < 3) {
            values.push({ name: 'Connection', description: 'Real human connection is what you\'re seeking' });
            values.push({ name: 'Self-awareness', description: 'You value understanding yourself and others' });
        }

        return values.slice(0, 5);
    }

    determineCommunicationStyle() {
        const directness = this.scores.directness || 0;
        const processingNeed = this.scores.processing_need || 0;
        const conflictAvoidance = this.scores.conflict_avoidance || 0;
        const emotionalReactivity = this.scores.emotional_reactivity || 0;

        let style = {};

        if (directness >= 2) {
            style = {
                type: 'Direct Communicator',
                description: 'You prefer to address things head-on. You value honesty and clarity, and you\'re not afraid to have difficult conversations.',
                tips: 'Remember that not everyone processes at your speed. Give partners time to think before expecting responses.',
                strengths: ['Clear', 'Honest', 'Resolves issues quickly'],
                watchFor: ['Can come across as blunt', 'May push for resolution too fast']
            };
        } else if (processingNeed >= 2) {
            style = {
                type: 'Thoughtful Processor',
                description: 'You need time to think through your feelings before discussing them. You communicate better after you\'ve had space to process.',
                tips: 'Let partners know you need processing time—it\'s not avoidance, it\'s how you communicate best.',
                strengths: ['Thoughtful', 'Considered responses', 'Less reactive'],
                watchFor: ['Can be seen as withdrawn', 'May take too long to address issues']
            };
        } else if (conflictAvoidance >= 2) {
            style = {
                type: 'Harmony Keeper',
                description: 'You prefer to avoid conflict when possible. You value peace and may minimize your needs to keep things smooth.',
                tips: 'Learn to voice concerns early before they build up. Healthy conflict strengthens relationships.',
                strengths: ['Creates calm environment', 'Empathetic', 'Values peace'],
                watchFor: ['May suppress real feelings', 'Can lead to resentment', 'Needs might go unmet']
            };
        } else if (emotionalReactivity >= 1) {
            style = {
                type: 'Emotional Expresser',
                description: 'You feel things deeply and express them openly. Your emotions come first, then the words. You\'re passionate and expressive.',
                tips: 'Try to pause when emotions are high. Your feelings are valid, but timing matters for productive communication.',
                strengths: ['Authentic', 'Passionate', 'Emotionally honest'],
                watchFor: ['May say things you don\'t mean', 'Can escalate conflicts', 'Might overwhelm partners']
            };
        } else {
            style = {
                type: 'Balanced Communicator',
                description: 'You adapt your communication style based on the situation and the person. You\'re working on finding your authentic communication voice.',
                tips: 'Keep developing your communication skills. Notice what works and what doesn\'t in different situations.',
                strengths: ['Flexible', 'Situationally aware', 'Growing'],
                watchFor: ['May lack consistency', 'Could be unclear about needs']
            };
        }

        return style;
    }

    calculateDimensions() {
        // Calculate key dimensions for visual representation
        const dimensions = [];

        // Relationship Readiness
        const readinessScore = Math.min(10, Math.max(0,
            5 + (this.scores.emotional_readiness || 0) + (this.scores.relationship_priority || 0) - (this.scores.vulnerability_fear || 0)
        ));
        dimensions.push({ name: 'Relationship Readiness', score: readinessScore });

        // Emotional Openness
        const opennessScore = Math.min(10, Math.max(0,
            5 + (this.scores.vulnerability_comfort || 0) + (this.scores.emotional_depth || 0) - (this.scores.guarded || 0)
        ));
        dimensions.push({ name: 'Emotional Openness', score: opennessScore });

        // Independence vs Togetherness (scaled to show preference)
        const independenceScore = Math.min(10, Math.max(0,
            5 + (this.scores.independence || 0) + (this.scores.autonomy_need || 0) - (this.scores.togetherness_need || 0)
        ));
        dimensions.push({ name: 'Independence', score: independenceScore });

        // Clarity on What You Want
        const clarityScore = Math.min(10, Math.max(0,
            5 + (this.scores.self_awareness || 0) + (this.scores.intentionality || 0) - Math.abs(this.scores.clarity || 0)
        ));
        dimensions.push({ name: 'Clarity', score: clarityScore });

        // Communication Directness
        const commScore = Math.min(10, Math.max(0,
            5 + (this.scores.directness || 0) + (this.scores.communication || 0) - (this.scores.conflict_avoidance || 0)
        ));
        dimensions.push({ name: 'Communication', score: commScore });

        // Adventurousness vs Stability Seeking
        const adventureScore = Math.min(10, Math.max(0,
            5 + (this.scores.adventurousness || 0) + (this.scores.spontaneity || 0) - (this.scores.routine_need || 0)
        ));
        dimensions.push({ name: 'Adventurousness', score: adventureScore });

        return dimensions;
    }

    generateBioSuggestions() {
        const suggestions = [];

        // Based on dater type and key characteristics
        const daterType = this.profile.daterType.name;

        // Authenticity-based suggestions
        if (this.scores.authenticity >= 2) {
            suggestions.push('Looking for someone who values real conversation over small talk');
            suggestions.push('Not here for games—let\'s be honest about what we want');
        }

        // Growth-oriented
        if (this.scores.growth_oriented >= 2 || this.scores.self_awareness >= 3) {
            suggestions.push('Big on self-awareness and emotional growth');
            suggestions.push('Looking for someone who challenges me to be better');
        }

        // Independence focused
        if (this.scores.independence >= 3) {
            suggestions.push('I need someone who has their own life and interests');
            suggestions.push('Looking for connection that doesn\'t require me to lose myself');
        }

        // Emotional depth
        if (this.scores.emotional_depth >= 2) {
            suggestions.push('More interested in depth than surface-level chat');
            suggestions.push('If you can talk about feelings and ideas, we\'ll get along');
        }

        // Intentional dating
        if (this.scores.intentionality >= 3) {
            suggestions.push('Dating with intention—not just swiping to swipe');
            suggestions.push('Looking for someone who knows what they want');
        }

        // Adventure
        if (this.scores.adventurousness >= 2) {
            suggestions.push('Let\'s try new things and get out of our comfort zones');
            suggestions.push('Down for spontaneous plans and random adventures');
        }

        // Stability
        if (this.scores.stability >= 2) {
            suggestions.push('I value consistency and reliability in a partner');
            suggestions.push('Looking for someone stable who has their life together');
        }

        // Communication
        if (this.scores.communication_priority >= 2) {
            suggestions.push('Communication is everything to me');
            suggestions.push('Can we talk about the real stuff, not just surface things?');
        }

        // Add relationship goal suggestions
        if (this.scores.long_term_focus >= 2) {
            suggestions.push('Here for something real and long-term');
            suggestions.push('Looking for a genuine partnership, not just dating for fun');
        } else if (this.scores.relationship_priority >= 2) {
            suggestions.push('Open to seeing where things go with the right person');
            suggestions.push('Not rushing anything, but definitely open to something meaningful');
        }

        // Vulnerable/honest additions
        if (this.scores.vulnerability_comfort >= 1) {
            suggestions.push('Working on being more open and vulnerable');
            suggestions.push('I appreciate people who can be real about their feelings');
        }

        // Humor and lightness
        if (this.scores.playfulness >= 2) {
            suggestions.push('Life\'s too short to take everything seriously');
            suggestions.push('Looking for someone who can make me laugh');
        }

        // Return 5-7 most relevant suggestions
        return this.shuffleArray(suggestions).slice(0, 7);
    }

    identifyRedFlags() {
        const flags = [];

        // Based on their patterns and vulnerabilities
        if (this.scores.unavailable_pattern >= 2 || this.scores.attracted_to_unavailable >= 2) {
            flags.push('People who are hot and cold or emotionally unavailable');
            flags.push('Someone who says they "don\'t know what they want" past the first few dates');
        }

        if (this.scores.vulnerability_fear >= 2) {
            flags.push('Partners who push for intimacy faster than you\'re comfortable with');
        }

        if (this.scores.independence >= 3) {
            flags.push('Someone who needs constant communication and reassurance');
            flags.push('People who don\'t have their own interests or social life');
        }

        if (this.scores.communication_priority >= 2) {
            flags.push('Poor communicators who shut down during conflict');
            flags.push('People who expect you to read their mind');
        }

        if (this.scores.boundaries <= 0) {
            flags.push('Anyone who doesn\'t respect your boundaries');
            flags.push('Love bombing or moving too fast');
        }

        if (this.scores.values_priority >= 2) {
            flags.push('Someone whose core values don\'t align with yours');
        }

        // Universal red flags
        flags.push('Inconsistency between words and actions');
        flags.push('Anyone who makes you feel like you\'re asking for too much');

        return flags.slice(0, 5);
    }

    identifyGreenFlags() {
        const flags = [];

        // Based on what they need and value
        if (this.scores.communication >= 2 || this.scores.communication_priority >= 2) {
            flags.push('Someone who can talk through issues calmly and directly');
            flags.push('They communicate their needs and ask about yours');
        }

        if (this.scores.emotional_depth >= 2) {
            flags.push('Emotional intelligence and self-awareness');
            flags.push('They can talk about their feelings without drama');
        }

        if (this.scores.authenticity >= 2) {
            flags.push('They\'re genuine and consistent—what you see is what you get');
        }

        if (this.scores.growth_oriented >= 2) {
            flags.push('Open to feedback and personal growth');
            flags.push('They take accountability for their actions');
        }

        if (this.scores.independence >= 3) {
            flags.push('They have their own life, friends, and interests');
            flags.push('Comfortable with alone time and space');
        }

        if (this.scores.security_need >= 2) {
            flags.push('Consistent and reliable—they do what they say');
            flags.push('Makes you feel secure, not anxious');
        }

        if (this.scores.balance >= 2) {
            flags.push('Respects your need for both connection and independence');
        }

        // Universal green flags
        flags.push('Makes you feel better about yourself, not worse');
        flags.push('Shows respect for your boundaries and pace');
        flags.push('Actions match their words consistently');

        return flags.slice(0, 6);
    }

    generateActionSteps() {
        const steps = [];

        // Based on readiness level
        if (this.profile.readiness.level === 'Building') {
            steps.push({
                title: 'Do more self-work before diving in',
                description: 'Consider therapy, journaling, or working with a coach to build emotional readiness.'
            });
        }

        // Based on clarity
        if ((this.scores.clarity || 0) <= -1) {
            steps.push({
                title: 'Get clearer on your non-negotiables',
                description: 'Make a list of your actual deal-breakers vs nice-to-haves. Be honest about what you really need.'
            });
        }

        // Communication work
        if (this.scores.conflict_avoidance >= 2) {
            steps.push({
                title: 'Practice voicing your needs earlier',
                description: 'Start small—share preferences and boundaries before they become big issues.'
            });
        }

        // Vulnerability work
        if (this.scores.vulnerability_fear >= 2) {
            steps.push({
                title: 'Work on vulnerability in small doses',
                description: 'You don\'t have to share everything at once. Practice opening up gradually with people you trust.'
            });
        }

        // Pattern recognition
        if (this.scores.unavailable_pattern >= 2) {
            steps.push({
                title: 'Notice when you\'re attracted to unavailability',
                description: 'When you feel that intense pull, pause and ask yourself if they\'re actually available or if you\'re chasing the familiar.'
            });
        }

        // Attachment work
        if (this.scores.attachment_anxiety >= 2 || this.scores.avoidance >= 3) {
            steps.push({
                title: 'Learn about your attachment style',
                description: 'Understanding your attachment patterns can transform how you show up in relationships.'
            });
        }

        // Standards
        if (this.scores.standards <= 0) {
            steps.push({
                title: 'Raise your standards',
                description: 'You deserve someone who meets your needs. Stop accepting less because you think you should.'
            });
        }

        // Self-worth
        if (this.scores.self_worth <= -1) {
            steps.push({
                title: 'Build your sense of worthiness',
                description: 'Work on believing you deserve good love. Consider therapy or self-worth practices.'
            });
        }

        // Default actionable steps
        if (steps.length < 2) {
            steps.push({
                title: 'Date with awareness, not autopilot',
                description: 'Pay attention to how you feel around someone, not just how they make you feel about yourself.'
            });
            steps.push({
                title: 'Trust your gut',
                description: 'If something feels off, it probably is. Don\'t ignore red flags hoping they\'ll change.'
            });
        }

        return steps.slice(0, 4);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}
