/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link } from "react-router-dom";

import showingData from "../../mockData/showings";

const Index = () => {
  return (
    <div className="w-full px-10 relative">
      {/* Show all of the showing groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 pt-12">
        {showingData.map((data) => {
          return (
            <div className=" max-h-screen overflow-scroll">
              <Link to={`/showings/${data.groupId}`}>
                <div className="bg-gray-50 shadow-md rounded p-6 flex flex-col group my-3 hover:shadow-lg transition duration-150 ease-in-out text-gray-700 cursor-pointer">
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
