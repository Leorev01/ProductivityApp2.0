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
    <div>
        {habits.map((habit) => (
            <Habits key={habit.id} title={habit.title} description={habit.description} />
        ))}
    </div>
  )
}

export default HabitsPage