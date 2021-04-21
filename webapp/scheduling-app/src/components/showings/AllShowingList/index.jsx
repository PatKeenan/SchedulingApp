import React, { useState } from "react";
import AddNewStop from "../../FormElements/addNewStop";
import ShowingListItem from "../ShowingListItem";
import Button from "../../UI/Button";

const Index = ({ data }) => {
  //show
  const [addNew, setAddNew] = useState(false);
  return (
    <>
      <div className="flex justify-between align-middle my-2">
        <h3 className="mt-auto">{data.title}</h3>
        <Button
          title={"Add New"}
          func={() => {
            setAddNew(true);
          }}
          variant={"blue"}
        />
      </div>
      <div className="flex flex-col h-5/6">
        <div className="grid grid-cols-2 border border-black border-opacity-10 p-4 gap-3 h-full overflow-scroll">
          <div className="overflow-scroll h-full w-full px-3 ">
            {data.data.map((ob) => {
              return <ShowingListItem data={ob} />;
            })}
          </div>
          <div>
            <img
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      {addNew && (
        <div className="h-auto w-auto z-50 absolute top-0 right-0 bottom-0 left-0 flex justify-center align-middle bg-opacity-80 bg-black">
          <div className=" absolute right-8 top-10 px-4 py-4">
            <Button
              title={"X Close"}
              variant={"red"}
              func={() => {
                setAddNew(!addNew);
              }}
            />
          </div>

          <AddNewStop />
        </div>
      )}
    </>
  );
};

export default Index;
