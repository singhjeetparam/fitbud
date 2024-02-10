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
    <div className="bg-white py-24 sm:py-32">
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
