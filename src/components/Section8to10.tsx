import { useState } from 'react';
import { FadeIn, Section, StaggerContainer, StaggerItem, SlideIn, ScaleIn } from './Layout';
import { ArrowDown, CheckCircle2, Blocks, Rocket, Search, Instagram, Facebook, MonitorSmartphone, MessageCircle, CalendarCheck, Sparkles, Star, Users } from 'lucide-react';
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
                <span>Bi-weekly Social Media execution (Reels, Carousels)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                <span>Local & Content SEO Management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                <span>Meta Ads Management (Lead Gen & Retargeting)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                <span>Monthly performance reporting & consulting</span>
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

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {['Build Permanent Authority', 'Increase Local Visibility', 'Generate Qualified Leads', 'Scale Premium Procedures'].map((item, index) => (
          <StaggerItem key={item}>
             <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center h-full flex items-center justify-center font-medium text-slate-900 hover:bg-slate-900 hover:text-white transition-colors cursor-default">
               {item}
             </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScaleIn delay={0.4} className="mx-auto max-w-5xl text-center rounded-3xl bg-slate-900 shadow-2xl p-12 sm:p-20 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-900/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000 ease-out"></div>
        <div className="relative z-10">
          <blockquote className="font-serif text-2xl leading-relaxed text-white sm:text-3xl max-w-3xl mx-auto">
            "Our objective is not simply to run marketing campaigns for Advanced Health &amp; Skin Clinic. Our objective is to build an unassailable dermatology brand that attracts elite patients, dominates the local market, and creates a sustainable foundation for lasting business growth."
          </blockquote>
        </div>
      </ScaleIn>
    </Section>
  );
}
