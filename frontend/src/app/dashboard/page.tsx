'use client';

import React, { useState } from 'react';

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project Created:", { projectName, projectDesc });
    //// Temporally until implementing service `POST`
    // Clear form and hide it
    setProjectName("");
    setProjectDesc("");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Top Menu */}
      <nav className="bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create New Project
        </button>
      </nav>

      {/* Project Form */}
      {showForm && (
        <div className="bg-white shadow-md rounded mx-6 mt-6 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="mt-1 w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                className="mt-1 w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Save Project
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}