"use client";
import ChargerPin from "@/components/ChargerPin";
import { AlertDialog } from "@/components/dialogs/Dialogs";
import React, { useState } from "react";

const PortView: React.FC = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedStation, setSelectedStation] = useState<string>("");

  function handleClose() {
    setShowDialog(false);
  }

  const handlePinClick = (stationName: string) => {
    setSelectedStation(stationName);
    setShowDialog(true);
  };

  return (
    <>
      <AlertDialog
        title={`Charging Station: ${selectedStation}`} // Show the selected station name in the dialog
        open={showDialog}
        setOpen={setShowDialog}
      >
        <div className="pt-4 space-y-10">
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
          <div>List of outlets at this station....</div>
        </div>
      </AlertDialog>

      <div className="w-full h-screen flex flex-col justify-center items-center text-center relative">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1000 600"
          // transform="rotate(-90 14 40)"
          // transform="rotate(-90 28 38)"
        >
          {/* <image href="/rungstedny.png" width="100%" height="100%" /> */}
          <image href="/rungstedhavn.svg" width="100%" height="100%" />
          {/* højre top - venstre side */}
          {/* toppen - venstreside */}
          <ChargerPin
            xCoordinate={788}
            yCoordinate={80}
            size={6}
            color="red"
            onClick={() => handlePinClick("Station 1")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={796}
            yCoordinate={95}
            size={6}
            color="black"
            onClick={() => handlePinClick("Station 2")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={803.8}
            yCoordinate={112.5}
            size={6}
            color="blue"
            onClick={() => handlePinClick("Station 3")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={809.8}
            yCoordinate={129}
            size={6}
            color="yellow"
            onClick={() => handlePinClick("Station 4")}
            iconColor="black"
          />
          <ChargerPin
            xCoordinate={815.2}
            yCoordinate={146}
            size={6}
            color="cyan"
            onClick={() => handlePinClick("Station 5")}
            iconColor="black"
          />
          <ChargerPin
            xCoordinate={820}
            yCoordinate={163.5}
            size={6}
            color="red"
            onClick={() => handlePinClick("Station 6")}
            iconColor="white"
          />

          {/* højre side */}
          <ChargerPin
            xCoordinate={796.5}
            yCoordinate={362.5}
            size={6}
            color="red"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={786.5}
            yCoordinate={379}
            size={6}
            color="black"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={775}
            yCoordinate={395}
            size={6}
            color="blue"
            onClick={() => handlePinClick("Station 9")}
            iconColor="white"
          />

          {/* venstre top */}
          <ChargerPin
            xCoordinate={619}
            yCoordinate={29.5}
            size={6}
            color="red"
            onClick={() => handlePinClick("Station 10")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={601.5}
            yCoordinate={28.8}
            size={6}
            color="black"
            onClick={() => handlePinClick("Station 11")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={584}
            yCoordinate={27.8}
            size={6}
            color="blue"
            onClick={() => handlePinClick("Station 12")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={566.5}
            yCoordinate={27.5}
            size={6}
            color="yellow"
            onClick={() => handlePinClick("Station 13")}
            iconColor="black"
          />

          {/* bro 11*/}
          <ChargerPin
            xCoordinate={566.5}
            yCoordinate={265.5}
            size={5}
            color="red"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={573.5}
            yCoordinate={284}
            size={3}
            color="blue"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={580.5}
            yCoordinate={302.5}
            size={3}
            color="cyan"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={588}
            yCoordinate={322}
            size={3}
            color="green"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={596.5}
            yCoordinate={341.5}
            size={3}
            color="black"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={605}
            yCoordinate={361}
            size={3}
            color="yellow"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={613.5}
            yCoordinate={380.5}
            size={3}
            color="purple"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={621}
            yCoordinate={400}
            size={3}
            color="red"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={629}
            yCoordinate={420}
            size={3}
            color="lime"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />

          {/* bro 9 */}
          <ChargerPin
            xCoordinate={505.5}
            yCoordinate={289.5}
            size={5}
            color="Lime"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={513.5}
            yCoordinate={309}
            size={3}
            color="red"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={521}
            yCoordinate={328.5}
            size={3}
            color="purple"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={529.5}
            yCoordinate={348}
            size={3}
            color="yellow"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />

          {/* <circle
          cx={788}
          cy={80}
          r="5"
          fill="red"
          onClick={() => handlePinClick("Station 1")}
          style={{ cursor: "pointer" }}
        /> */}

          {/* <circle
          cx={796}
          cy={95}
          r="5"
          fill="blue"
          onClick={() => handlePinClick("Station 2")}
          style={{ cursor: "pointer" }}
        /> */}

          {/* <circle
          cx={803.8}
          cy={112.5}
          r="5"
          stroke="yellow"
          stroke-width="3"
          fill="green"
          onClick={() => handlePinClick("Station 2")}
          className="cursor-pointer"
        /> */}
        </svg>
      </div>
    </>
  );
};

export default PortView;
