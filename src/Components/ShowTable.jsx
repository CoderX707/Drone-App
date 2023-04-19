import React from "react";

export default function ShowTable({ path }) {
  return (
    <div>
      <div className="relative overflow-x-auto mt-3 shadow-md sm:rounded-lg">
        <table className="w-1/2 mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Timestamp
              </th>
              <th scope="col" className="px-6 py-3">
                Latitude
              </th>
              <th scope="col" className="px-6 py-3">
                Longitude
              </th>
            </tr>
          </thead>
          <tbody>
            {path.map((point, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {point?.time ? JSON.stringify(point.time) : index}
                </th>
                <td className="px-6 py-4">{point.lat}</td>
                <td className="px-6 py-4">{point.lng}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
