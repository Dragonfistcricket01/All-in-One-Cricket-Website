import React, { useState, useEffect } from 'react';
//import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ComparisonProvider } from './context/ComparisonContext';
import { ReviewsProvider } from './context/ReviewsContext';
import { OrdersProvider } from './context/OrdersContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { LessonsProvider } from './context/LessonsContext';
import { ToastProvider } from './components/ToastContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import CookieConsent from './components/CookieConsent';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Polls from './components/Polls';
import Quiz from './components/Quiz';
import Trivia from './components/Trivia';
import CommunityHub from './components/CommunityHub';
import FanClub from './components/FanClub';
import ContentGenerator from './components/ContentGenerator';
import TeamBuilder from './components/TeamBuilder';
import DoodleCricket from './components/DoodleCricket';
import DailyRewards from './components/DailyRewards';
import Settings from './components/Settings';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import Careers from './components/Careers';
import ScrollToTop from './components/ScrollToTop';
import RulesLawsRegulations from './components/RulesLawsRegulations';
import CricketRules from './components/CricketRules';
import CricketLaws from './components/CricketLaws';
import CricketRegulations from './components/CricketRegulations';
import HistoryOfCricket from './components/HistoryOfCricket';
import StadiumInformation from './components/StadiumInformation';
import CricketNews from './components/CricketNews';
import CricketClubs from './components/CricketClubs';
import CricketStore from './components/CricketStore';
import ProductCategory from './components/ProductCategory';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import OrderHistory from './components/OrderHistory';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import ProductComparison from './components/ProductComparison';
import PlayerProfiles from './components/stats/PlayerProfiles/PlayerProfiles';
import PlayerDetails from './components/stats/PlayerProfiles/PlayerDetails';
import AdvancedAnalytics from './components/stats/AdvancedAnalytics';
import PlayerRankings from './components/stats/PlayerRankings/PlayerRankings';
import { TeamRankingsProvider } from './context/TeamRankingsContext';
import TeamRankings from './components/stats/team-rankings/TeamRankings';
import Lessons from './components/entertainment/lessons/Lessons';
import LessonDetail from './components/entertainment/lessons/LessonDetail';
import { TutorialsProvider } from './context/TutorialsContext';
import Tutorials from './components/entertainment/tutorials/Tutorials';
import TutorialDetail from './components/entertainment/tutorials/TutorialDetail';
import { AnalysisProvider } from './context/AnalysisContext';
import Analysis from './components/entertainment/analysis/Analysis';
import AnalysisDetail from './components/entertainment/analysis/AnalysisDetail';
import TeamStatistics from './components/stats/team-statistics/TeamStatistics';
import FixturesResults from './components/FixturesResults';
import LiveScores from './components/LiveScores';
import PlayerRatings from './components/PlayerRatings';
import InteractiveGames from './components/InteractiveGames';
import AIQuizGenerator from './components/AIQuizGenerator';
import AIChatbot from './components/AIChatbot';
import RuleBasedChatbot from './components/RuleBasedChatbot';
import ChatbotSelection from './components/ChatbotSelection';
import MatchPredictor from './components/MatchPredictor';
import PitchPredictor from './components/PitchPredictor';
import PlayerPerformancePredictor from './components/PlayerPerformancePredictor';
import MLMatchPredictor from './components/MLMatchPredictor';
import FloatingChatWidget from './components/FloatingChatWidget';
//import FloatingLiveScoreWidget from './components/FloatingLiveScoreWidget';
import AdminSyncLogs from './pages/AdminSyncLogs';

import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Handle Login
  const handleLogin = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  // Handle Register
  const handleRegister = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  // Handle Logout
  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <CurrencyProvider>
          <CartProvider>
            <WishlistProvider>
              <OrdersProvider>
                <ComparisonProvider>
                  <ReviewsProvider>
                    <LessonsProvider>
                      <TutorialsProvider>
                        <AnalysisProvider>
                          <TeamRankingsProvider>
                            <Router>
                              <ScrollToTop />
                              <div className="App">
                                <Header />
                                <main className="main-content">
                                  <Routes>
                                    {/* Home Route*/}
                                    <Route path="/" element={<Home />} />

                                    {/* Auth Routes */}
                                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                                    <Route path="/register" element={<Register onRegister={handleRegister} />} />

                                    {/* Protected Routes */}
                                    <Route
                                      path="/dashboard"
                                      element={
                                        <ProtectedRoute>
                                          <Dashboard user={user} onLogout={handleLogout} />
                                        </ProtectedRoute>
                                      }
                                    />
                                    <Route
                                      path="/polls"
                                      element={
                                        <ProtectedRoute>
                                          <Polls user={user} onLogout={handleLogout} />
                                        </ProtectedRoute>
                                      }
                                    />
                                    <Route
                                      path="/quiz"
                                      element={
                                        <ProtectedRoute>
                                          <Quiz user={user} onLogout={handleLogout} />
                                        </ProtectedRoute>
                                      }
                                    />
                                    <Route
                                      path="/trivia"
                                      element={
                                        <ProtectedRoute>
                                          <Trivia user={user} onLogout={handleLogout} />
                                        </ProtectedRoute>
                                      }
                                    />
                                    <Route
                                      path="/profile"
                                      element={
                                        <ProtectedRoute>
                                          <Settings user={user} onLogout={handleLogout} />
                                        </ProtectedRoute>
                                      }
                                    />

                                    {/* Public Pages */}
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                                    <Route path="/terms-of-service" element={<TermsOfService />} />
                                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                                    <Route path="/about-us" element={<AboutUs />} />
                                    <Route path="/our-team" element={<OurTeam />} />
                                    <Route path="/careers" element={<Careers />} />

                                    {/*  AI  */}
                                    <Route path="/ai-quiz" element={<AIQuizGenerator />} />
                                    <Route path="/ai-chat" element={<AIChatbot />} />
                                    <Route path="/cricket-bot" element={<RuleBasedChatbot />} />
                                    <Route path="/chatbots" element={<ChatbotSelection />} />
                                    <Route path="/match-predictor" element={<MatchPredictor />} />
                                    <Route path="/pitch-predictor" element={<PitchPredictor />} />
                                    <Route path="/player-predictor" element={<PlayerPerformancePredictor />} />
                                    <Route path="/ml-predictor" element={<MLMatchPredictor />} />
                                    <Route path="/admin/sync-logs" element={<AdminSyncLogs />} />

                                    {/* Cricket Information Pages */}
                                    <Route path="/rules-laws-regulations" element={<RulesLawsRegulations />} />
                                    <Route path="/cricket-rules" element={<CricketRules />} />
                                    <Route path="/cricket-laws" element={<CricketLaws />} />
                                    <Route path="/cricket-regulations" element={<CricketRegulations />} />
                                    <Route path="/history-of-cricket" element={<HistoryOfCricket />} />
                                    <Route path="/stadium-information" element={<StadiumInformation />} />
                                    <Route path="/news" element={<CricketNews />} />
                                    <Route path="/find-club" element={<CricketClubs />} />

                                    {/* Entertainment */}
                                    <Route path="/community" element={<CommunityHub />} />
                                    <Route path="/fan-club" element={<FanClub />} />
                                    <Route path="/content-generator" element={<ContentGenerator />} />
                                    <Route path="/team-builder" element={<TeamBuilder />} />
                                    <Route path="/doodle-cricket" element={<DoodleCricket />} />
                                    <Route path="/daily-rewards" element={<DailyRewards />} />
                                    {/* Lessons Routes */}
                                    <Route path="/lessons" element={<Lessons />} />
                                    <Route path="/lessons/:lessonId" element={<LessonDetail />} />
                                    {/* Tutorials Routes */}
                                    <Route path="/tutorials" element={<Tutorials />} />
                                    <Route path="/tutorials/:tutorialId" element={<TutorialDetail />} />
                                    {/* Analysis Routes */}
                                    <Route path="/analysis" element={<Analysis />} />
                                    <Route path="/analysis/:analysisId" element={<AnalysisDetail />} />

                                    {/* Statistics & Data Pages */}
                                    <Route path="/stats/players" element={<PlayerProfiles />} />
                                    <Route path="/stats/players/:playerId" element={<PlayerDetails />} />
                                    <Route path="/stats/analytics" element={<AdvancedAnalytics />} />
                                    <Route path="/stats/player-rankings" element={<PlayerRankings />} />
                                    <Route path="/stats/team-rankings" element={<TeamRankings />} />
                                    <Route path="/stats/team-statistics" element={<TeamStatistics />} />

                                    {/* Events & Live Content */}
                                    <Route path="/fixtures-results" element={<FixturesResults />} />
                                    <Route path="/live-scores" element={<LiveScores />} />
                                    <Route path="/player-ratings" element={<PlayerRatings />} />
                                    <Route path="/games" element={<InteractiveGames />} />

                                    {/* Cricket Store Routes */}
                                    <Route path="/cricket-store" element={<CricketStore />} />
                                    <Route path="/cricket-store/:category" element={<ProductCategory />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/wishlist" element={<Wishlist />} />
                                    <Route path="/compare" element={<ProductComparison />} />
                                    <Route path="/orders" element={<OrderHistory />} />
                                    <Route path="/checkout" element={<Checkout />} />
                                    <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                                  </Routes>
                                </main>
                                <Footer />
                                <CookieConsent />
                                {/*<FloatingLiveScoreWidget />*/}
                                <FloatingChatWidget />
                              </div>
                            </Router>
                          </TeamRankingsProvider>
                        </AnalysisProvider>
                      </TutorialsProvider>
                    </LessonsProvider>
                  </ReviewsProvider>
                </ComparisonProvider>
              </OrdersProvider>
            </WishlistProvider>
          </CartProvider>
        </CurrencyProvider>
        {/*
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        */}
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;