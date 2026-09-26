import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useLocation } from 'wouter';
import ErrorBoundary from '@/components/ErrorBoundary';
import AppShell from '@/components/AppShell';
import Landing from '@/pages/Landing';
import GuestPage, { getGuestName } from '@/pages/GuestPage';
import AuthPage from '@/pages/AuthPage';
import { useAuth } from '@/_core/hooks/useAuth';
import { Courses, Dashboard, Exercises, GitHubPage, Lab, Profile, Projects, ProgressPage, Quizzes, SettingsPage, Tracks, Videos } from '@/pages/Platform';

function PlatformRouter() {
  const [location, navigate] = useLocation();
  const go = (path: string) => navigate(path);
  const page = location.split('/')[2] || 'dashboard';
  const content = page === 'dashboard' ? <Dashboard go={go} />
    : page === 'courses' ? <Courses go={go} courseId={location.split('/')[3]} />
    : page === 'tracks' ? <Tracks go={go} />
    : page === 'exercises' ? <Exercises />
    : page === 'quizzes' ? <Quizzes />
    : page === 'projects' ? <Projects />
    : page === 'videos' ? <Videos />
    : page === 'lab' ? <Lab />
    : page === 'github' ? <GitHubPage />
    : page === 'progress' ? <ProgressPage />
    : page === 'profile' ? <Profile />
    : page === 'settings' ? <SettingsPage />
    : <Dashboard go={go} />;
  return <AppShell>{content}</AppShell>;
}

function AppRoutes() {
  const [location, navigate] = useLocation();
  const guest = getGuestName();
  const { isAuthenticated, loading } = useAuth();
  if (location === '/') return <Landing />;
  if (location === '/guest') return <GuestPage />;
  if (location === '/auth' || location === '/auth/login') return <AuthPage initialMode='login' />;
  if (location === '/auth/signup' || location === '/criar-conta') return <AuthPage initialMode='signup' />;
  if (location.startsWith('/app')) {
    if (loading) return null;
    if (!guest && !isAuthenticated) { navigate('/guest'); return null; }
    return <PlatformRouter />;
  }
  return <Landing />;
}

function App() { return <ErrorBoundary><ThemeProvider defaultTheme="dark"><Toaster theme="dark" position="bottom-right" /><AppRoutes /></ThemeProvider></ErrorBoundary>; }
export default App;
