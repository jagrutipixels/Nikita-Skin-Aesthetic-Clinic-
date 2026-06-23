import { useState } from 'react';
import { ShieldCheck, TrendingUp, Search, UserCheck, LayoutDashboard, Target, Plus, Minus } from 'lucide-react';
import { FadeIn, Section, StaggerContainer, StaggerItem } from './Layout';
import { animate, motion, AnimatePresence } from 'motion/react';

export function Opportunity() {
  return (
    <Section className="bg-slate-900 text-white" id="growth-roadmap">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
        <FadeIn>
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl text-balance">
            You Already Have Trust.<br />
            <span className="text-slate-400">Now It's Time To Build Authority.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            Most clinics struggle to acquire patients. Advanced Health &amp; Skin Clinic <strong className="text-white font-medium">already attracts patients.</strong> However, the majority of this traffic is driven by word-of-mouth and standard consultations rather than high-intent, premium procedure searches.
          </p>
          <p>
            The next stage of growth requires a deliberate shift. It is about moving from simply being known locally to being recognized as the definitive regional expert. Trust is built inside the clinic; Authority is projected in the marketplace.
          </p>
          <p className="font-medium text-white mb-2 pt-4">Our strategy focuses on the following pillars:</p>
          <ul className="mt-4 space-y-4 font-medium text-slate-300 text-base">
            {[
              'Becoming the go-to expert',
              'Increasing premium procedures',
              'Improving online visibility',
              'Building a stronger personal brand',
              'Creating predictable lead generation'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-white transition-transform hover:scale-150" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}

const gaps = [
  {
    name: 'Limited Personal Branding',
    description: 'Potential patients connect with doctors, not just clinics. Without a strong personal brand, you miss out on trust-driven patient acquisition.',
    impact: 'Losing high-value patients who seek out recognized "expert" specialists.',
    icon: UserCheck,
  },
  {
    name: 'Underutilized Social Media',
    description: 'Inconsistent posting and lack of strategic video content (Reels) means losing mind-share to competitors who actively educate their audience.',
    impact: 'Decreased brand recall; competitors capture the attention of younger demographics.',
    icon: LayoutDashboard,
  },
  {
    name: 'No Structured Lead Generation System',
    description: 'Relying solely on word-of-mouth creates unpredictable revenue. You need an automated system to attract and capture new patient enquiries.',
    impact: 'Feast-or-famine booking cycles with no control over patient volume.',
    icon: Target,
  },
  {
    name: 'Limited Procedure Awareness',
    description: 'Patients are coming in for general consultations but are unaware of your high-margin premium aesthetic procedures.',
    impact: 'Lower lifetime value (LTV) per patient and missed cross-selling opportunities.',
    icon: ShieldCheck,
  },
  {
    name: 'SEO & Search Visibility Opportunity',
    description: 'When potential patients search for treatments in your area, your clinic is not capturing the top search engine results page (SERP) real estate.',
    impact: 'Patients actively looking to spend money are booking with your competitors.',
    icon: Search,
  },
  {
    name: 'No Patient Acquisition Funnel',
    description: 'Traffic mapping is undefined. There is no clear journey guiding a stranger clicking an ad to booking a premium consultation.',
    impact: 'Wasted marketing spend and high drop-off rates from profile visitors.',
    icon: TrendingUp,
  },
];

export function GrowthGaps() {
  const [activeGap, setActiveGap] = useState<number | null>(null);

  return (
    <Section className="bg-slate-50">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">Growth Gaps We Identified</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Through a rigorous digital audit, we have isolated the specific structural bottlenecks currently capping your patient volume. Addressing these critical areas will unlock predictable, scalable growth.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <StaggerContainer className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
          {gaps.map((gap, index) => (
            <StaggerItem key={gap.name}>
              <motion.div 
                className="flex flex-col h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 cursor-pointer relative overflow-hidden"
                onClick={() => setActiveGap(activeGap === index ? null : index)}
                whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300">
                    <gap.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <button className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
                     {activeGap === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </button>
                </div>
                
                <h3 className="text-xl font-semibold leading-7 text-slate-900 mb-3">{gap.name}</h3>
                <p className="text-slate-600 flex-grow mb-2 leading-relaxed">{gap.description}</p>
                
                <AnimatePresence>
                  {activeGap === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-2 border-t border-slate-100 pb-2">
                         <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Business Impact</p>
                         <p className="text-sm font-medium text-slate-800">{gap.impact}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
