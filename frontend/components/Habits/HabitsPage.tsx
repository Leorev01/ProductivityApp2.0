'use client';

import { PlusIcon } from "@heroicons/react/16/solid";
import Habits from "./Habit";
import {Habit} from '@/types/types'
import Link from "next/link";
import { useEffect, useState } from "react";

const HabitsPage = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    console.log(user);
    const fetchHabits = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:4000/api/habits?id=${user?.id}`, {
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch habits');
        }
        
        const data = await response.json();
        setHabits(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  if (loading) {
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
        <div className="p-6 text-center text-gray-500">Loading habits...</div>
      </div>
    );
  }

  if (error) {
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
        <div className="p-6 text-center text-red-500">Error: {error}</div>
      </div>
    );
  }
  
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
        {habits.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No habits found. Add your first habit!</div>
        ) : (
          habits.map((habit: Habit) => (
              <Habits 
                key={habit.id} 
                id={habit.id}
                title={habit.title} 
                description={habit.description} 
              />
          ))
        )}
    </div>
  )
}

export default HabitsPage