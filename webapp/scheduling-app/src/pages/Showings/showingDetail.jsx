import React from "react";
import showingData from "../../mockData/showings";
import AllShowingsList from "../../components/showings/AllShowingList";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const ShowingDetail = () => {
  //grab the id from the params. The id is set inside the showing page link
  let id = useParams();
  let group = id.id;

  return (
    <div className="w-full px-10 relative">
      <Link to="/showings">
        <div className="flex flex-row space-x-1">
          <FaAngleLeft className="my-auto" />
          <span>Back</span>
        </div>
      </Link>
      {/* Show The list of showings which belong to the showing group */}
      {showingData.map((d) => {
        if (d.groupId === group) {
          return (
            <>
              {/* Change Math.random key in production to a real unique id */}
              <AllShowingsList data={d} key={Math.random() * 100} />
            </>
          );
        }
      })}
    </div>
  );
};

export default ShowingDetail;
