/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import AllShowingList from "../../components/showings/AllShowingList";
import showingData from "../../mockData/showings";
import { FaAngleLeft } from "react-icons/fa";
const Index = () => {
  // set the showing list to blank to start and when button is presses, pass the info into state
  const [showingId, setShowingID] = useState("");
  const [showGroupItems, setShowGroupItems] = useState(false);

  useEffect(() => {
    console.log(showingId);
    console.log(showingData);
  }, [showingId]);
  return (
    <div className="w-full px-10 relative">
      {/* Show all of the showing groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 pt-12">
        {!showGroupItems &&
          showingData.map((data) => {
            return (
              <div className=" max-h-screen overflow-scroll">
                <div
                  className="bg-gray-50 shadow-md rounded p-6 flex flex-col group my-3 hover:shadow-lg transition duration-150 ease-in-out text-gray-700 cursor-pointer"
                  onClick={() => {
                    /* Pass the selected showing Id into the State */
                    setShowingID(data.groupId);
                    /* Setting the showingGroupItems to true or false will show the componenet below */
                    setShowGroupItems(!showGroupItems);
                  }}
                >
                  <p> {data.title}</p>
                  <p
                    className={`${
                      data.status === "Confirmed"
                        ? "text-green-500"
                        : "text-gray-700"
                    } ${"text-xs"}`}
                  >
                    {data.status}
                  </p>
                  <p>Stops: {data.data.length}</p>

                  <p className="text-blue-900">{data.date}</p>

                  <span className="text-blue-400 text-sm mx-auto font-normal group-hover:font-semibold transform transition ease-in-out duration-150">
                    view
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {/* Next Section */}
      {/*  --------Only display the showings whos id's match the selected id from above------- */}
      {showGroupItems &&
        showingId !== "" &&
        showingData.map((d) => {
          if (d.groupId === showingId) {
            return (
              <>
                <button
                  onClick={() => setShowGroupItems(!showGroupItems)}
                  className="absolute top-5 left-8 flex flex-row  "
                >
                  <FaAngleLeft className="my-auto mr-2" />
                  back
                </button>

                <AllShowingList data={d} />
              </>
            );
          }
        })}
    </div>
  );
};

export default Index;
