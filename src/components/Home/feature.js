import { ChartBarIcon, ClockIcon, CodeBracketIcon, UserIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Tailored Fitness Programs',
    description:
      'Craft a bespoke fitness journey with meticulously curated workout programs, precisely aligned with your unique goals, preferences, and fitness proficiency.',
    icon: UserIcon,
  },
  {
    name: 'AI-Powered Optimization',
    description:
      'Elevate your workout experience through the integration of advanced artificial intelligence. Benefit from sophisticated recommendations and adaptive routines that evolve seamlessly with your evolving fitness levels.',
    icon: CodeBracketIcon,
  },
  
  {
    name: 'Cutting-Edge Workouts',
    description:
      'Stay at the forefront of fitness innovation with exclusive access to the latest and most impactful workout regimens. Keep your routine dynamic, challenging, and aligned with the forefront of industry advancements.',
    icon: ClockIcon,
  },
  {
    name: 'Intelligent Analytics',
    description:
      'Leverage intelligent analytics for comprehensive insights into your performance metrics. Receive valuable feedback and data-driven recommendations, empowering you to refine and optimize your fitness journey with precision.',
    icon: ChartBarIcon,
  },
]

export  function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32 relative isolate">
      <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why Choose FitBud?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Choose FitBud for a personalized fitness journey tailored to your goals, powered by cutting-edge AI integration. Effortlessly track your progress and embrace a holistic approach to wellness with FitBud, where every workout propels you toward your best self.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
