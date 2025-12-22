import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import PlayerDashboard from "./pages/PlayerDashboard";
import PlayerAvatar from "./pages/PlayerAvatar";
import TalentDiscovery from "./pages/TalentDiscovery";
import CustomerService from "./pages/CustomerService";
import AIAssistants from "./pages/AIAssistants";
import Marketing from "./pages/Marketing";
import TrainingPrograms from "./pages/TrainingPrograms";
import TalentMarketplace from "./pages/TalentMarketplace";
import Analytics from "./pages/Analytics";
import PerformanceReports from "./pages/PerformanceReports";
import ComparisonAnalytics from "./pages/ComparisonAnalytics";
import QualityReports from "./pages/QualityReports";
import AIChat from "./pages/AIChat";
import Subscriptions from "./pages/Subscriptions";
import Partnerships from "./pages/Partnerships";
import RevenueAnalytics from "./pages/RevenueAnalytics";
import AdminStatistics from "./pages/AdminStatistics";
import PaymentGateway from "./pages/PaymentGateway";
import { useAuth } from "./_core/hooks/useAuth";
import { Loader2 } from "lucide-react";

function Router() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Loader2 className="w-12 h-12 animate-spin text-cyan-400" />
      </div>
    );
  }

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/register" component={Register} />
      {/* Protected routes - will be implemented in next phases */}
      {isAuthenticated && (
        <>
          <Route path="/dashboard" component={PlayerDashboard} />
          <Route path="/avatar" component={PlayerAvatar} />
          <Route path="/talent-discovery" component={TalentDiscovery} />
          <Route path="/support" component={CustomerService} />
          <Route path="/assistants" component={AIAssistants} />
          <Route path="/marketing" component={Marketing} />
          <Route path="/programs" component={TrainingPrograms} />
          <Route path="/marketplace" component={TalentMarketplace} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/performance-reports" component={PerformanceReports} />
          <Route path="/comparison-analytics" component={ComparisonAnalytics} />
          <Route path="/quality-reports" component={QualityReports} />
          <Route path="/chat" component={AIChat} />
          <Route path="/subscriptions" component={Subscriptions} />
          <Route path="/partnerships" component={Partnerships} />
          <Route path="/revenue-analytics" component={RevenueAnalytics} />
          <Route path="/admin-statistics" component={AdminStatistics} />
          <Route path="/payment" component={PaymentGateway} />
          <Route path="/player/:id" component={() => <div>Player Profile - Coming Soon</div>} />
          <Route path="/admin" component={() => <div>Admin Panel - Coming Soon</div>} />
        </>
      )}
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
