import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

export default function Habit({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 transition cursor-pointer"
          >
            <PencilIcon className="h-4 w-4" /> Edit
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200 transition cursor-pointer"
          >
            <TrashIcon className="h-4 w-4" /> Delete
          </button>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
