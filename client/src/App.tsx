import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useLocation } from 'wouter';
import ErrorBoundary from '@/components/ErrorBoundary';
import AppShell from '@/components/AppShell';
import Landing from '@/pages/Landing';
import AuthPage from '@/pages/AuthPage';
import { Courses, Dashboard, Exercises, GitHubPage, Lab, Profile, Projects, ProgressPage, Quizzes, SettingsPage, Tracks, Videos } from '@/pages/Platform';
import { useAuth } from '@/_core/hooks/useAuth';
import { Loader2 } from 'lucide-react';

function PlatformRouter() {
  const [location, navigate] = useLocation();
  const go = (path: string) => navigate(path);
  const page = location.split('/')[2] || 'dashboard';
  const content = page === 'dashboard' ? <Dashboard go={go} />
    : page === 'courses' ? <Courses go={go} />
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
  const [location] = useLocation();
  const auth = useAuth();
  const isAuthRoute = location === '/auth' || location === '/auth/login' || location === '/auth/signup' || location === '/criar-conta';
  const isSignup = location === '/auth/signup' || location === '/criar-conta';

  if (location === '/') return <Landing />;
  if (isAuthRoute) return <AuthPage initialMode={isSignup ? 'signup' : 'login'} />;
  if (location.startsWith('/app')) {
    if (auth.loading) return <AuthLoading />;
    if (!auth.isAuthenticated) return <AuthPage initialMode="login" />;
    return <PlatformRouter />;
  }
  return <Landing />;
}

function AuthLoading() {
  return <div className="flex min-h-screen items-center justify-center bg-[#0d0f13] text-[#b9ee83]"><div className="flex items-center gap-3 text-[12px] font-semibold"><Loader2 size={17} className="animate-spin" /> Verificando sua sessão...</div></div>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><Toaster theme="dark" position="bottom-right" /><AppRoutes /></ThemeProvider></ErrorBoundary>;
}

export default App;
