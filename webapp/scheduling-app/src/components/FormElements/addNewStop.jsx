import React from "react";
import TextInput from "..//FormElements/TextInput";
import Form from "./Form";

const AddNewStop = () => {
  return (
    <Form bigTitle={"Add Appointment"}>
      <TextInput
        inputValue={""}
        type={"text"}
        onChange={""}
        placeHolder={"Enter Address"}
        label={"Address:"}
      />
      <TextInput type={"date"} label={"Day:"} />
    </Form>
  );
};

export default AddNewStop;
