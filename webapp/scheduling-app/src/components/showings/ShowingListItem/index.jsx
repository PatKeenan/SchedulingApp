import React, { useState } from "react";
import Button from "../../UI/Button";
import Form from "../../FormElements/Form";
import TextInput from "../../FormElements/TextInput";

const Index = ({ data }) => {
  const [detailView, setDetailView] = useState(false);

  const [propertyAddress, setPropertyAddress] = useState(data.property.address);

  return (
    <>
      <div className="bg-gray-50 shadow-md hover:shadow-lg cursor-pointer rounded p-6 flex flex-col my-3 group transition ease-in-out duration-150">
        <div className="flex flex-row w-full justify-between align-middle">
          <h3>Showing: {data.stopNumber}</h3>
          <div className="flex flex-row space-x-4">
            <button
              className="text-gray-50 group-hover:text-blue-500 text-sm hover:underline transition ease-in-out duration-150"
              onClick={() => setDetailView(!detailView)}
            >
              (Edit)
            </button>
            <button
              className="text-gray-50 group-hover:text-red-500 text-sm hover:underline transition ease-in-out duration-150"
              onClick={() => setDetailView(!detailView)}
            >
              (Delete)
            </button>
          </div>
        </div>
        <p>Address: {propertyAddress}</p>
        <p>
          Time: {data.appoitmentDetails.startTime} -{" "}
          {data.appoitmentDetails.endTime}
        </p>
        <p
          className={`${
            data.appoitmentDetails.status === "Confirmed"
              ? "text-green-500"
              : "text-gray-700"
          } ${
            data.appoitmentDetails.status === "Denied"
              ? "text-red-500"
              : "text-gray-700"
          }`}
        >
          Status: {data.appoitmentDetails.status}
        </p>
        <div className="flex flex-row flex-nowrap w-full">
          <span className="pr-1">People: </span>
          {data.people.map((person) => {
            return (
              <span
                className="flex flex-row flex-nowrap pr-2"
                key={person.name}
              >
                {person.name}
              </span>
            );
          })}
        </div>
      </div>
      {/* Show the Edit/Detail View of the Showing If the DetailView is true */}
      {detailView && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 grid place-items-center">
          <Form bigTitle={data.title}>
            <h3>Showing: {data.stopNumber}</h3>
            <TextInput
              type={"text"}
              inputValue={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
              chars={data.property.address.length}
            />
            <div className="">
              <Button
                title={"Close"}
                func={() => {
                  setDetailView(false);
                }}
                variant={"red"}
              />
              <Button
                title={"Save"}
                func={() => {
                  setDetailView(false);
                }}
                variant={"green"}
              />
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default Index;
