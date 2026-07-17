import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Pricing } from './components/sections/Pricing';
import { Skills } from './components/sections/Skills';
import { Testimonials } from './components/sections/Testimonials';
import { RecentWork } from './components/sections/RecentWork';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { ScrollToTop } from './components/ScrollToTop';

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <main className="bg-[#090909] text-white min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Pricing />
      <Skills />
      <Testimonials />
      <RecentWork />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
