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
          <image href="/rungstedny.png" width="100%" height="100%" />
          {/* højre top - venstre side */}
          {/* toppen - venstreside */}
          <ChargerPin
            xCoordinate={757.5}
            yCoordinate={120}
            size={6}
            color="red"
            onClick={() => handlePinClick("Station 1")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={768}
            yCoordinate={137.5}
            size={6}
            color="black"
            onClick={() => handlePinClick("Station 2")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={775}
            yCoordinate={155}
            size={6}
            color="blue"
            onClick={() => handlePinClick("Station 3")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={781}
            yCoordinate={172.5}
            size={6}
            color="yellow"
            onClick={() => handlePinClick("Station 4")}
            iconColor="black"
          />
          <ChargerPin
            xCoordinate={786}
            yCoordinate={190}
            size={6}
            color="cyan"
            onClick={() => handlePinClick("Station 5")}
            iconColor="black"
          />
          <ChargerPin
            xCoordinate={790.2}
            yCoordinate={208}
            size={6}
            color="red"
            onClick={() => handlePinClick("Station 6")}
            iconColor="white"
          />

          {/* højre side */}
          <ChargerPin
            xCoordinate={775.5}
            yCoordinate={362.5}
            size={6}
            color="red"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={768.5}
            yCoordinate={379}
            size={6}
            color="black"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={759}
            yCoordinate={395.5}
            size={6}
            color="blue"
            onClick={() => handlePinClick("Station 9")}
            iconColor="white"
          />

          {/* venstre top */}
          <ChargerPin
            xCoordinate={665}
            yCoordinate={98}
            size={7}
            color="green"
            onClick={() => handlePinClick("Station 10")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={640.5}
            yCoordinate={96}
            size={6}
            color="blue"
            onClick={() => handlePinClick("Station 10")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={622.5}
            yCoordinate={83.5}
            size={6}
            color="purple"
            onClick={() => handlePinClick("Station 10")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={602.5}
            yCoordinate={75.5}
            size={6}
            color="red"
            onClick={() => handlePinClick("Station 10")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={582}
            yCoordinate={75}
            size={6}
            color="black"
            onClick={() => handlePinClick("Station 11")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={562}
            yCoordinate={74.5}
            size={6}
            color="blue"
            onClick={() => handlePinClick("Station 12")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={542}
            yCoordinate={74}
            size={6}
            color="yellow"
            onClick={() => handlePinClick("Station 13")}
            iconColor="black"
          />

          {/* bro 11*/}
          <ChargerPin
            xCoordinate={557}
            yCoordinate={290.5}
            size={5}
            color="red"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={565}
            yCoordinate={308}
            size={3}
            color="blue"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={571.5}
            yCoordinate={325.5}
            size={3}
            color="cyan"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={578.5}
            yCoordinate={343}
            size={3}
            color="green"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={585.5}
            yCoordinate={359.5}
            size={3}
            color="black"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={593}
            yCoordinate={377.5}
            size={3}
            color="yellow"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={600.5}
            yCoordinate={395.5}
            size={3}
            color="purple"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={607.5}
            yCoordinate={414.5}
            size={3}
            color="red"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={615}
            yCoordinate={432}
            size={3}
            color="lime"
            onClick={() => handlePinClick("Station 7")}
            iconColor="white"
          />

          {/* bro 9 */}
          <ChargerPin
            xCoordinate={501.5}
            yCoordinate={312.5}
            size={5}
            color="Lime"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={509}
            yCoordinate={330.5}
            size={3}
            color="red"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={516.5}
            yCoordinate={348.5}
            size={3}
            color="purple"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={524}
            yCoordinate={366.5}
            size={3}
            color="yellow"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={531.5}
            yCoordinate={384.5}
            size={3}
            color="black"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={538.5}
            yCoordinate={402}
            size={3}
            color="green"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={546}
            yCoordinate={419.5}
            size={3}
            color="cyan"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={554}
            yCoordinate={437}
            size={3}
            color="blue"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
          <ChargerPin
            xCoordinate={563}
            yCoordinate={457.5}
            size={3}
            color="red"
            onClick={() => handlePinClick("Station 8")}
            iconColor="white"
          />
        </svg>
      </div>
    </>
  );
};

export default PortView;
