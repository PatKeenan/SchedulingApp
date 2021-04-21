import React from "react";
import showingData from "../../mockData/showings";
import AllShowingsList from "../../components/showings/AllShowingList";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const ShowingDetail = () => {
  let id = useParams();
  let group = id.id;

  console.log(id.id);
  return (
    <div className="w-full px-10 relative">
      <Link to="/showings">
        <div className="flex flex-row space-x-1">
          <FaAngleLeft className="my-auto" />
          <span>Back</span>
        </div>
      </Link>
      {showingData.map((d) => {
        if (d.groupId === group) {
          return (
            <>
              <AllShowingsList data={d} />
            </>
          );
        }
      })}
    </div>
  );
};

export default ShowingDetail;
