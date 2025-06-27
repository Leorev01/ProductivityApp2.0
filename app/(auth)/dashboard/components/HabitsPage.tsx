import { PlusIcon } from "@heroicons/react/16/solid";
import Habits from "./Habit";

const habits = [
    {
        id: 1,
        title: "Drink Water",
        description: "Drink at least 2 liters of water daily.",
    },
    {
        id: 2,
        title: "Exercise",
        description: "30 minutes of exercise every day.",
    },
    {
        id: 3,
        title: "Read",
        description: "Read at least 20 pages of a book daily.",
    },
    {
        id: 4,
        title: "Meditate",
        description: "Meditate for 10 minutes every morning.",
    },
]
const HabitsPage = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4 p-6 justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Habits</h1>
            <button
                type="button"
                className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
                <PlusIcon aria-hidden="true" className="size-5" />
            </button>
        </div>
        {habits.map((habit) => (
            <Habits key={habit.id} title={habit.title} description={habit.description} />
        ))}
    </div>
  )
}

export default HabitsPage