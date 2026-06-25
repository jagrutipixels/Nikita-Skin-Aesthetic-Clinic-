import { ArrowRight, Activity, CalendarDays, Star, Users } from 'lucide-react';
import { FadeIn, Section, SlideIn, ScaleIn, StaggerContainer, StaggerItem } from './Layout';
import { useLocation } from 'wouter';

export function Hero() {
  const [, setLocation] = useLocation();

  return (
    <Section className="relative overflow-hidden bg-slate-900 pt-32 pb-40 text-center lg:pt-48 lg:pb-56">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"></div>
      </div>
      
      <StaggerContainer>
        <StaggerItem>
          <h1 className="font-serif text-5xl tracking-tight text-white sm:text-7xl">
            Advanced Health &amp; Skin Clinic
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-8 font-sans text-xl font-medium tracking-tight text-slate-300 sm:text-3xl">
            You've Built a Trusted Practice. Now Let's Build a Recognized Healthcare Brand.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Your expertise has already earned the trust of your patients. Our objective is to build a digital ecosystem that amplifies that trust, expands your authority, and reaches thousands of potential patients who haven't discovered your clinic yet.
          </p>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button onClick={() => setLocation('/opportunity')} className="group rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all flex items-center gap-2">
              View Growth Roadmap
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </Section>
  );
}

const stats = [
  { name: 'Patients Per Month', value: '400+', icon: Users },
  { name: 'Established', value: '2019', icon: CalendarDays },
  { name: 'Clinical Experience', value: '8+ Years', icon: Activity },
  { name: 'Primary Lead Sources', value: 'Google & Referrals', icon: Star },
];

export function CurrentPosition() {
  return (
    <Section className="bg-white">
      <SlideIn direction="up">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">Current Business Position</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Before mapping out your growth strategy, we analyze the foundation you have already built. Your clinic possesses a strong baseline of clinical excellence. Our goal is to ensure your digital footprint reflects the premium nature of your services and amplifies your established reputation.
          </p>
        </div>
      </SlideIn>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <StaggerContainer className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.name}>
              <div className="flex flex-col gap-y-3 rounded-2xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md h-full relative overflow-hidden group">
                <div className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-slate-300 to-slate-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <dt className="flex items-center gap-x-3 text-sm font-semibold leading-7 text-slate-600">
                  <stat.icon className="h-5 w-5 flex-none text-slate-900" aria-hidden="true" />
                  {stat.name}
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-slate-900">{stat.value}</dd>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <ScaleIn delay={0.2} className="relative rounded-3xl bg-slate-900 p-10 text-white sm:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl saturate-150 animate-[pulse_6s_ease-in-out_infinite]"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-semibold">What's Working Well</h3>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Your clinical expertise speaks for itself. You have successfully established a core patient base relying heavily on traditional trust signals.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Strong consultation business',
                  'Positive word of mouth',
                  'Trusted female dermatologist',
                  'Existing patient volume',
                  'Established clinic reputation'
                ].map((item, i) => (
                  <li key={item} className="flex gap-x-3 text-slate-300">
                    <span className="text-white">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.3} className="relative rounded-3xl bg-slate-50 p-10 ring-1 ring-slate-900/10 sm:p-12 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-semibold text-slate-900">Growth Opportunity</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                While your clinical capability is exceptional, there is an opportunity to expand your market perception. By increasing your digital visibility, we can activate new, highly profitable revenue channels and scale your impact.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'More visibility',
                  'Better procedure awareness',
                  'More consultation enquiries',
                  'Higher conversion to premium treatments',
                  'Stronger personal branding'
                ].map((item) => (
                  <li key={item} className="flex gap-x-3 text-slate-600">
                    <span className="text-slate-900">↑</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScaleIn>
        </div>
      </div>
    </Section>
  );
}
