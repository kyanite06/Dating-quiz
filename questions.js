// Comprehensive adaptive question bank
const QUESTIONS = {
    // Personality framework questions - optional but helpful
    personality: [
        {
            id: 'p1',
            text: 'Do you know your Myers-Briggs (MBTI) personality type?',
            context: 'If you\'re not sure, you can skip this. Examples: INFP, ENTJ, ISFJ, etc.',
            type: 'single',
            answers: [
                { text: 'INTJ - The Architect', value: 'INTJ', scores: { analytical: 2, independence: 2, strategic: 1 }, mbti: 'INTJ' },
                { text: 'INTP - The Logician', value: 'INTP', scores: { analytical: 2, independence: 1, intellectual: 2 }, mbti: 'INTP' },
                { text: 'ENTJ - The Commander', value: 'ENTJ', scores: { assertiveness: 2, ambition: 2, directness: 2 }, mbti: 'ENTJ' },
                { text: 'ENTP - The Debater', value: 'ENTP', scores: { intellectual: 2, spontaneity: 1, adventurousness: 1 }, mbti: 'ENTP' },
                { text: 'INFJ - The Advocate', value: 'INFJ', scores: { emotional_depth: 2, empathy: 2, idealistic: 2 }, mbti: 'INFJ' },
                { text: 'INFP - The Mediator', value: 'INFP', scores: { emotional_depth: 2, authenticity: 2, idealistic: 2 }, mbti: 'INFP' },
                { text: 'ENFJ - The Protagonist', value: 'ENFJ', scores: { empathy: 2, extroversion: 2, supportive: 2 }, mbti: 'ENFJ' },
                { text: 'ENFP - The Campaigner', value: 'ENFP', scores: { extroversion: 2, spontaneity: 2, enthusiasm: 2 }, mbti: 'ENFP' },
                { text: 'ISTJ - The Logistician', value: 'ISTJ', scores: { stability: 2, reliability: 2, structured: 2 }, mbti: 'ISTJ' },
                { text: 'ISFJ - The Defender', value: 'ISFJ', scores: { loyalty: 2, supportive: 2, stability: 2 }, mbti: 'ISFJ' },
                { text: 'ESTJ - The Executive', value: 'ESTJ', scores: { assertiveness: 2, organized: 2, directness: 2 }, mbti: 'ESTJ' },
                { text: 'ESFJ - The Consul', value: 'ESFJ', scores: { extroversion: 2, supportive: 2, harmony: 2 }, mbti: 'ESFJ' },
                { text: 'ISTP - The Virtuoso', value: 'ISTP', scores: { independence: 2, spontaneity: 1, practical: 2 }, mbti: 'ISTP' },
                { text: 'ISFP - The Adventurer', value: 'ISFP', scores: { spontaneity: 2, artistic: 1, present_focused: 2 }, mbti: 'ISFP' },
                { text: 'ESTP - The Entrepreneur', value: 'ESTP', scores: { extroversion: 2, spontaneity: 2, adventurousness: 2 }, mbti: 'ESTP' },
                { text: 'ESFP - The Entertainer', value: 'ESFP', scores: { extroversion: 2, spontaneity: 2, playfulness: 2 }, mbti: 'ESFP' },
                { text: 'Not sure / Don\'t know', value: 'unknown', scores: {}, mbti: null }
            ],
            next: 'p2'
        },
        {
            id: 'p2',
            text: 'How about your Enneagram type?',
            context: 'Again, totally fine to skip if you don\'t know.',
            type: 'single',
            answers: [
                { text: 'Type 1 - The Perfectionist', value: 'enneagram_1', scores: { standards: 2, organized: 1, idealistic: 1 }, enneagram: 1 },
                { text: 'Type 2 - The Helper', value: 'enneagram_2', scores: { empathy: 2, supportive: 2, connection_need: 1 }, enneagram: 2 },
                { text: 'Type 3 - The Achiever', value: 'enneagram_3', scores: { ambition: 2, achievement_oriented: 2, image_conscious: 1 }, enneagram: 3 },
                { text: 'Type 4 - The Individualist', value: 'enneagram_4', scores: { emotional_depth: 2, authenticity: 2, creativity: 2 }, enneagram: 4 },
                { text: 'Type 5 - The Investigator', value: 'enneagram_5', scores: { analytical: 2, independence: 2, intellectual: 2 }, enneagram: 5 },
                { text: 'Type 6 - The Loyalist', value: 'enneagram_6', scores: { loyalty: 2, security_need: 2, cautious: 1 }, enneagram: 6 },
                { text: 'Type 7 - The Enthusiast', value: 'enneagram_7', scores: { adventurousness: 2, spontaneity: 2, optimistic: 2 }, enneagram: 7 },
                { text: 'Type 8 - The Challenger', value: 'enneagram_8', scores: { assertiveness: 2, independence: 2, directness: 2 }, enneagram: 8 },
                { text: 'Type 9 - The Peacemaker', value: 'enneagram_9', scores: { harmony: 2, conflict_avoidance: 2, adaptability: 1 }, enneagram: 9 },
                { text: 'Not sure / Don\'t know', value: 'unknown', scores: {}, enneagram: null }
            ],
            next: 'p3'
        },
        {
            id: 'p3',
            text: 'What\'s your primary Love Language?',
            context: 'How do you prefer to give and receive love?',
            type: 'single',
            answers: [
                { text: 'Words of Affirmation', value: 'words', scores: { verbal_affirmation_need: 2, communication_priority: 1 }, loveLanguage: 'words' },
                { text: 'Quality Time', value: 'time', scores: { togetherness_need: 2, presence_priority: 2 }, loveLanguage: 'time' },
                { text: 'Physical Touch', value: 'touch', scores: { physical_importance: 2, affection_need: 2 }, loveLanguage: 'touch' },
                { text: 'Acts of Service', value: 'service', scores: { practical_support: 2, actions_over_words: 2 }, loveLanguage: 'service' },
                { text: 'Receiving Gifts', value: 'gifts', scores: { thoughtfulness_priority: 2, symbolic_gestures: 1 }, loveLanguage: 'gifts' },
                { text: 'Not sure / Don\'t know', value: 'unknown', scores: {}, loveLanguage: null }
            ],
            next: 'p4'
        },
        {
            id: 'p4',
            text: 'If you know your attachment style, what is it?',
            context: 'This is how you typically behave in close relationships.',
            type: 'single',
            answers: [
                { text: 'Secure - I\'m comfortable with intimacy and independence', value: 'secure', scores: { secure_attachment: 3, emotional_readiness: 2 }, attachment: 'secure' },
                { text: 'Anxious - I worry about relationships and need reassurance', value: 'anxious', scores: { attachment_anxiety: 3, connection_need: 2 }, attachment: 'anxious' },
                { text: 'Avoidant - I value independence and can be uncomfortable with closeness', value: 'avoidant', scores: { avoidance: 3, independence: 2 }, attachment: 'avoidant' },
                { text: 'Fearful-Avoidant - I want closeness but also fear it', value: 'fearful', scores: { avoidance: 2, attachment_anxiety: 2, vulnerability_fear: 2 }, attachment: 'fearful' },
                { text: 'Not sure / Don\'t know', value: 'unknown', scores: {}, attachment: null }
            ],
            next: 'q1'
        }
    ],

    // Starting questions - everyone gets these
    start: [
        {
            id: 'q1',
            text: 'What brings you to this quiz right now?',
            context: 'Be honest—there\'s no judgment here.',
            type: 'single',
            answers: [
                { text: 'I keep choosing the wrong people', value: 'wrong_people', scores: { self_awareness: 2 } },
                { text: 'I\'m not sure what I want anymore', value: 'confused', scores: { clarity: -1 } },
                { text: 'I want to date smarter, not harder', value: 'strategic', scores: { intentionality: 2 } },
                { text: 'I\'m curious about my patterns', value: 'patterns', scores: { self_awareness: 2 } },
                { text: 'Someone suggested I figure this out', value: 'external', scores: { intentionality: 0 } }
            ],
            followUp: {
                'wrong_people': 'q_wrong_people_1',
                'confused': 'q_confused_1',
                'strategic': 'q_strategic_1',
                'patterns': 'q_patterns_1',
                'external': 'q_external_1'
            }
        },
        {
            id: 'q2',
            text: 'When was your last relationship or serious dating situation?',
            type: 'single',
            answers: [
                { text: 'Currently in one', value: 'current', scores: { availability: -2 } },
                { text: 'Within the last 3 months', value: 'recent', scores: { emotional_readiness: 0 } },
                { text: '3-12 months ago', value: 'medium', scores: { emotional_readiness: 1 } },
                { text: 'Over a year ago', value: 'long', scores: { emotional_readiness: 2 } },
                { text: 'It\'s been several years', value: 'very_long', scores: { emotional_readiness: 2 } },
                { text: 'Never had a serious one', value: 'never', scores: { experience_level: -2 } }
            ],
            next: 'q3'
        },
        {
            id: 'q3',
            text: 'How did that last situation end?',
            context: 'Or if you\'ve never had one, what stopped you from getting into relationships?',
            type: 'single',
            answers: [
                { text: 'I ended it', value: 'i_ended', scores: { assertiveness: 2 } },
                { text: 'They ended it', value: 'they_ended', scores: { attachment_anxiety: 1 } },
                { text: 'Mutual decision', value: 'mutual', scores: { communication: 2 } },
                { text: 'It just faded out', value: 'faded', scores: { avoidance: 2 } },
                { text: 'Complicated/messy', value: 'messy', scores: { boundaries: -1 } },
                { text: 'Haven\'t gotten close enough', value: 'no_serious', scores: { intimacy_fear: 1 } }
            ],
            next: 'q4'
        },
        {
            id: 'q4',
            text: 'What\'s your gut reaction to the idea of being in a committed relationship right now?',
            context: 'First instinct—don\'t overthink it.',
            type: 'single',
            answers: [
                { text: 'Excitement and readiness', value: 'excited', scores: { relationship_readiness: 3 } },
                { text: 'Want it but feels scary', value: 'scared_yes', scores: { relationship_readiness: 1, vulnerability_fear: 1 } },
                { text: 'Not sure I have time for it', value: 'no_time', scores: { priority_level: -1 } },
                { text: 'Sounds suffocating', value: 'suffocating', scores: { avoidance: 2, independence_need: 2 } },
                { text: 'Depends on the person', value: 'depends', scores: { conditional_commitment: 1 } },
                { text: 'No strong feelings either way', value: 'neutral', scores: { emotional_readiness: -1 } }
            ],
            followUp: {
                'excited': 'q_excited_1',
                'scared_yes': 'q_scared_1',
                'no_time': 'q_priorities_1',
                'suffocating': 'q_avoidant_1',
                'depends': 'q_conditional_1',
                'neutral': 'q_neutral_1'
            }
        }
    ],

    // Branch questions based on initial responses
    branches: {
        // Wrong people pattern
        q_wrong_people_1: {
            id: 'q_wrong_people_1',
            text: 'What pattern keeps showing up in the people you choose?',
            type: 'single',
            answers: [
                { text: 'Emotionally unavailable', value: 'unavailable', scores: { attracted_to_unavailable: 2 } },
                { text: 'Great at first, then disappointing', value: 'disappointing', scores: { idealization: 2 } },
                { text: 'Not actually compatible with my life', value: 'incompatible', scores: { fantasy_over_reality: 1 } },
                { text: 'They don\'t match my values', value: 'values_mismatch', scores: { values_clarity: -1 } },
                { text: 'Exciting but unstable', value: 'unstable', scores: { chaos_attraction: 2 } }
            ]
        },

        q_confused_1: {
            id: 'q_confused_1',
            text: 'What changed to make you feel unclear about what you want?',
            type: 'single',
            answers: [
                { text: 'Past relationship(s) didn\'t work out', value: 'failed_relationships', scores: { disillusionment: 1 } },
                { text: 'I\'ve changed and evolved', value: 'evolved', scores: { self_growth: 2 } },
                { text: 'What I thought I wanted didn\'t make me happy', value: 'misaligned', scores: { self_awareness: 2 } },
                { text: 'Too many options/conflicting advice', value: 'overwhelmed', scores: { decision_paralysis: 1 } },
                { text: 'I never really knew, just went along', value: 'never_knew', scores: { self_knowledge: -2 } }
            ]
        },

        q_strategic_1: {
            id: 'q_strategic_1',
            text: 'What does "dating smarter" mean to you?',
            type: 'single',
            answers: [
                { text: 'Being more selective upfront', value: 'selective', scores: { standards: 2 } },
                { text: 'Understanding what I actually need', value: 'needs_clarity', scores: { self_awareness: 2 } },
                { text: 'Not wasting time on wrong matches', value: 'efficiency', scores: { pragmatic: 2 } },
                { text: 'Better at reading red flags', value: 'discernment', scores: { awareness: 2 } },
                { text: 'Finding quality over quantity', value: 'quality', scores: { intentionality: 2 } }
            ]
        },

        q_patterns_1: {
            id: 'q_patterns_1',
            text: 'What pattern are you most curious about?',
            type: 'single',
            answers: [
                { text: 'Why I\'m attracted to certain types', value: 'attraction', scores: { self_awareness: 2 } },
                { text: 'How I sabotage good things', value: 'sabotage', scores: { self_sabotage: 2 } },
                { text: 'Why relationships end the same way', value: 'endings', scores: { pattern_recognition: 2 } },
                { text: 'What I avoid in dating', value: 'avoidance', scores: { avoidance: 1 } },
                { text: 'How I pick partners', value: 'selection', scores: { decision_making: 1 } }
            ]
        },

        q_external_1: {
            id: 'q_external_1',
            text: 'How do you feel about that suggestion?',
            type: 'single',
            answers: [
                { text: 'They\'re probably right', value: 'agree', scores: { self_awareness: 1 } },
                { text: 'Worth exploring, I guess', value: 'open', scores: { openness: 1 } },
                { text: 'Skeptical but here anyway', value: 'skeptical', scores: { resistance: 1 } },
                { text: 'Actually, I\'m curious too', value: 'curious', scores: { self_awareness: 2 } }
            ]
        },

        // Readiness branches
        q_excited_1: {
            id: 'q_excited_1',
            text: 'What excites you most about being in a relationship?',
            type: 'single',
            answers: [
                { text: 'Deep emotional connection', value: 'connection', scores: { intimacy_desire: 2 } },
                { text: 'Having a partner for life', value: 'partnership', scores: { companionship: 2 } },
                { text: 'Building something together', value: 'building', scores: { future_oriented: 2 } },
                { text: 'Feeling loved and secure', value: 'security', scores: { security_need: 2 } },
                { text: 'Sharing experiences', value: 'experiences', scores: { adventure: 1 } }
            ],
            next: 'q5'
        },

        q_scared_1: {
            id: 'q_scared_1',
            text: 'What\'s the scary part?',
            type: 'single',
            answers: [
                { text: 'Getting hurt again', value: 'hurt', scores: { vulnerability_fear: 2, past_trauma: 1 } },
                { text: 'Losing myself', value: 'losing_self', scores: { identity_fear: 2 } },
                { text: 'Making the wrong choice', value: 'wrong_choice', scores: { decision_anxiety: 2 } },
                { text: 'Being trapped', value: 'trapped', scores: { commitment_fear: 2 } },
                { text: 'Not being enough', value: 'inadequacy', scores: { self_worth: -1 } }
            ],
            next: 'q5'
        },

        q_priorities_1: {
            id: 'q_priorities_1',
            text: 'What\'s taking up your time and energy right now?',
            type: 'single',
            answers: [
                { text: 'Career/building my future', value: 'career', scores: { career_focus: 2 } },
                { text: 'Personal growth/healing', value: 'growth', scores: { self_work: 2 } },
                { text: 'Friends and social life', value: 'social', scores: { social_priority: 1 } },
                { text: 'Hobbies and passions', value: 'hobbies', scores: { independence: 1 } },
                { text: 'Honestly, just surviving', value: 'surviving', scores: { stress_level: 2 } }
            ],
            next: 'q5'
        },

        q_avoidant_1: {
            id: 'q_avoidant_1',
            text: 'What feels suffocating about commitment?',
            type: 'single',
            answers: [
                { text: 'Losing my freedom', value: 'freedom', scores: { independence_need: 2 } },
                { text: 'Daily expectations and obligations', value: 'obligations', scores: { responsibility_resistance: 1 } },
                { text: 'Having to consider someone else', value: 'consideration', scores: { autonomy_need: 2 } },
                { text: 'Predictability and routine', value: 'routine', scores: { spontaneity_need: 2 } },
                { text: 'Emotional intensity', value: 'intensity', scores: { emotional_avoidance: 2 } }
            ],
            next: 'q5'
        },

        q_conditional_1: {
            id: 'q_conditional_1',
            text: 'What would make the "right person" worth committing to?',
            type: 'single',
            answers: [
                { text: 'They enhance my life without consuming it', value: 'enhance', scores: { balanced_desire: 2 } },
                { text: 'We have undeniable chemistry', value: 'chemistry', scores: { chemistry_priority: 2 } },
                { text: 'They meet my specific needs', value: 'needs', scores: { pragmatic: 1 } },
                { text: 'It feels natural and easy', value: 'easy', scores: { ease_seeking: 1 } },
                { text: 'They\'re worth the sacrifice', value: 'worth_it', scores: { conditional_commitment: 1 } }
            ],
            next: 'q5'
        },

        q_neutral_1: {
            id: 'q_neutral_1',
            text: 'Why do you think you feel neutral about it?',
            type: 'single',
            answers: [
                { text: 'I\'m genuinely content alone', value: 'content', scores: { independence: 2 } },
                { text: 'Been disappointed too many times', value: 'disappointed', scores: { emotional_protection: 2 } },
                { text: 'Haven\'t met anyone compelling', value: 'no_spark', scores: { high_standards: 1 } },
                { text: 'Focused on other things', value: 'other_focus', scores: { priority_level: -1 } },
                { text: 'Not sure how to feel', value: 'confused', scores: { emotional_awareness: -1 } }
            ],
            next: 'q5'
        }
    },

    // Core questions everyone gets
    core: [
        {
            id: 'q5',
            text: 'Imagine your ideal Saturday. What does it look like?',
            context: 'This reveals your lifestyle preferences.',
            type: 'single',
            answers: [
                { text: 'Adventure or new experience', value: 'adventure', scores: { adventurousness: 2 } },
                { text: 'Social time with friends', value: 'social', scores: { extroversion: 2 } },
                { text: 'Quiet time alone', value: 'alone', scores: { introversion: 2 } },
                { text: 'Productive/working on goals', value: 'productive', scores: { ambition: 2 } },
                { text: 'Mix of social and solo', value: 'balanced', scores: { balance: 2 } },
                { text: 'Spontaneous, whatever happens', value: 'spontaneous', scores: { spontaneity: 2 } }
            ],
            next: 'q6'
        },
        {
            id: 'q6',
            text: 'How would you want a partner to fit into that ideal Saturday?',
            type: 'single',
            answers: [
                { text: 'Doing it all together', value: 'together', scores: { togetherness_need: 2 } },
                { text: 'Parallel play—same space, own things', value: 'parallel', scores: { independence: 1 } },
                { text: 'Apart for most, together for parts', value: 'mixed', scores: { balance: 2 } },
                { text: 'Mostly separate, meet up later', value: 'separate', scores: { independence: 2 } },
                { text: 'Flexible, depends on mood', value: 'flexible', scores: { adaptability: 1 } }
            ],
            next: 'q7'
        },
        {
            id: 'q7',
            text: 'When you think about your future (1-5 years), what role does a relationship play?',
            type: 'single',
            answers: [
                { text: 'Central—it\'s a major life goal', value: 'central', scores: { relationship_priority: 3 } },
                { text: 'Important but not everything', value: 'important', scores: { relationship_priority: 2 } },
                { text: 'Nice to have, not essential', value: 'nice', scores: { relationship_priority: 1 } },
                { text: 'Unsure where it fits', value: 'unsure', scores: { clarity: -1 } },
                { text: 'Not really thinking about it', value: 'not_thinking', scores: { relationship_priority: -1 } }
            ],
            next: 'q8'
        },
        {
            id: 'q8',
            text: 'What do you value most in yourself that you\'d want a partner to appreciate?',
            context: 'This helps identify what recognition matters to you.',
            type: 'single',
            answers: [
                { text: 'My ambition and drive', value: 'ambition', scores: { achievement_oriented: 2 } },
                { text: 'My emotional depth and empathy', value: 'empathy', scores: { emotional_depth: 2 } },
                { text: 'My independence and strength', value: 'independence', scores: { independence: 2 } },
                { text: 'My creativity and uniqueness', value: 'creativity', scores: { creativity: 2 } },
                { text: 'My loyalty and reliability', value: 'loyalty', scores: { stability: 2 } },
                { text: 'My sense of humor', value: 'humor', scores: { playfulness: 2 } }
            ],
            next: 'q9'
        },
        {
            id: 'q9',
            text: 'How do you typically handle conflict in relationships?',
            type: 'single',
            answers: [
                { text: 'Address it immediately', value: 'immediate', scores: { directness: 2 } },
                { text: 'Need time to process first', value: 'process', scores: { processing_need: 2 } },
                { text: 'Avoid it if possible', value: 'avoid', scores: { conflict_avoidance: 2 } },
                { text: 'Depends on the issue', value: 'varies', scores: { adaptability: 1 } },
                { text: 'Get emotional, then talk', value: 'emotional', scores: { emotional_reactivity: 1 } },
                { text: 'Over-analyze everything', value: 'analyze', scores: { analytical: 2 } }
            ],
            next: 'q10'
        },
        {
            id: 'q10',
            text: 'What\'s your relationship with vulnerability?',
            context: 'Be really honest here.',
            type: 'single',
            answers: [
                { text: 'I\'m an open book', value: 'open', scores: { vulnerability_comfort: 2 } },
                { text: 'Comfortable once I trust', value: 'earned', scores: { vulnerability_comfort: 1, trust_issues: 1 } },
                { text: 'Struggle with it but trying', value: 'struggle', scores: { vulnerability_fear: 1, growth_mindset: 1 } },
                { text: 'Feels dangerous', value: 'dangerous', scores: { vulnerability_fear: 2 } },
                { text: 'Only show certain parts', value: 'selective', scores: { guarded: 2 } },
                { text: 'Not sure what that means for me', value: 'unsure', scores: { emotional_awareness: -1 } }
            ],
            next: 'q11'
        },
        {
            id: 'q11',
            text: 'Complete this: A relationship should make you feel...',
            type: 'single',
            answers: [
                { text: 'Safe and secure', value: 'safe', scores: { security_need: 2 } },
                { text: 'Excited and alive', value: 'excited', scores: { passion_priority: 2 } },
                { text: 'Challenged to grow', value: 'growth', scores: { growth_oriented: 2 } },
                { text: 'Accepted as you are', value: 'accepted', scores: { acceptance_need: 2 } },
                { text: 'Free to be yourself', value: 'free', scores: { authenticity: 2 } },
                { text: 'Supported in your goals', value: 'supported', scores: { support_need: 2 } }
            ],
            next: 'q12'
        },
        {
            id: 'q12',
            text: 'What\'s a deal-breaker you know for sure?',
            type: 'single',
            answers: [
                { text: 'Poor communication', value: 'communication', scores: { communication_priority: 2 } },
                { text: 'Different life goals', value: 'goals', scores: { alignment_need: 2 } },
                { text: 'Lack of emotional availability', value: 'availability', scores: { emotional_need: 2 } },
                { text: 'No physical chemistry', value: 'chemistry', scores: { physical_importance: 2 } },
                { text: 'Incompatible values', value: 'values', scores: { values_priority: 2 } },
                { text: 'Not sure yet', value: 'unsure', scores: { clarity: -1 } }
            ],
            next: 'q13'
        },
        {
            id: 'q13',
            text: 'What scares you most about dating right now?',
            type: 'single',
            answers: [
                { text: 'Wasting time on wrong people', value: 'time', scores: { efficiency_focus: 1 } },
                { text: 'Getting hurt', value: 'hurt', scores: { vulnerability_fear: 2 } },
                { text: 'Not finding what I\'m looking for', value: 'not_finding', scores: { scarcity_mindset: 1 } },
                { text: 'Settling for less than I deserve', value: 'settling', scores: { standards: 2 } },
                { text: 'Losing myself in someone', value: 'losing_self', scores: { identity_fear: 2 } },
                { text: 'Honestly, not much scares me', value: 'fearless', scores: { confidence: 2 } }
            ],
            next: 'q14'
        },
        {
            id: 'q14',
            text: 'How important is physical attraction from the start?',
            type: 'single',
            answers: [
                { text: 'Essential—it has to be there', value: 'essential', scores: { physical_priority: 2 } },
                { text: 'Important, but can grow', value: 'can_grow', scores: { openness: 1 } },
                { text: 'Matters, but not everything', value: 'moderate', scores: { balance: 1 } },
                { text: 'Connection matters more', value: 'connection', scores: { depth_priority: 2 } },
                { text: 'Honestly depends on the person', value: 'varies', scores: { flexibility: 1 } }
            ],
            next: 'q15'
        },
        {
            id: 'q15',
            text: 'What does emotional intimacy mean to you?',
            type: 'single',
            answers: [
                { text: 'Sharing deep thoughts and feelings', value: 'sharing', scores: { emotional_depth: 2 } },
                { text: 'Feeling truly understood', value: 'understood', scores: { understanding_need: 2 } },
                { text: 'Being able to be vulnerable', value: 'vulnerable', scores: { vulnerability_comfort: 1 } },
                { text: 'Having someone who really knows you', value: 'known', scores: { intimacy_desire: 2 } },
                { text: 'Consistent emotional support', value: 'support', scores: { support_need: 2 } },
                { text: 'Still figuring that out', value: 'unsure', scores: { emotional_awareness: -1 } }
            ],
            next: 'q16'
        },
        {
            id: 'q16',
            text: 'Pick the statement that resonates most:',
            type: 'single',
            answers: [
                { text: 'I tend to fall hard and fast', value: 'fast', scores: { attachment_anxiety: 2 } },
                { text: 'I need lots of time to open up', value: 'slow', scores: { guarded: 2 } },
                { text: 'I get excited then pull away', value: 'push_pull', scores: { avoidance: 2 } },
                { text: 'I\'m steady and consistent', value: 'steady', scores: { secure_attachment: 2 } },
                { text: 'My pattern is unpredictable', value: 'unpredictable', scores: { inconsistency: 1 } }
            ],
            next: 'q17'
        },
        {
            id: 'q17',
            text: 'How do you feel about texting in the early stages of dating?',
            context: 'Small detail, big insight.',
            type: 'single',
            answers: [
                { text: 'Love frequent communication', value: 'frequent', scores: { connection_need: 2 } },
                { text: 'Quality over quantity', value: 'quality', scores: { intentional_communication: 1 } },
                { text: 'Prefer in-person to texting', value: 'in_person', scores: { presence_priority: 1 } },
                { text: 'Texting feels like a chore', value: 'chore', scores: { communication_resistance: 1 } },
                { text: 'Appreciate space between texts', value: 'space', scores: { independence: 1 } }
            ],
            next: 'q18'
        },
        {
            id: 'q18',
            text: 'What would you need from a partner when you\'re stressed or struggling?',
            type: 'single',
            answers: [
                { text: 'Active help solving the problem', value: 'solutions', scores: { practical_support: 2 } },
                { text: 'Emotional support and listening', value: 'emotional', scores: { emotional_support_need: 2 } },
                { text: 'Space to handle it myself', value: 'space', scores: { independence: 2 } },
                { text: 'Distraction and lightness', value: 'distraction', scores: { escapist_tendency: 1 } },
                { text: 'Just their presence', value: 'presence', scores: { presence_need: 2 } }
            ],
            next: 'q19'
        },
        {
            id: 'q19',
            text: 'What\'s more important to you in a partner?',
            type: 'single',
            answers: [
                { text: 'Emotional intelligence', value: 'eq', scores: { emotional_priority: 2 } },
                { text: 'Ambition and drive', value: 'ambition', scores: { achievement_priority: 2 } },
                { text: 'Kindness and empathy', value: 'kindness', scores: { compassion_priority: 2 } },
                { text: 'Intelligence and wit', value: 'intelligence', scores: { mental_stimulation: 2 } },
                { text: 'Stability and reliability', value: 'stability', scores: { stability_priority: 2 } },
                { text: 'Passion and intensity', value: 'passion', scores: { passion_priority: 2 } }
            ],
            next: 'q20'
        },
        {
            id: 'q20',
            text: 'How do you know when you\'re ready to be exclusive with someone?',
            type: 'single',
            answers: [
                { text: 'When I stop wanting to see other people', value: 'natural', scores: { organic_approach: 2 } },
                { text: 'After a certain amount of time', value: 'timeline', scores: { structured_approach: 1 } },
                { text: 'When we have "the talk"', value: 'discussion', scores: { communication: 2 } },
                { text: 'When I feel emotionally safe', value: 'safety', scores: { security_need: 2 } },
                { text: 'When the connection is undeniable', value: 'undeniable', scores: { feeling_based: 2 } },
                { text: 'I don\'t really know', value: 'unsure', scores: { clarity: -1 } }
            ],
            next: 'adaptive'
        }
    ],

    // Adaptive deep-dive questions based on detected patterns
    adaptive: [
        {
            id: 'q21',
            text: 'If you could wave a wand and have the perfect relationship tomorrow, what would change in your life?',
            context: 'What would actually be different?',
            type: 'single',
            answers: [
                { text: 'I\'d feel more complete', value: 'completion', scores: { wholeness_seeking: 2 } },
                { text: 'I\'d have a partner in everything', value: 'partnership', scores: { companionship: 2 } },
                { text: 'Life would feel more meaningful', value: 'meaning', scores: { meaning_seeking: 2 } },
                { text: 'I\'d be happier day to day', value: 'happiness', scores: { happiness_focus: 1 } },
                { text: 'Not sure much would change', value: 'minimal', scores: { independence: 2 } },
                { text: 'I\'d feel less lonely', value: 'loneliness', scores: { loneliness_factor: 2 } }
            ],
            next: 'q22'
        },
        {
            id: 'q22',
            text: 'What\'s something you\'re not willing to compromise on?',
            type: 'single',
            answers: [
                { text: 'My career and ambitions', value: 'career', scores: { career_priority: 2 } },
                { text: 'My independence and alone time', value: 'independence', scores: { autonomy_need: 2 } },
                { text: 'My values and beliefs', value: 'values', scores: { values_priority: 2 } },
                { text: 'My friendships and social life', value: 'social', scores: { social_priority: 2 } },
                { text: 'My lifestyle and routines', value: 'lifestyle', scores: { routine_need: 2 } },
                { text: 'Where I live', value: 'location', scores: { location_priority: 2 } }
            ],
            next: 'q23'
        },
        {
            id: 'q23',
            text: 'Think about your last few romantic interests. What did they have in common?',
            type: 'single',
            answers: [
                { text: 'Hard to get/emotionally distant', value: 'distant', scores: { chase_pattern: 2 } },
                { text: 'Very different from each other', value: 'different', scores: { inconsistent_type: 1 } },
                { text: 'Similar personality type', value: 'similar', scores: { type_pattern: 1 } },
                { text: 'Unavailable in some way', value: 'unavailable', scores: { unavailable_pattern: 2 } },
                { text: 'Actually nothing in common', value: 'nothing', scores: { random_selection: 1 } },
                { text: 'Can\'t identify a pattern', value: 'no_pattern', scores: { awareness: -1 } }
            ],
            next: 'q24'
        },
        {
            id: 'q24',
            text: 'What would make you lose interest in someone you were dating?',
            type: 'single',
            answers: [
                { text: 'They become too available/eager', value: 'too_available', scores: { avoidance: 2 } },
                { text: 'The excitement fades', value: 'no_excitement', scores: { stimulation_need: 2 } },
                { text: 'They don\'t meet my needs', value: 'unmet_needs', scores: { needs_clarity: 1 } },
                { text: 'I realize we\'re incompatible', value: 'incompatible', scores: { discernment: 1 } },
                { text: 'I get scared of getting close', value: 'fear', scores: { intimacy_fear: 2 } },
                { text: 'They show red flags', value: 'red_flags', scores: { awareness: 2 } }
            ],
            next: 'q25'
        },
        {
            id: 'q25',
            text: 'How comfortable are you being single right now?',
            context: 'Real talk.',
            type: 'single',
            answers: [
                { text: 'Very comfortable, even prefer it', value: 'prefer', scores: { single_satisfaction: 2 } },
                { text: 'Comfortable but open to someone', value: 'comfortable_open', scores: { balanced_desire: 2 } },
                { text: 'Okay with it, sometimes lonely', value: 'okay_lonely', scores: { moderate_desire: 1 } },
                { text: 'Ready to not be single', value: 'ready', scores: { relationship_desire: 2 } },
                { text: 'Struggling with being single', value: 'struggling', scores: { loneliness_factor: 2 } }
            ],
            next: 'final_questions'
        }
    ],

    // Final clarifying questions
    final: [
        {
            id: 'q26',
            text: 'What does success in dating look like for you?',
            type: 'single',
            answers: [
                { text: 'Finding a life partner', value: 'life_partner', scores: { long_term_focus: 3 } },
                { text: 'A healthy, happy relationship', value: 'healthy', scores: { quality_focus: 2 } },
                { text: 'Having fun and connecting', value: 'fun', scores: { casual_openness: 2 } },
                { text: 'Learning about myself', value: 'learning', scores: { growth_focus: 2 } },
                { text: 'Not settling for less', value: 'standards', scores: { standards: 2 } }
            ],
            next: 'q27'
        },
        {
            id: 'q27',
            text: 'One more: What do you think you need to work on before or during your next relationship?',
            context: 'This is for you, not anyone else.',
            type: 'single',
            answers: [
                { text: 'My communication skills', value: 'communication', scores: { growth_area_communication: 1 } },
                { text: 'My boundaries', value: 'boundaries', scores: { growth_area_boundaries: 1 } },
                { text: 'My attachment patterns', value: 'attachment', scores: { growth_area_attachment: 1 } },
                { text: 'My self-worth', value: 'self_worth', scores: { growth_area_worth: 1 } },
                { text: 'Being more vulnerable', value: 'vulnerability', scores: { growth_area_vulnerability: 1 } },
                { text: 'Honestly, nothing major', value: 'nothing', scores: { self_acceptance: 2 } }
            ],
            next: 'end'
        }
    ]
};
