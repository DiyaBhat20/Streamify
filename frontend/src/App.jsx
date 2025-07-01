import { Navigate, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  /*const { isLoading, authUser } = useAuthUser();
  const { theme } = useThemeStore();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if (isLoading) return <PageLoader />;*/

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
                <HomePage />
          }
        />
        <Route
          path="/signup"
          element={
           <SignUpPage />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage />
          }
        />
        <Route
          path="/notifications"
          element={
                <NotificationsPage />
          }
        />
        <Route
          path="/call"
          element={
              <CallPage />
          }
        />

        <Route
          path="/chat"
          element={
                <ChatPage />
          }
        />

        <Route
          path="/onboarding"
          element={
                <OnboardingPage />
          }
          />
      </Routes>
        
      <Toaster/>
    </div>
  );
};

export default App