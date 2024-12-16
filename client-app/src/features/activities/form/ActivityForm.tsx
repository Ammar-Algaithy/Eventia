import React, { ChangeEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores/store";

export default observer(function ActivityForm() {
  const {activityStore} = useStore();
  const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  };


  const [activity, setActivity] = useState(initialState);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (activity.id){
      updateActivity(activity);
    } else {
      createActivity(activity);
    }
    
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <form
      className="space-y-8 mb-4 max-w-xl mx-auto bg-white p-8 border border-gray-270 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="border-b border-gray-300 pb-8">
        <h2 className="text-lg font-semibold text-gray-900">Create a New Activity</h2>
        <p className="mt-2 text-sm text-gray-600">Fill in the details to add a new activity.</p>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Title */}
          <div className="sm:col-span-4">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={activity.title}
              onChange={handleInputChange}
              className="block h-12 w-full border border-dashed rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Date */}
          <div className="sm:col-span-2">
            <input
              type="date"
              name="date"
              id="date"
              value={activity.date}
              onChange={handleInputChange}
              className="block h-12 w-full border border-dashed rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Description */}
          <div className="col-span-full">
            <textarea
              name="description"
              id="description"
              rows={4}
              value={activity.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="block w-full border border-dashed rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          {/* Category */}
          <div className="sm:col-span-3">
            <input
              type="text"
              name="category"
              id="category"
              value={activity.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="block h-12 w-full border border-dashed rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* City */}
          <div className="sm:col-span-3">
            <input
              type="text"
              name="city"
              id="city"
              value={activity.city}
              onChange={handleInputChange}
              placeholder="City"
              className="block h-12 w-full border border-dashed rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Venue */}
          <div className="col-span-full">
            <input
              type="text"
              name="venue"
              id="venue"
              value={activity.venue}
              onChange={handleInputChange}
              placeholder="Venue"
              className="block h-12 w-full border border-dashed rounded-md border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={closeForm}
          className="rounded-md bg-gray-300 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
})