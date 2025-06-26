export default function Habit({title, description}: {title: string; description: string}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">
        {title}
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:p-6">{description}</div>
    </div>
  )
}
