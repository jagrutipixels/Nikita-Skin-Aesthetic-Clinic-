/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Route, Switch, useLocation } from 'wouter';
import { ArrowRight } from 'lucide-react';
import React, { useEffect, Suspense, lazy } from 'react';

const Hero = lazy(() => import('./components/Section1to2').then(module => ({ default: module.Hero })));
const CurrentPosition = lazy(() => import('./components/Section1to2').then(module => ({ default: module.CurrentPosition })));
const Opportunity = lazy(() => import('./components/Section3to4').then(module => ({ default: module.Opportunity })));
const MissingFoundation = lazy(() => import('./components/Section3to4').then(module => ({ default: module.MissingFoundation })));
const GrowthGaps = lazy(() => import('./components/Section3to4').then(module => ({ default: module.GrowthGaps })));
const Framework = lazy(() => import('./components/Section5to7').then(module => ({ default: module.Framework })));
const Foundation = lazy(() => import('./components/Section5to7').then(module => ({ default: module.Foundation })));
const GrowthEngine = lazy(() => import('./components/Section5to7').then(module => ({ default: module.GrowthEngine })));
const Funnel = lazy(() => import('./components/Section8to10').then(module => ({ default: module.Funnel })));
const Investment = lazy(() => import('./components/Section8to10').then(module => ({ default: module.Investment })));
const Conclusion = lazy(() => import('./components/Section8to10').then(module => ({ default: module.Conclusion })));
const ROICalculator = lazy(() => import('./components/Section8to10').then(module => ({ default: module.ROICalculator })));

const pages = [
  { path: '/', title: 'Overview' },
  { path: '/opportunity', title: 'The Opportunity' },
  { path: '/strategy', title: 'Our Strategy' },
  { path: '/implementation', title: 'Implementation' },
];

function PageLayout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();

  const currentIndex = pages.findIndex(p => p.path === location);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="hidden md:flex h-20 items-center justify-between">
            <div className="flex items-center gap-8">
              <nav>
                <ul className="flex items-center gap-8">
                  {pages.map((page) => {
                     const isActive = location === page.path;
                     return (
                        <li key={page.path}>
                          <button
                            onClick={() => setLocation(page.path)}
                            className={`text-sm font-medium transition-colors ${
                              isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                            }`}
                          >
                            {page.title}
                          </button>
                        </li>
                     );
                  })}
                </ul>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
               <button
                  onClick={() => setLocation('/implementation')}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:focus-visible:outline-2 hover:bg-slate-800 transition-all"
                >
                  View Proposal Details
                </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Nav (Simple horizontal scroll) */}
        <div className="md:hidden overflow-x-auto hide-scrollbar bg-white px-6 py-4">
          <ul className="flex flex-nowrap items-center gap-6 min-w-max">
            {pages.map((page) => {
                const isActive = location === page.path;
                return (
                  <li key={page.path}>
                    <button
                      onClick={() => setLocation(page.path)}
                      className={`text-sm font-medium whitespace-nowrap transition-colors ${
                        isActive ? 'text-slate-900' : 'text-slate-500'
                      }`}
                    >
                      {page.title}
                    </button>
                  </li>
                );
            })}
          </ul>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pt-0">
        <div className="flex-1">
          {children}
        </div>
        
        <footer className="bg-slate-900 mt-24">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            {nextPage ? (
              <button
                onClick={() => setLocation(nextPage.path)}
                className="group relative w-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-12 text-left ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl overflow-hidden block"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl saturate-150 transition-transform duration-1000 group-hover:scale-150"></div>
                
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                  <div>
                    <h2 className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-4">Up Next</h2>
                    <p className="font-serif text-3xl sm:text-5xl text-white font-medium">{nextPage.title}</p>
                  </div>
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-105 shadow-xl">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </button>
            ) : (
              <div className="relative w-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-16 ring-1 ring-white/10 text-center overflow-hidden">
                <div className="absolute top-0 left-1/2 -ml-[250px] w-[500px] h-[500px] bg-slate-400/10 rounded-full blur-3xl saturate-150 transform -translate-y-1/2 animate-pulse"></div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium mb-6">Ready to Transform Your Clinic?</h2>
                  <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                    This strategy is designed specifically for Advanced Health &amp; Skin Clinic to build permanent authority and scale premium procedures. Let's make it a reality.
                  </p>
                  <button 
                    onClick={() => {
                        const btn = document.getElementById('approve-btn');
                        if (btn) {
                          btn.innerHTML = 'Proposal Accepted ✓';
                          btn.classList.add('bg-green-500', 'text-white', 'hover:bg-green-600');
                          btn.classList.remove('bg-white', 'text-slate-900', 'hover:bg-slate-100');
                        }
                    }}
                    id="approve-btn"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-semibold text-slate-900 hover:bg-slate-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Approve &amp; Initiate Strategy
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-16 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Prepared for Advanced Health &amp; Skin Clinic
              </div>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {pages.map((page) => (
                  <button key={page.path} onClick={() => setLocation(page.path)} className="hover:text-slate-300 transition-colors">
                    {page.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Pages
const OverviewPage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <Hero />
    <CurrentPosition />
  </div>
);

const OpportunityPage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <Opportunity />
    <MissingFoundation />
    <GrowthGaps />
  </div>
);

const StrategyPage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <Framework />
    <Foundation />
    <GrowthEngine />
  </div>
);

const ImplementationPage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <Funnel />
    <Investment />
    <ROICalculator />
    <Conclusion />
  </div>
);

export default function App() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="flex h-[50vh] items-center justify-center text-slate-500">Loading...</div>}>
        <Switch>
          <Route path="/" component={OverviewPage} />
          <Route path="/opportunity" component={OpportunityPage} />
          <Route path="/strategy" component={StrategyPage} />
          <Route path="/implementation" component={ImplementationPage} />
        </Switch>
      </Suspense>
    </PageLayout>
  );
}
