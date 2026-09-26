import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useLocation } from 'wouter';
import ErrorBoundary from '@/components/ErrorBoundary';
import AppShell from '@/components/AppShell';
import Landing from '@/pages/Landing';
import { Courses, Dashboard, Exercises, GitHubPage, Lab, Profile, Projects, ProgressPage, Quizzes, SettingsPage, Tracks, Videos } from '@/pages/Platform';

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

function App() {
  const [location] = useLocation();
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><Toaster theme="dark" position="bottom-right" /><PlatformRouteGuard location={location} /></ThemeProvider></ErrorBoundary>;
}

function PlatformRouteGuard({ location }: { location: string }) { return location === '/' ? <Landing /> : <PlatformRouter />; }

export default App;
