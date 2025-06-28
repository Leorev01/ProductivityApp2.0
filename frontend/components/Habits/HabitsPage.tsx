import { PlusIcon } from "@heroicons/react/16/solid";
import Habits from "./Habit";
import { getAllHabits } from "@/utils/habitFunctions";
import {Habit} from '@/types/types'
import Link from "next/link";

const HabitsPage = () => {
  const habits = getAllHabits();
  
  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4 p-6 justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Habits</h1>
            <Link
                href="/dashboard/habits/add"
                className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
                <PlusIcon aria-hidden="true" className="size-5" />
            </Link>
        </div>
        {habits.map((habit: Habit) => (
            <Habits 
              key={habit.id} 
              id={habit.id}
              title={habit.title} 
              description={habit.description} 
            />
        ))}
    </div>
  )
}

export default HabitsPage