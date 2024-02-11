import Image from "next/image";
import { useState } from "react";

export function Form() {
  const [userData, setUserData] = useState({
    name: "",
    fitnessLevel: "",
    healthConsiderations: "",
    fitnessGoals: "",
    targetAreas: "",
    daysPerWeek: "",
    durationPerWorkout: "",
    exerciseType: "",
    timeConstraints: "",
    equipment: "",
    dislikes: "",
    currentRoutine: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white " id="form">
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/form.webp"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tell Us About Yourself
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to FitBud! To create a personalized workout plan just for
            you, we need some information. Please fill out the form below with
            your details, and get ready to embark on a fitness journey tailored
            to your goals
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-xl px-6 lg:px-8 py-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="block text-sm font-medium leading-6 text-gray-900" for="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.name}
            onChange={handleInputChange}
          />

          <label for="fitnessLevel" className="block text-sm font-medium leading-6 text-gray-900">Current Fitness Level:</label>
          <select
            id="fitnessLevel"
            name="fitnessLevel"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.fitnessLevel}
            onChange={handleInputChange}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <label for="healthConsiderations" className="block text-sm font-medium leading-6 text-gray-900">Health Considerations:</label>
          <input
            type="text"
            id="healthConsiderations"
            name="healthConsiderations"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.healthConsiderations}
            onChange={handleInputChange}
          />

          <label for="fitnessGoals" className="block text-sm font-medium leading-6 text-gray-900">Fitness Goals:</label>
          <input
            type="text"
            id="fitnessGoals"
            name="fitnessGoals"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.fitnessGoals}
            onChange={handleInputChange}
          />

          <label for="targetAreas" className="block text-sm font-medium leading-6 text-gray-900">Target Areas:</label>
          <input
            type="text"
            id="targetAreas"
            name="targetAreas"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.targetAreas}
            onChange={handleInputChange}
          />

          <label for="daysPerWeek" className="block text-sm font-medium leading-6 text-gray-900">Days per Week:</label>
          <input
            type="number"
            id="daysPerWeek"
            name="daysPerWeek"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.daysPerWeek}
            onChange={handleInputChange}
          />

          <label for="durationPerWorkout" className="block text-sm font-medium leading-6 text-gray-900">
            Duration per Workout (minutes):
          </label>
          <input
            type="number"
            id="durationPerWorkout"
            name="durationPerWorkout"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.durationPerWorkout}
            onChange={handleInputChange}
          />

          <label for="exerciseType" className="block text-sm font-medium leading-6 text-gray-900">Preferred Exercise Type:</label>
          <input
            type="text"
            id="exerciseType"
            name="exerciseType"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.exerciseType}
            onChange={handleInputChange}
          />

          <label for="timeConstraints" className="block text-sm font-medium leading-6 text-gray-900">Time Constraints:</label>
          <input
            type="text"
            id="timeConstraints"
            name="timeConstraints"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.timeConstraints}
            onChange={handleInputChange}
          />

          <label for="equipment" className="block text-sm font-medium leading-6 text-gray-900">Available Equipment:</label>
          <input
            type="text"
            id="equipment"
            name="equipment"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.equipment}
            onChange={handleInputChange}
          />

          <label for="dislikes" className="block text-sm font-medium leading-6 text-gray-900">Disliked Exercises:</label>
          <input
            type="text"
            id="dislikes"
            name="dislikes"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 px-1.5"
            value={userData.dislikes}
            onChange={handleInputChange}
          />

          <label for="currentRoutine" className="block text-sm font-medium leading-6 text-gray-900">Current Exercise Routine:</label>
          <textarea
            id="currentRoutine"
            name="currentRoutine"
            rows="4"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4 resize-none px-1.5"
            value={userData.currentRoutine}
            onChange={handleInputChange}
          ></textarea>

          <button
            type="submit"
            className="block w-full rounded-md border-0 py-1.5 text-white font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-cyan-500 sm:text-sm sm:leading-6"
          >
            Generate Workout Plan
          </button>
        </form>
      </div>
      
    </div>
  );
}
