'use client'

import { useState } from 'react'
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react'
import {
  CalendarIcon,
  PaperClipIcon,
  TagIcon
} from '@heroicons/react/20/solid'

const labels = [
  { name: 'Unlabelled', value: null },
  { name: 'Morning Routine', value: 'morning_routine' },
  { name: 'Exercise', value: 'exercise' },
  { name: 'Reading', value: 'reading' },
  { name: 'Meditation', value: 'meditation' },
  { name: 'Healthy Eating', value: 'healthy_eating' },
  { name: 'Hydration', value: 'hydration' },
  { name: 'Sleep Hygiene', value: 'sleep_hygiene' },
  { name: 'Gratitude Journaling', value: 'gratitude_journaling' },
  { name: 'Learning a New Skill', value: 'learning_new_skill' },
  { name: 'Time Management', value: 'time_management' },
  { name: 'Digital Detox', value: 'digital_detox' },
  { name: 'Social Interaction', value: 'social_interaction' },
  { name: 'Financial Tracking', value: 'financial_tracking' },
  { name: 'Creative Writing', value: 'creative_writing' },
  { name: 'Outdoor Activities', value: 'outdoor_activities' }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AddHabit() {
  const [labelled, setLabelled] = useState(labels[0])
  const [dueDate, setDueDate] = useState('')
  const today = new Date().toISOString().split('T')[0]

  return (
    <form action="#" className="relative">
      <div className="rounded-lg bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          className="block w-full px-3 pt-2.5 text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          placeholder="Write a description..."
          className="block w-full resize-none px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          defaultValue={''}
        />
        {/* Spacer */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="absolute inset-x-px bottom-0">
        <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">

          {/* Label Picker */}
          <Listbox as="div" value={labelled} onChange={setLabelled} className="shrink-0">
            <Label className="sr-only">Add a label</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                <TagIcon
                  aria-hidden="true"
                  className={classNames(
                    labelled.value === null ? 'text-gray-300' : 'text-gray-500',
                    'size-5 shrink-0 sm:-ml-1'
                  )}
                />
                <span
                  className={classNames(
                    labelled.value === null ? '' : 'text-gray-900',
                    'hidden truncate sm:ml-2 sm:block'
                  )}
                >
                  {labelled.value === null ? 'Label' : labelled.name}
                </span>
              </ListboxButton>

              <ListboxOptions className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow outline outline-1 outline-black/5 sm:text-sm">
                {labels.map((label) => (
                  <ListboxOption
                    key={label.value}
                    value={label}
                    className="cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="block truncate font-medium">{label.name}</span>
                    </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>

          {/* Styled Date Picker */}
          <div className="flex flex-col items-start">
            <div className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100">
                <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <input
                type="date"
                id="startDate"
                name="startDate"
                aria-label="Start date"
                title="Start date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                min={today}
                className="bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 focus:ring-0"
                />
            </div>
            <p className="text-xs text-gray-500 mt-1 ml-1">This is the start date of your habit.</p>
          </div>


        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
            >
              <PaperClipIcon aria-hidden="true" className="-ml-1 mr-2 size-5 group-hover:text-gray-500" />
              <span className="text-sm italic text-gray-500 group-hover:text-gray-600">Attach a file</span>
            </button>
          </div>
          <div className="shrink-0">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
