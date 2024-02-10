const timeline = [
  {
    name: "Provide Your Fitness Details",
    description:
      "Begin your fitness journey by inputting essential information such as body weight, height, and other relevant details through our user-friendly form.",
    index: "1",
  },
  {
    name: "Define Your Fitness Goals",
    description:
      "Choose your fitness aspirations and goals to tailor the workout program to your specific objectives and desired outcomes.",
    index: 2,
  },
  {
    name: "Advanced AI Analysis",
    description:
      "Your provided information undergoes a comprehensive analysis by our advanced artificial intelligence, considering your unique profile and selected goals.",
    index: 3,
  },
  {
    name: "Receive Your Customized Workout",
    description:
      "Get ready to embark on your personalized fitness journey as our AI delivers a tailored workout schedule crafted specifically for you.",
    index: 4,
  },
];

export function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center pb-20">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Effortless Fitness Transformation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Unlock peak performance effortlessly with FitBud's streamlined process. Elevate your fitness journey in just four simple steps.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.index}
                className="flex items-center text-sm font-semibold leading-6 text-cyan-500"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.index}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
