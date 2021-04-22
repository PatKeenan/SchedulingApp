import React, { useState } from "react";
import Button from "../../UI/Button";
import Form from "../../FormElements/Form";
import TextInput from "../../FormElements/TextInput";

const Index = ({ data }) => {
  const [detailView, setDetailView] = useState(false);
  const [deleteView, setDeleteView] = useState(false);

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
              onClick={() => setDeleteView(!deleteView)}
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
        <Form bigTitle={data.title}>
          <label htmlFor="showing">Showing: </label>
          <input type="number" value={data.stopNumber} id="showing" />
          <TextInput
            type={"text"}
            inputValue={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
            chars={data.property.address.length}
          />
          <div className="space-x-4 pt-4 flex justify-end">
            <Button
              title={"Cancel"}
              func={() => {
                setDetailView(false);
              }}
              variant={`red`}
            />
            <Button
              title={"Save"}
              func={() => {
                setDetailView(false);
              }}
              variant={`green`}
            />
          </div>
        </Form>
      )}
      {/* Delete View */}
      {deleteView && (
        <Form>
          <h3>
            Are you sure you want to delete showing number {data.stopNumber}
          </h3>
          <div className="space-x-4 pt-4 flex justify-end">
            <Button
              title={"Cancel"}
              func={() => {
                setDeleteView(false);
              }}
              variant={`gray`}
            />
            <Button
              title={"Delete"}
              func={() => {
                setDeleteView(false);
              }}
              variant={`red`}
            />
          </div>
        </Form>
      )}
    </>
  );
};

export default Index;
