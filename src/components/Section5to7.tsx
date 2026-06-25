import { useState } from 'react';
import { FadeIn, Section, StaggerContainer, StaggerItem } from './Layout';
import { Palette, Globe, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
  { name: 'Brand Authority', desc: 'Establishing doctor expertise & premium clinic positioning.', detail: 'Patients will choose you because they trust your clinical authority, not just because you are local. We architect your brand identity to immediately signal trust, safety, and elite aesthetic outcomes.' },
  { name: 'Digital Presence', desc: 'Building a conversion-optimized website & healthcare content.', detail: 'Your website is your digital clinic. We build a high-performance, mobile-first asset that educates patients, highlights your before/after portfolio, and provides a frictionless booking experience.' },
  { name: 'Trust Building', desc: 'Showcasing real results, patient testimonials & educational reels.', detail: 'Social proof is the currency of aesthetics. We help you systematically capture and deploy high-quality case studies, video testimonials, and educational content that answers common patient anxieties.' },
  { name: 'Patient Engagement', desc: 'Active social media management and community interaction.', detail: 'Consistent visibility ensures you capture mind-share. We manage your content distribution to keep you top-of-mind for both existing patients considering new procedures, and new prospects.' },
  { name: 'Lead Generation', desc: 'Targeted Meta ads capturing high-intent patients.', detail: 'We launch precision-targeted advertising campaigns on Instagram and Facebook that attract patients actively interested in high-margin aesthetic and dermatological treatments.' },
  { name: 'Consultations', desc: 'Seamless WhatsApp and form integrations driving bookings.', detail: 'We remove friction from the booking process by integrating direct WhatsApp workflows and optimized lead capture forms, turning passive scrollers into confirmed appointments.' },
  { name: 'Procedure Conversions', desc: 'Educated patients ready for premium high-margin treatments.', detail: 'Because the preceding steps pre-educate and pre-qualify the patient, they arrive at your clinic not to "shop around", but ready to proceed with your recommended treatment plan.' },
  { name: 'Business Growth', desc: 'Predictable patient flow and increased clinic revenue.', detail: 'The ultimate outcome is a predictable, scalable system where your marketing investment consistently translates into measurable clinical revenue and long-term patient retention.' },
];

export function Framework() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <Section className="bg-white">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-slate-800 bg-slate-100 ring-1 ring-inset ring-slate-200 mb-6">
            The 8-Step Blueprint
          </div>
          <h2 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">Our Growth Framework</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We move away from "random acts of marketing." Instead, we implement a systematic, chronological approach to scaling your aesthetic practice. This framework ensures every marketing dollar works harmoniously to push patients down a predictable booking pipeline.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="relative">
             <div className="absolute left-6 top-10 bottom-10 w-px bg-slate-200 z-0 hidden lg:block"></div>
             <StaggerContainer className="space-y-4 relative z-10">
               {steps.map((step, index) => (
                 <StaggerItem key={step.name}>
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left group flex items-center gap-x-6 rounded-2xl p-4 transition-all duration-300
                      ${activeStep === index 
                        ? 'bg-slate-900 text-white shadow-md scale-[1.02]' 
                        : 'bg-white text-slate-900 hover:bg-slate-50 ring-1 ring-slate-900/5'
                      }`}
                    >
                      <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-full transition-colors duration-300
                        ${activeStep === index
                          ? 'bg-white text-slate-900 ring-1 ring-slate-900'
                          : 'bg-slate-100 text-slate-500 ring-1 ring-slate-900/10 group-hover:bg-white'
                        }
                      `}>
                         <span className="text-lg font-mono font-bold">
                            {(index + 1).toString().padStart(2, '0')}
                         </span>
                      </div>
                      <div className="flex-auto">
                        <h3 className="font-serif text-lg font-semibold tracking-tight">{step.name}</h3>
                        <p className={`mt-1 text-sm ${activeStep === index ? 'text-slate-300' : 'text-slate-500'} line-clamp-1`}>{step.desc}</p>
                      </div>
                    </button>
                 </StaggerItem>
               ))}
             </StaggerContainer>
          </div>

          <div className="lg:sticky lg:top-24 h-max">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeStep}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
                 className="rounded-3xl bg-slate-50 p-8 sm:p-10 ring-1 ring-slate-900/10 h-full flex flex-col justify-center"
               >
                 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-slate-900 ring-1 ring-slate-900/10">
                    <span className="text-xl font-mono font-bold">
                       {(activeStep + 1).toString().padStart(2, '0')}
                    </span>
                 </div>
                 <h3 className="font-serif text-2xl font-bold tracking-tight text-slate-900 mb-4">{steps[activeStep].name}</h3>
                 <p className="text-lg font-medium text-slate-700 mb-6 border-b border-slate-200 pb-6">{steps[activeStep].desc}</p>
                 <p className="text-slate-600 leading-relaxed text-base">
                   {steps[activeStep].detail}
                 </p>
               </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </div>
    </Section>
  );
}

const foundationFeatures = [
  {
    title: 'Brand Strategy',
    icon: Palette,
    details: ['Visual Identity', 'Tone of Voice', 'Target Persona', 'Personal Branding']
  },
  {
    title: 'Website Development',
    icon: Globe,
    details: [
      'SEO Structure Included',
      'SEO Content Writing Included',
      'WhatsApp Integration',
      'Lead Capture Forms',
      'Mobile Responsive Design',
      'Hosting Included For 1 Year'
    ],
    highlight: true,
  },
  {
    title: 'GBP Optimization',
    icon: MapPin,
    details: ['Profile Claiming', 'Service Menu Optimization', 'Review Strategy', 'Local Ranking']
  },
  {
    title: 'SEO Setup',
    icon: Search,
    details: ['Technical Audit', 'Keyword Planning', 'Schema Markup', 'Analytics Integration']
  }
]

export function Foundation() {
  return (
    <Section className="bg-slate-900 text-white">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Phase 1: Foundation Building</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            A beautiful Instagram page is useless if your website fails to convert visitors into consultations. Before we scale traffic, we must engineer the mandatory digital infrastructure required to capture it. This is your digital clinic—it must look as premium as your physical one.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
        {foundationFeatures.map((feature, index) => (
          <FadeIn key={feature.title} delay={index * 0.1} className={`flex flex-col rounded-3xl p-8 ring-1 transition-all ${feature.highlight ? 'bg-slate-800 ring-white/20 scale-105 shadow-2xl relative z-10' : 'bg-slate-800/50 ring-white/10 hover:bg-slate-800'}`}>
            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${feature.highlight ? 'bg-white text-slate-900' : 'bg-slate-700 text-white'}`}>
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-6">{feature.title}</h3>
            <ul className="space-y-4 flex-grow">
              {feature.details.map((detail) => (
                <li key={detail} className="flex gap-x-3 text-sm text-slate-300">
                  <span className={feature.highlight ? 'text-white' : 'text-slate-500'}>✓</span> {detail}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export function GrowthEngine() {
  return (
    <Section className="bg-slate-50">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">Phase 2: Growth Engine</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Once the digital foundation has been established, Phase 2 focuses on creating a predictable patient acquisition system through strategic content, search visibility, paid advertising and continuous optimisation. Rather than simply managing marketing activities, our role is to continuously align digital efforts with your business goals while improving patient acquisition, brand authority and procedure growth.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
        <FadeIn delay={0.1} className="rounded-3xl bg-white p-10 ring-1 ring-slate-900/5 hover:shadow-lg transition-all">
          <h3 className="font-serif text-2xl font-semibold mb-8 text-slate-900 pb-6 border-b border-slate-100">Brand Growth Strategy</h3>
          <ul className="space-y-4">
            {['12 Reels', '4 Static Posts', '4 Carousel Posts', 'Doctor Branding', 'Patient Education'].map(item => (
               <li key={item} className="flex items-center gap-3 text-slate-600">
                 <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                 {item}
               </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2} className="rounded-3xl bg-slate-900 text-white p-10 shadow-xl scale-105 relative z-10 transition-all">
          <h3 className="font-serif text-2xl font-semibold mb-8 pb-6 border-b border-slate-800">Patient Acquisition System</h3>
          <ul className="space-y-4">
            {['Lead Generation', 'Consultation Campaigns', 'Retargeting', 'Procedure Promotion'].map(item => (
               <li key={item} className="flex items-center gap-3 text-slate-300">
                 <div className="h-1.5 w-1.5 rounded-full bg-white" />
                 {item}
               </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.3} className="rounded-3xl bg-white p-10 ring-1 ring-slate-900/5 hover:shadow-lg transition-all">
          <h3 className="font-serif text-2xl font-semibold mb-8 text-slate-900 pb-6 border-b border-slate-100">Search Visibility</h3>
          <ul className="space-y-4">
            {['Local SEO', 'On Page SEO', 'Google Visibility', 'Blog Strategy'].map(item => (
               <li key={item} className="flex items-center gap-3 text-slate-600">
                 <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                 {item}
               </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl bg-slate-900 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl saturate-150"></div>
          <div className="relative z-10">
            <h3 className="font-serif text-3xl font-semibold mb-4">Strategic Growth Partnership</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
               Beyond execution, we function as a Fractional Marketing Partner by providing ongoing strategic guidance. Think of this as executive-level marketing leadership without the cost of hiring an in-house marketing head.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-sm font-medium text-slate-200">
               {[
                 'Monthly marketing planning',
                 'Campaign strategy',
                 'Business performance reviews',
                 'Consultation trend analysis',
                 'Seasonal campaign recommendations',
                 'Procedure promotion planning',
                 'Content strategy refinement',
                 'Advertising optimisation',
                 'Growth recommendations'
               ].map(item => (
                 <div key={item} className="flex items-center gap-2">
                    <span className="text-white">✓</span>
                    {item}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
