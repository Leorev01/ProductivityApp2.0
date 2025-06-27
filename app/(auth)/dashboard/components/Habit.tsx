export default function Habit({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
    </div>
  );
}
