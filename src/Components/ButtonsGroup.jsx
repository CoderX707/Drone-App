import React from "react";

export default function ButtonsGroup({
  isSimulating,
  startSimulation,
  pauseSimulation,
  resumeSimulation,
}) {
  return (
    <div className="w-64 m-auto my-3 rounded-md shadow-sm" role="group">
      {/* Action Buttons */}
      <button
        type="button"
        onClick={startSimulation}
        disabled={isSimulating}
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        Simulate
      </button>
      <button
        type="button"
        onClick={pauseSimulation}
        disabled={!isSimulating}
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        Pause
      </button>
      <button
        type="button"
        onClick={resumeSimulation}
        disabled={isSimulating}
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        Resume
      </button>
    </div>
  );
}
