import React from "react";
import ButtonsGroup from "./ButtonsGroup";

export default function InputForm({
  startSimulation,
  pauseSimulation,
  resumeSimulation,
  isSimulating,
  handleFileUpload,
  setInputs,
  inputs,
  handleAddInput,
}) {
  return (
    <>
      <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-5 text-3xl text-center font-bold text-gray-900 dark:text-white">
          Welcome To Drone App
        </h5>

        <div className="">
          <div className="w-1/2 m-auto mb-3 items-start justify-start">
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  id="latitude"
                  onChange={(event) =>
                    setInputs({ ...inputs, lat: event.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="latitude"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  latitude
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  id="longitude"
                  onChange={(event) =>
                    setInputs({ ...inputs, lng: event.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="longitude"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  longitude
                </label>
              </div>
              <button
                type="button"
                onClick={handleAddInput}
                className="text-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                ADD
              </button>
            </div>
          </div>
          <h2 className="my-5 text-center">-------------OR-------------</h2>
          {/* Input File */}
          <div className="w-1/2 m-auto mb-5  text-center">
            <input
              accept=".json"
              onChange={(e) => handleFileUpload(e)}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
            />
          </div>
          <ButtonsGroup
            startSimulation={startSimulation}
            pauseSimulation={pauseSimulation}
            resumeSimulation={resumeSimulation}
            isSimulating={isSimulating}
          />
        </div>
      </div>
    </>
  );
}
