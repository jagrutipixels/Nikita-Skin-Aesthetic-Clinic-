import { useState } from 'react';
import { FadeIn, Section, StaggerContainer, StaggerItem, SlideIn, ScaleIn } from './Layout';
import { ArrowDown, CheckCircle2, Blocks, Rocket, Search, Instagram, Facebook, MonitorSmartphone, MessageCircle, CalendarCheck, Sparkles, Star, Users, Calculator, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const funnelSteps = [
  { name: 'Google Search', type: 'source', desc: 'Capturing high-intent patients actively looking for treatments.', icon: Search },
  { name: 'Instagram', type: 'source', desc: 'Building desire and trust through visual evidence and education.', icon: Instagram },
  { name: 'Facebook Ads', type: 'source', desc: 'Retargeting profile visitors and driving consultation bookings.', icon: Facebook },
  { name: 'Website', type: 'asset', desc: 'A conversion-optimized asset that acts as your digital clinic.', icon: MonitorSmartphone },
  { name: 'WhatsApp', type: 'action', desc: 'Frictionless communication turning browsers into leads.', icon: MessageCircle },
  { name: 'Consultation', type: 'conversion', desc: 'In-clinic assessment where your clinical expertise closes the patient.', icon: CalendarCheck },
  { name: 'Procedure', type: 'conversion', desc: 'Delivery of premium, high-margin aesthetic treatments.', icon: Sparkles },
  { name: 'Review', type: 'loyalty', desc: 'Automated follow-ups generating 5-star Google reviews.', icon: Star },
  { name: 'Referral', type: 'loyalty', desc: 'Happy patients bringing in their network, restarting the cycle.', icon: Users },
];

export function Funnel() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <SlideIn direction="right">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-slate-800 bg-slate-100 ring-1 ring-inset ring-slate-200 mb-6">
             The Patient Journey
          </div>
          <h2 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">How Patients Find You</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The modern patient journey is no longer linear. Patients don't simply see an ad and book immediately—they research. They discover you on Google, validate your expertise on Instagram, and are eventually triggered to book via retargeting ads.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            By understanding this psychological flow, we don't just run fragmented ads; we build an end-to-end acquisition engine. Click on each step in the funnel to see how it contributes to your growth.
          </p>
          
          <div className="mt-10 p-6 rounded-2xl bg-slate-50 ring-1 ring-slate-100 min-h-[160px] flex flex-col justify-center transition-all">
            <AnimatePresence mode="wait">
              {activeStep !== null ? (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-3 text-slate-900">
                     {(() => {
                        const Icon = funnelSteps[activeStep].icon;
                        return <Icon className="w-6 h-6" />;
                     })()}
                     <h3 className="font-semibold text-xl">{funnelSteps[activeStep].name}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                     {funnelSteps[activeStep].desc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="text-center text-slate-400"
                >
                   <p>Select a funnel stage to view details</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SlideIn>
        
        <StaggerContainer className="relative">
          <div className="flex flex-col items-center max-w-sm mx-auto">
            <div className="flex w-full justify-between gap-4 mb-4">
              {funnelSteps.slice(0, 3).map((step, index) => (
                <StaggerItem key={step.name} className="flex-1">
                  <button 
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-center py-3 rounded-lg text-sm font-medium ring-1 transition-all flex flex-col items-center justify-center gap-2 h-full
                      ${activeStep === index 
                        ? 'bg-slate-900 text-white ring-slate-900 scale-105 shadow-md' 
                        : 'bg-slate-50 text-slate-600 ring-slate-200 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                  >
                    <step.icon className="w-5 h-5 mb-1 opacity-70" />
                    <span>{step.name}</span>
                  </button>
                </StaggerItem>
              ))}
            </div>
            
            {funnelSteps.slice(3).map((step, mappedIndex) => {
              const actualIndex = mappedIndex + 3;
              return (
              <StaggerItem key={step.name} className="w-full flex flex-col items-center">
                <ArrowDown className="text-slate-300 h-6 w-6 my-2" />
                <button 
                  onClick={() => setActiveStep(actualIndex)}
                  className={`w-full text-center py-4 rounded-xl font-medium tracking-wide shadow-sm transition-all focus:outline-none flex items-center justify-center gap-2
                  ${mappedIndex === 0 ? 'w-full' : ''}
                  ${mappedIndex === 1 ? 'w-11/12' : ''}
                  ${mappedIndex === 2 ? 'w-10/12' : ''}
                  ${mappedIndex === 3 ? 'w-9/12 border border-slate-700' : ''}
                  ${mappedIndex >= 4 ? 'w-8/12 mt-2 ring-1 ring-slate-200' : ''}
                  ${activeStep === actualIndex
                    ? 'ring-2 ring-offset-2 ring-slate-900 scale-105 shadow-md z-10 relative bg-slate-900 text-white' 
                    : mappedIndex === 0 ? 'bg-slate-900 text-white hover:bg-slate-800' 
                    : mappedIndex === 1 ? 'bg-slate-800 text-slate-100 hover:bg-slate-700'
                    : mappedIndex === 2 ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                    : mappedIndex === 3 ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-white text-slate-900 hover:bg-slate-50 hover:ring-slate-300'
                  }
                `}>
                  <step.icon className="w-5 h-5 opacity-80" />
                  {step.name}
                </button>
              </StaggerItem>
            );
            })}
          </div>
        </StaggerContainer>
      </div>
    </Section>
  );
}

export function Investment() {
  return (
    <Section className="bg-slate-50">
      <SlideIn direction="up">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">Scope of Partnership</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We do not believe in fragmented, ad-hoc marketing services. Our engagement covers all essential pillars required to dominate your local market, structured in two clear phases.
          </p>
        </div>
      </SlideIn>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        <ScaleIn delay={0.1} className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-slate-900/10 sm:p-10 hover:shadow-lg transition-all h-full">
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-6">
              <Blocks className="h-8 w-8 text-slate-900" />
              <h3 className="font-serif text-2xl font-semibold text-slate-900">Phase 1: Foundation</h3>
            </div>
            <p className="mb-6 text-sm leading-6 text-slate-500 font-medium">Delivered prior to campaign launch:</p>
            <div className="space-y-4 text-sm leading-6 text-slate-600">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-400" />
                <span>Comprehensive Brand Strategy &amp; Identity</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-400" />
                <span>Premium Website Development (Mobile-First)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-400" />
                <span>Google Business Profile claiming & optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-400" />
                <span>Technical SEO & Analytics setup</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-sm font-medium text-slate-700 bg-slate-50 py-3 px-4 rounded-xl text-center group-hover:bg-slate-100 transition-colors">
              Establishes the conversion infrastructure.
            </p>
          </div>
        </ScaleIn>

        <ScaleIn delay={0.2} className="flex flex-col justify-between rounded-3xl bg-slate-900 p-8 ring-1 ring-slate-900/10 sm:p-10 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group h-full">
          <div>
             <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-6">
              <Rocket className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-serif text-2xl font-semibold">Phase 2: Growth Engine</h3>
            </div>
            <p className="mb-6 text-sm leading-6 text-slate-400 font-medium">Delivered ongoing month-over-month:</p>
            <div className="space-y-4 text-sm leading-6 text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                <span>Brand Growth Strategy (Reels, Carousels)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                <span>Search Visibility & Content SEO</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                <span>Patient Acquisition System (Meta Ads)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                <span>Strategic Growth Partnership & Reporting</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-sm font-medium text-slate-200 bg-slate-800 py-3 px-4 rounded-xl text-center border border-slate-700 group-hover:bg-slate-700 transition-colors">
              Drives predictable patient acquisition.
            </p>
          </div>
        </ScaleIn>
      </div>
    </Section>
  );
}

export function Conclusion() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <SlideIn direction="down">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-slate-800 bg-slate-100 ring-1 ring-inset ring-slate-200 mb-6">
            The Goal
          </div>
          <h2 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">The Next Era of Your Clinic</h2>
        </SlideIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {[
          { title: 'Build a Recognised Healthcare Brand', desc: 'Transition from a local practice to a regional authority.' },
          { title: 'Strengthen Patient Trust at Scale', desc: 'Educate and pre-qualify patients before they enter the clinic.' },
          { title: 'Increase Local Visibility', desc: 'Dominate search results when patients seek premium treatments.' },
          { title: 'Generate Qualified Patient Enquiries', desc: 'Replace unpredictable word-of-mouth with a reliable acquisition engine.' },
          { title: 'Increase Revenue Through Premium Procedures', desc: 'Shift your patient mix toward high-margin aesthetic treatments.' },
          { title: 'Build Long-Term Digital Assets', desc: 'Develop proprietary marketing assets that compound in value over time.' }
        ].map((item, index) => (
          <StaggerItem key={item.title}>
             <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 h-full flex flex-col justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-colors cursor-default group">
               <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
               <p className="text-slate-500 text-sm group-hover:text-slate-300">{item.desc}</p>
             </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScaleIn delay={0.4} className="mx-auto max-w-5xl text-center rounded-3xl bg-slate-900 shadow-2xl p-12 sm:p-20 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-900/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000 ease-out"></div>
        <div className="relative z-10">
          <blockquote className="font-serif text-2xl leading-relaxed text-white sm:text-3xl max-w-4xl mx-auto">
            "Our objective is to build a digital ecosystem that supports the next phase of Advanced Health &amp; Skin Clinic's growth—whether that is expanding the practice, launching advanced laser technologies, or driving a higher volume of premium aesthetic procedures."
          </blockquote>
        </div>
      </ScaleIn>
    </Section>
  );
}

export function ROICalculator() {
  const [adSpend, setAdSpend] = useState<number>(40000);
  const [avgTreatmentValue, setAvgTreatmentValue] = useState<number>(15000);
  
  // Basic simulation maths for the chart
  const leads = Math.floor(adSpend / 600); // ₹600 per lead
  const consultations = Math.floor(leads * 0.3); // 30% lead to consultation
  const procedures = Math.floor(consultations * 0.3); // 30% consultation to procedure
  const revenue = procedures * avgTreatmentValue;
  const roi = Math.max(0, Math.floor(((revenue - adSpend) / adSpend) * 100));

  const data = [
    { name: 'Month 1', revenue: revenue * 0.4 },
    { name: 'Month 2', revenue: revenue * 0.6 },
    { name: 'Month 3', revenue: revenue * 0.8 },
    { name: 'Month 4', revenue: revenue * 0.9 },
    { name: 'Month 5', revenue: revenue * 0.95 },
    { name: 'Month 6', revenue: revenue },
  ];

  return (
    <Section className="bg-slate-900 text-white">
      <SlideIn direction="up">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 bg-white/10 ring-1 ring-inset ring-white/20 mb-6">
            <Calculator className="w-4 h-4" />
            Growth Projection
          </div>
          <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl">Interactive ROI Calculator</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Adjust the sliders below to see the compounding effect of our acquisition system on your clinic's revenue over a 6-month period.
          </p>
        </div>
      </SlideIn>

      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Controls */}
        <ScaleIn delay={0.1} className="lg:col-span-5 bg-white/5 rounded-3xl p-8 ring-1 ring-white/10">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">Monthly Ad Spend</label>
                <span className="text-white font-mono">₹{adSpend.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                min="40000" 
                max="500000" 
                step="10000" 
                value={adSpend} 
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">Avg. Treatment Value</label>
                <span className="text-white font-mono">₹{avgTreatmentValue.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="100000" 
                step="1000" 
                value={avgTreatmentValue} 
                onChange={(e) => setAvgTreatmentValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
               <div className="bg-white/5 rounded-2xl p-4 text-center ring-1 ring-white/10">
                 <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Estimated ROI</p>
                 <p className="text-2xl font-bold text-white">{roi}%</p>
               </div>
               <div className="bg-white/5 rounded-2xl p-4 text-center ring-1 ring-white/10">
                 <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Est. Revenue</p>
                 <p className="text-2xl font-bold text-white">₹{revenue.toLocaleString('en-IN')}</p>
               </div>
            </div>
            
            <p className="text-xs text-slate-500 text-center mt-4">
              *Projections based on conservative industry benchmarks: ₹600 Cost Per Lead, 30% Contact Rate, 30% Close Rate. Actual results may vary.
            </p>
          </div>
        </ScaleIn>

        {/* Chart */}
        <ScaleIn delay={0.2} className="lg:col-span-7 h-[400px] w-full relative">
          <div className="bg-white/5 rounded-3xl p-8 ring-1 ring-white/10 h-full flex flex-col justify-end">
            <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 relative pt-10">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-slate-500 font-mono hidden sm:flex pb-6 -ml-2">
                <span>₹{(revenue / 1000).toLocaleString('en-IN', {maximumFractionDigits: 0})}k</span>
                <span>₹{(revenue * 0.5 / 1000).toLocaleString('en-IN', {maximumFractionDigits: 0})}k</span>
                <span>₹0k</span>
              </div>
              
              {/* Grid lines */}
              <div className="absolute inset-0 border-b border-dashed border-slate-700/50 hidden sm:block top-0 mt-[1.25rem]"></div>
              <div className="absolute inset-0 border-b border-dashed border-slate-700/50 hidden sm:block top-1/2"></div>
              
              {/* Bars */}
              {data.map((item, i) => (
                <div key={item.name} className="flex-1 flex flex-col items-center justify-end h-full z-10 group">
                  <div className="w-full max-w-[48px] bg-white/20 rounded-t-sm hover:bg-white/40 transition-all relative overflow-hidden group-hover:ring-2 ring-white/50" 
                    style={{ height: `${(item.revenue / revenue) * 100}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/40 opacity-50"></div>
                  </div>
                  <span className="text-xs text-slate-400 mt-4 whitespace-nowrap">{item.name.replace('Month ', 'M')}</span>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded-md whitespace-nowrap pointer-events-none transform -translate-y-4 z-20">
                     ₹{item.revenue.toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScaleIn>
      </div>
    </Section>
  );
}
