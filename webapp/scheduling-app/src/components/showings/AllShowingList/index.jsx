import React, { useState } from "react";
import Form from "../../FormElements/Form";
import TextInput from "../../FormElements/TextInput";
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
          variant={`blue`}
        />
      </div>
      <div className="flex flex-col h-5/6">
        <div className="grid md:grid-cols-2 grid-cols-1 border border-black border-opacity-10 p-4 gap-3 h-full overflow-scroll">
          <div className="overflow-scroll h-full w-full px-3 ">
            {data.data.map((ob) => {
              return <ShowingListItem data={ob} key={ob.id} />;
            })}
          </div>
          <div className="hidden md:flex">
            <img
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      {addNew && (
        <Form bigTitle={"Add Showing"}>
          {/*   <label htmlFor="showing">Showing: </label>
            <input type="number" value="0" id="showing" /> */}
          <TextInput
            type={"text"}
            label="Property Address:"
            placeHolder="310 Main Street, Asbury Park NJ"
            inputValue={""}
            /* onChange={(e) => setPropertyAddress(e.target.value)} */
            /* chars={data.property.address.length} */
          />
          <div className="space-x-4 pt-4 flex justify-end">
            <Button
              title={"Cancel"}
              func={() => {
                setAddNew(false);
              }}
              variant={`red`}
            />
            <Button
              title={"Save"}
              func={() => {
                setAddNew(false);
              }}
              variant={`green`}
            />
          </div>
        </Form>
      )}
    </>
  );
};

export default Index;
