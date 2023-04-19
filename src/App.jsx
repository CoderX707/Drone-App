import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Components/Map";
import InputForm from "./Components/InputForm";
import ShowTable from "./Components/ShowTable";
import ButtonsGroup from "./Components/ButtonsGroup";

const initialPath = [
  {
    lat: 8.8518,
    lng: 76.73123000000001,
  },
  {
    lat: 8.851220000000001,
    lng: 76.73173000000001,
  },
  {
    lat: 8.850200000000001,
    lng: 76.73293000000001,
  },
  {
    lat: 8.84966,
    lng: 76.73342000000001,
  },
  {
    lat: 8.848920000000001,
    lng: 76.73382000000001,
  },
  {
    lat: 8.84797,
    lng: 76.73409000000001,
  },
  {
    lat: 8.84509,
    lng: 76.73453,
  },
  {
    lat: 8.843850000000002,
    lng: 76.73492,
  },
  {
    lat: 8.84294,
    lng: 76.73541,
  },
  {
    lat: 8.841140000000001,
    lng: 76.73677,
  },
  {
    lat: 8.84003,
    lng: 76.73747,
  },
  {
    lat: 8.838830000000002,
    lng: 76.73848000000001,
  },
  {
    lat: 8.836,
    lng: 76.73998,
  },
];

function App() {
  const [inputs, setInputs] = useState({ lat: "", lan: "" });
  const [path, setPath] = useState(initialPath);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [timer, setTimer] = useState(() => {});

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  const handleFileUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const areaData = e.target.result;
      setPath(JSON.parse(areaData));
    };
    reader.readAsText(e.target.files[0]);
  };

  const playPause = () => {
    if (isSimulating) {
      clearInterval(timer);
      return;
    } else {
      setIsSimulating(true);
      clearInterval(timer);
      const currentTimeout = setInterval(() => {
        setCurrentIndex((currentIndex) => {
          if (currentIndex < path.length - 1) {
            path[currentIndex].time = new Date();
            return currentIndex + 1;
          }
          path[currentIndex].time = new Date();
          clearInterval(timer);
          setIsSimulating(false);
          return currentIndex;
        });
      }, 1000);
      setTimer(currentTimeout);
    }
  };
  const handleAddInput = () => {
    if (initialPath.length === path.length) {
      setPath([inputs]);
      setInputs({ lat: "", lan: "" });
      return;
    }
    setPath([...path, inputs]);
    setInputs({ lat: "", lan: "" });
  };
  const startSimulation = () => {
    setCurrentIndex(0);
    playPause();
  };
  const resumeSimulation = () => {
    setIsSimulating(true);
    playPause();
  };
  const pauseSimulation = () => {
    setIsSimulating(false);
    playPause();
  };

  return (
    <>
      {isLoaded ? (
        <div>
          {isSimulating ? (
            <>
              <ButtonsGroup
                startSimulation={startSimulation}
                pauseSimulation={pauseSimulation}
                resumeSimulation={resumeSimulation}
                isSimulating={isSimulating}
              />
              <Map currentIndex={currentIndex} path={path} />
            </>
          ) : (
            <>
              <InputForm
                handleFileUpload={handleFileUpload}
                isSimulating={isSimulating}
                startSimulation={startSimulation}
                pauseSimulation={pauseSimulation}
                resumeSimulation={resumeSimulation}
                handleAddInput={handleAddInput}
                inputs={inputs}
                setInputs={setInputs}
              />
              <ShowTable path={path} />
            </>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;

// ReactDOM.render(<App />, document.getElementById("root"));
