import React, { useState } from 'react';
import { generateCricketQuiz, generateTriviaQuestion, explainCricketRule } from '../services/geminiService';
import './AIQuizGenerator.css';

const AIQuizGenerator = () => {
    const [activeTab, setActiveTab] = useState('quiz'); // quiz, trivia, rules

    // Quiz state
    const [difficulty, setDifficulty] = useState('medium');
    const [category, setCategory] = useState('general');
    const [numberOfQuestions, setNumberOfQuestions] = useState(5);
    const [quiz, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    // Trivia state
    const [trivia, setTrivia] = useState(null);
    const [triviaAnswer, setTriviaAnswer] = useState(null);

    // Rules explanation state
    const [ruleQuery, setRuleQuery] = useState('');
    const [ruleExplanation, setRuleExplanation] = useState('');
    const [isExplaining, setIsExplaining] = useState(false);

    // Generate Quiz
    const handleGenerateQuiz = async () => {
        setIsGenerating(true);
        setQuiz([]);
        setCurrentQuestion(0);
        setScore(0);
        setQuizCompleted(false);
        setSelectedAnswer(null);
        setShowExplanation(false);

        const result = await generateCricketQuiz(difficulty, category, numberOfQuestions);

        if (result.success) {
            setQuiz(result.quiz);
        } else {
            alert(result.message);
        }

        setIsGenerating(false);
    };

    // Handle answer selection
    const handleAnswerSelect = (answerIndex) => {
        if (showExplanation) return; // Prevent changing answer after submission

        setSelectedAnswer(answerIndex);
    };

    // Submit answer
    const handleSubmitAnswer = () => {
        if (selectedAnswer === null) {
            alert('Please select an answer!');
            return;
        }

        setShowExplanation(true);

        // Check if answer is correct
        if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    // Next question
    const handleNextQuestion = () => {
        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizCompleted(true);
        }
    };

    // Restart quiz
    const handleRestartQuiz = () => {
        setQuiz([]);
        setCurrentQuestion(0);
        setScore(0);
        setQuizCompleted(false);
        setSelectedAnswer(null);
        setShowExplanation(false);
    };

    // Generate Trivia
    const handleGenerateTrivia = async () => {
        setIsGenerating(true);
        setTrivia(null);
        setTriviaAnswer(null);

        const result = await generateTriviaQuestion();

        if (result.success) {
            setTrivia(result.trivia);
        } else {
            alert(result.message);
        }

        setIsGenerating(false);
    };

    // Explain Rule
    const handleExplainRule = async () => {
        if (!ruleQuery.trim()) {
            alert('Please enter a cricket rule or concept to explain!');
            return;
        }

        setIsExplaining(true);
        setRuleExplanation('');

        const result = await explainCricketRule(ruleQuery);

        if (result.success) {
            setRuleExplanation(result.explanation);
        } else {
            alert(result.message);
        }

        setIsExplaining(false);
    };

    return (
        <div className="ai-quiz-generator">
            <div className="quiz-header">
                <h1>🤖 AI Cricket Quiz Generator</h1>
                <p>Powered by Google Gemini AI</p>
            </div>

            {/* Tabs */}
            <div className="quiz-tabs">
                <button
                    className={`tab-button ${activeTab === 'quiz' ? 'active' : ''}`}
                    onClick={() => setActiveTab('quiz')}
                >
                    📝 Quiz Generator
                </button>
                <button
                    className={`tab-button ${activeTab === 'trivia' ? 'active' : ''}`}
                    onClick={() => setActiveTab('trivia')}
                >
                    🎯 Daily Trivia
                </button>
                <button
                    className={`tab-button ${activeTab === 'rules' ? 'active' : ''}`}
                    onClick={() => setActiveTab('rules')}
                >
                    📚 Rules Explainer
                </button>
            </div>

            {/* Quiz Generator Tab */}
            {activeTab === 'quiz' && (
                <div className="quiz-content">
                    {quiz.length === 0 ? (
                        <div className="quiz-setup">
                            <h2>Create Your Custom Cricket Quiz</h2>

                            <div className="setup-section">
                                <label>Difficulty Level:</label>
                                <div className="button-group">
                                    <button
                                        className={`option-button ${difficulty === 'easy' ? 'selected' : ''}`}
                                        onClick={() => setDifficulty('easy')}
                                    >
                                        Easy
                                    </button>
                                    <button
                                        className={`option-button ${difficulty === 'medium' ? 'selected' : ''}`}
                                        onClick={() => setDifficulty('medium')}
                                    >
                                        Medium
                                    </button>
                                    <button
                                        className={`option-button ${difficulty === 'hard' ? 'selected' : ''}`}
                                        onClick={() => setDifficulty('hard')}
                                    >
                                        Hard
                                    </button>
                                </div>
                            </div>

                            <div className="setup-section">
                                <label>Category:</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="category-select"
                                >
                                    <option value="general">🏏 General Cricket</option>
                                    <option value="players">👤 Famous Players</option>
                                    <option value="history">📜 Cricket History</option>
                                    <option value="rules">📖 Rules & Regulations</option>
                                    <option value="statistics">📊 Statistics & Records</option>
                                    <option value="worldcup">🏆 World Cup</option>
                                    <option value="ipl">🎪 BPL</option>
                                </select>
                            </div>

                            <div className="setup-section">
                                <label>Number of Questions:</label>
                                <input
                                    type="number"
                                    min="3"
                                    max="10"
                                    value={numberOfQuestions}
                                    onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                                    className="number-input"
                                />
                            </div>

                            <button
                                onClick={handleGenerateQuiz}
                                className="generate-button"
                                disabled={isGenerating}
                            >
                                {isGenerating ? '🤖 Generating Quiz...' : '🚀 Generate Quiz with AI'}
                            </button>
                        </div>
                    ) : quizCompleted ? (
                        <div className="quiz-completed">
                            <h2>🎉 Quiz Completed!</h2>
                            <div className="score-display">
                                <p className="score-text">Your Score:</p>
                                <p className="score-number">{score} / {quiz.length}</p>
                                <p className="score-percentage">{Math.round((score / quiz.length) * 100)}%</p>
                            </div>

                            <div className="completion-message">
                                {score === quiz.length && <p>🏆 Perfect Score! You're a cricket expert!</p>}
                                {score >= quiz.length * 0.7 && score < quiz.length && <p>👏 Great job! You know your cricket well!</p>}
                                {score >= quiz.length * 0.5 && score < quiz.length * 0.7 && <p>👍 Good effort! Keep learning!</p>}
                                {score < quiz.length * 0.5 && <p>📚 Keep practicing! Try an easier difficulty.</p>}
                            </div>

                            <div className="completion-buttons">
                                <button onClick={handleRestartQuiz} className="restart-button">
                                    🔄 Create New Quiz
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="quiz-questions">
                            <div className="question-header">
                                <span className="question-number">
                                    Question {currentQuestion + 1} of {quiz.length}
                                </span>
                                <span className="question-difficulty">
                                    {quiz[currentQuestion].difficulty}
                                </span>
                            </div>

                            <div className="question-text">
                                <h3>{quiz[currentQuestion].question}</h3>
                            </div>

                            <div className="options-container">
                                {quiz[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`option-card ${selectedAnswer === index ? 'selected' : ''
                                            } ${showExplanation && index === quiz[currentQuestion].correctAnswer
                                                ? 'correct'
                                                : ''
                                            } ${showExplanation && selectedAnswer === index && index !== quiz[currentQuestion].correctAnswer
                                                ? 'incorrect'
                                                : ''
                                            }`}
                                        onClick={() => handleAnswerSelect(index)}
                                        disabled={showExplanation}
                                    >
                                        <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                        <span className="option-text">{option}</span>
                                    </button>
                                ))}
                            </div>

                            {showExplanation && (
                                <div className="explanation-box">
                                    <h4>
                                        {selectedAnswer === quiz[currentQuestion].correctAnswer
                                            ? '✅ Correct!'
                                            : '❌ Incorrect'}
                                    </h4>
                                    <p>{quiz[currentQuestion].explanation}</p>
                                </div>
                            )}

                            <div className="question-actions">
                                {!showExplanation ? (
                                    <button onClick={handleSubmitAnswer} className="submit-button">
                                        Submit Answer
                                    </button>
                                ) : (
                                    <button onClick={handleNextQuestion} className="next-button">
                                        {currentQuestion < quiz.length - 1 ? 'Next Question →' : 'Finish Quiz'}
                                    </button>
                                )}
                            </div>

                            <div className="score-tracker">
                                Current Score: {score} / {currentQuestion + (showExplanation ? 1 : 0)}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Daily Trivia Tab */}
            {activeTab === 'trivia' && (
                <div className="trivia-content">
                    <h2>🎯 Daily Cricket Trivia</h2>
                    <p>Test your cricket knowledge with a random trivia question!</p>

                    <button
                        onClick={handleGenerateTrivia}
                        className="generate-button"
                        disabled={isGenerating}
                    >
                        {isGenerating ? '🤖 Generating...' : '🎲 Get Random Trivia'}
                    </button>

                    {trivia && (
                        <div className="trivia-card">
                            <h3>{trivia.question}</h3>

                            <div className="trivia-options">
                                {trivia.options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`trivia-option ${triviaAnswer !== null && index === trivia.correctAnswer
                                                ? 'correct'
                                                : ''
                                            } ${triviaAnswer === index && index !== trivia.correctAnswer
                                                ? 'incorrect'
                                                : ''
                                            }`}
                                        onClick={() => setTriviaAnswer(index)}
                                        disabled={triviaAnswer !== null}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {triviaAnswer !== null && (
                                <div className="trivia-explanation">
                                    <p><strong>Explanation:</strong> {trivia.explanation}</p>
                                    {trivia.funFact && <p><strong>Fun Fact:</strong> {trivia.funFact}</p>}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Rules Explainer Tab */}
            {activeTab === 'rules' && (
                <div className="rules-content">
                    <h2>📚 Cricket Rules Explainer</h2>
                    <p>Ask AI to explain any cricket rule or concept!</p>

                    <div className="rule-input-section">
                        <input
                            type="text"
                            placeholder="E.g., What is LBW? Explain Duckworth-Lewis method"
                            value={ruleQuery}
                            onChange={(e) => setRuleQuery(e.target.value)}
                            className="rule-input"
                            onKeyPress={(e) => e.key === 'Enter' && handleExplainRule()}
                        />
                        <button
                            onClick={handleExplainRule}
                            className="explain-button"
                            disabled={isExplaining}
                        >
                            {isExplaining ? '🤖 Explaining...' : '🔍 Explain'}
                        </button>
                    </div>

                    <div className="suggested-rules">
                        <p>Popular rules to explore:</p>
                        <div className="rule-suggestions">
                            <button onClick={() => { setRuleQuery('What is LBW rule?'); handleExplainRule(); }}>LBW</button>
                            <button onClick={() => { setRuleQuery('Explain powerplay in cricket'); handleExplainRule(); }}>Powerplay</button>
                            <button onClick={() => { setRuleQuery('What is DRS?'); handleExplainRule(); }}>DRS</button>
                            <button onClick={() => { setRuleQuery('Explain no ball rule'); handleExplainRule(); }}>No Ball</button>
                            <button onClick={() => { setRuleQuery('What is follow-on?'); handleExplainRule(); }}>Follow-on</button>
                        </div>
                    </div>

                    {ruleExplanation && (
                        <div className="rule-explanation-box">
                            <h3>📖 Explanation:</h3>
                            <div className="explanation-text">{ruleExplanation}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AIQuizGenerator;