import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const quizQuestions = [
        // Bangladesh Questions (6 total)
        {
            question: 'When did Bangladesh gain Test cricket status?',
            options: ['1998', '2000', '2002', '2004'],
            correctAnswer: '2000',
            explanation: 'Bangladesh was granted Test status on June 26, 2000, becoming the 10th Test-playing nation.'
        },
        {
            question: 'Who is Bangladesh\'s highest ODI run-scorer?',
            options: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mahmudullah'],
            correctAnswer: 'Tamim Iqbal',
            explanation: 'Tamim Iqbal is Bangladesh\'s leading ODI run-scorer with over 8,000 runs.'
        },
        {
            question: 'What is the nickname of Bangladesh\'s cricket team?',
            options: ['Tigers', 'Lions', 'Panthers', 'Warriors'],
            correctAnswer: 'Tigers',
            explanation: 'Bangladesh national cricket team is nicknamed the "Tigers" or "Bengal Tigers".'
        },
        {
            question: 'Which stadium is the home ground of Bangladesh cricket team?',
            options: ['Eden Gardens', 'Shere Bangla National Stadium', 'Gaddafi Stadium', 'R. Premadasa Stadium'],
            correctAnswer: 'Shere Bangla National Stadium',
            explanation: 'The Shere Bangla National Stadium in Mirpur, Dhaka is Bangladesh\'s premier cricket venue.'
        },
        {
            question: 'Who is the only player to score 4000+ runs and take 250+ wickets in both Tests and ODIs?',
            options: ['Jacques Kallis', 'Shakib Al Hasan', 'Ian Botham', 'Kapil Dev'],
            correctAnswer: 'Shakib Al Hasan',
            explanation: 'Shakib Al Hasan from Bangladesh achieved this unique all-rounder feat in cricket history.'
        },
        {
            question: 'In which year did Bangladesh reach their first ODI Cricket World Cup quarter-final?',
            options: ['2011', '2013', '2015', '2019'],
            correctAnswer: '2015',
            explanation: 'Bangladesh reached the quarter-finals of the 2015 Cricket World Cup, defeating England in the group stage.'
        },

        // Other Countries Questions (7 total)
        {
            question: 'Which country won the first ODI Cricket World Cup in 1975?',
            options: ['Australia', 'West Indies', 'England', 'Pakistan'],
            correctAnswer: 'West Indies',
            explanation: 'West Indies won the inaugural ODI Cricket World Cup in 1975, defeating Australia in the final.'
        },
        {
            question: 'Which Australian cricketer is known as "The Don"?',
            options: ['Ricky Ponting', 'Steve Waugh', 'Don Bradman', 'Shane Warne'],
            correctAnswer: 'Don Bradman',
            explanation: 'Sir Donald Bradman is regarded as the greatest batsman of all time with a Test average of 99.94.'
        },
        {
            question: 'Which Pakistani bowler was the first to bowl at 100 mph?',
            options: ['Wasim Akram', 'Waqar Younis', 'Shoaib Akhtar', 'Mohammad Amir'],
            correctAnswer: 'Shoaib Akhtar',
            explanation: 'Shoaib Akhtar bowled the fastest ball in cricket history at 161.3 km/h (100.2 mph) in 2003.'
        },
        {
            question: 'Which country has won the most ODI Cricket World Cups?',
            options: ['West Indies', 'Australia', 'England', 'Pakistan'],
            correctAnswer: 'Australia',
            explanation: 'Australia has won the Cricket World Cup 5 times (1987, 1999, 2003, 2007, 2015).'
        },
        {
            question: 'Which South African cricketer scored the fastest ODI century?',
            options: ['AB de Villiers', 'Herschelle Gibbs', 'Graeme Smith', 'Jacques Kallis'],
            correctAnswer: 'AB de Villiers',
            explanation: 'AB de Villiers scored the fastest ODI century off just 31 balls in 2015.'
        },
        {
            question: 'Which English ground is known as the "Home of Cricket"?',
            options: ['The Oval', 'Old Trafford', 'Lord\'s', 'Edgbaston'],
            correctAnswer: 'Lord\'s',
            explanation: 'Lord\'s Cricket Ground in London is known as the "Home of Cricket" and headquarters of the MCC.'
        },
        {
            question: 'Which spinner has taken the most Test wickets in history?',
            options: ['Shane Warne', 'Muttiah Muralitharan', 'Anil Kumble', 'Rangana Herath'],
            correctAnswer: 'Muttiah Muralitharan',
            explanation: 'Muttiah Muralitharan from Sri Lanka holds the record with 800 Test wickets.'
        },

        // General Cricket Questions (7 total)
        {
            question: 'How many players are there in a cricket team?',
            options: ['9', '10', '11', '12'],
            correctAnswer: '11',
            explanation: 'A cricket team consists of 11 players.'
        },
        {
            question: 'What is the maximum number of overs in an ODI match?',
            options: ['40', '45', '50', '60'],
            correctAnswer: '50',
            explanation: 'An ODI match consists of 50 overs per side.'
        },
        {
            question: 'How many balls are there in an over?',
            options: ['4', '5', '6', '8'],
            correctAnswer: '6',
            explanation: 'An over in cricket consists of 6 legal deliveries.'
        },
        {
            question: 'What does LBW stand for?',
            options: ['Left Before Wicket', 'Leg Before Wicket', 'Line Before Wicket', 'Lost Ball Wicket'],
            correctAnswer: 'Leg Before Wicket',
            explanation: 'LBW stands for Leg Before Wicket, a method of dismissal.'
        },
        {
            question: 'What is a "hat-trick" in cricket?',
            options: ['Scoring 3 centuries', 'Taking 3 wickets in 3 successive balls', 'Hitting 3 sixes', 'Winning 3 matches'],
            correctAnswer: 'Taking 3 wickets in 3 balls',
            explanation: 'A hat-trick is when a bowler takes three wickets with consecutive deliveries.'
        },
        {
            question: 'What is the distance between the two sets of stumps?',
            options: ['18 yards', '20 yards', '22 yards', '24 yards'],
            correctAnswer: '22 yards',
            explanation: 'The pitch is 22 yards (20.12 meters) between the two sets of stumps.'
        },
        {
            question: 'What is the term for a batsman being out without scoring?',
            options: ['Golden Duck', 'Duck', 'Zero', 'Blank'],
            correctAnswer: 'Duck',
            explanation: 'A "duck" is when a batsman is dismissed without scoring any runs.'
        }
    ];

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);

        if (answer === quizQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < quizQuestions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null);
            } else {
                setShowScore(true);
            }
        }, 1500);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
    };

    const getScoreMessage = () => {
        const percentage = (score / quizQuestions.length) * 100;
        if (percentage === 100) return '🏆 Perfect! You\'re a cricket genius!';
        if (percentage >= 80) return '🎉 Excellent! You know your cricket!';
        if (percentage >= 60) return '👍 Good job! Keep learning!';
        if (percentage >= 40) return '📚 Not bad! Study more cricket facts!';
        return '💪 Keep trying! Practice makes perfect!';
    };

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Back Button */}
                <Link to="/dashboard" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                }}>
                    ← Back to Dashboard
                </Link>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        🧠 Cricket Quiz
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Test your knowledge with 20 challenging cricket questions!
                    </p>
                </div>

                {/* Quiz Container */}
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '3rem',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                }}>
                    {showScore ? (
                        // Score Screen
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{
                                fontSize: '2.5rem',
                                marginBottom: '1rem',
                                color: 'var(--text-primary)'
                            }}>
                                Quiz Complete!
                            </h2>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: '700',
                                color: '#ff7800',
                                marginBottom: '1rem'
                            }}>
                                {score}/{quizQuestions.length}
                            </div>
                            <p style={{
                                fontSize: '1.5rem',
                                marginBottom: '2rem',
                                color: 'var(--text-secondary)'
                            }}>
                                {getScoreMessage()}
                            </p>
                            <button
                                onClick={restartQuiz}
                                style={{
                                    padding: '1rem 3rem',
                                    background: 'linear-gradient(135deg, #ff3300 0%, #ff9a00 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '25px',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(255, 120, 0, 0.4)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 120, 0, 0.6)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 120, 0, 0.4)';
                                }}
                            >
                                🔄 Restart Quiz
                            </button>
                        </div>
                    ) : (
                        // Question Screen
                        <>
                            {/* Progress Bar */}
                            <div style={{
                                marginBottom: '2rem',
                                background: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: '10px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                                    height: '10px',
                                    background: 'linear-gradient(90deg, #ff3300 0%, #ff9a00 100%)',
                                    borderRadius: '10px',
                                    transition: 'width 0.3s ease'
                                }}></div>
                            </div>

                            {/* Question Number */}
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '2rem',
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                fontWeight: '600'
                            }}>
                                Question {currentQuestion + 1} of {quizQuestions.length}
                            </div>

                            {/* Question */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '2rem',
                                textAlign: 'center',
                                color: 'var(--text-primary)',
                                fontWeight: '700',
                                lineHeight: '1.5'
                            }}>
                                {quizQuestions[currentQuestion].question}
                            </h3>

                            {/* Answer Options */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1rem',
                                marginBottom: '2rem'
                            }}>
                                {quizQuestions[currentQuestion].options.map((option, index) => {
                                    const isCorrect = option === quizQuestions[currentQuestion].correctAnswer;
                                    const isSelected = option === selectedAnswer;
                                    const showResult = selectedAnswer !== null;

                                    let buttonStyle = {
                                        padding: '1.2rem',
                                        background: 'var(--card-bg)',
                                        border: '2px solid rgba(0, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: showResult ? 'default' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        color: 'var(--text-primary)'
                                    };

                                    if (showResult) {
                                        if (isCorrect) {
                                            buttonStyle.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
                                            buttonStyle.color = 'white';
                                            buttonStyle.borderColor = '#11998e';
                                        } else if (isSelected) {
                                            buttonStyle.background = 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)';
                                            buttonStyle.color = 'white';
                                            buttonStyle.borderColor = '#eb3349';
                                        }
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => !showResult && handleAnswerClick(option)}
                                            disabled={showResult}
                                            style={buttonStyle}
                                            onMouseEnter={(e) => {
                                                if (!showResult) {
                                                    e.currentTarget.style.borderColor = '#ff3300';
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!showResult) {
                                                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }
                                            }}
                                        >
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Explanation (shown after answering) */}
                            {selectedAnswer && (
                                <div style={{
                                    padding: '1.5rem',
                                    background: 'rgba(255, 120, 0, 0.1)',
                                    borderRadius: '12px',
                                    borderLeft: '4px solid #ff3300',
                                    animation: 'slideDown 0.3s ease'
                                }}>
                                    <p style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6',
                                        color: 'var(--text-primary)',
                                        margin: 0
                                    }}>
                                        <strong>💡 Explanation:</strong> {quizQuestions[currentQuestion].explanation}
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Animation */}
                <style>{`
                    @keyframes slideDown {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Quiz;