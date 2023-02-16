import React, { useEffect } from "react";

import { TiTick } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import EditFormField from "../Components/EditFormField";

const DndHolder = ({ initialFields, setInitialFields }) => {
  // useEffect(() => {
  //   console.log(initialFields);
  // }, [initialFields]);

  const deleteItemHandler = (index) => {
    const newInitialFields = initialFields.filter((item, i) => i !== index);
    setInitialFields(newInitialFields);
  };

  const labelOnsubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-start dnd-holder p-4">
      <div className="card h-full bg-white p-4 shadow-md rounded-md">
        <div className="text-left">
          {initialFields.map((field, index) => (
            <div key={index} className="field">
              <div className="field-header mb-2 flex justify-between items-center">
                <EditFormField
                  field={field}
                  labelOnsubmitHandler={labelOnsubmitHandler}
                  title="Change Label"
                />
                <div className="actions">
                  <button
                    className="btn border p-1 rounded-md bg-red min-w-[40px] h-[40px] flex justify-center items-center text-white"
                    onClick={() => deleteItemHandler(index)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
              {field.inputType === "input" && (
                <EditFormField
                  field={field}
                  labelOnsubmitHandler={labelOnsubmitHandler}
                  title="Change Placeholder"
                />
              )}
              {field.inputType === "select" && (
                <EditFormField
                  field={field}
                  labelOnsubmitHandler={labelOnsubmitHandler}
                  title="Add Option"
                />
              )}
              {field.inputType === "textarea" && (
                <EditFormField
                  field={field}
                  labelOnsubmitHandler={labelOnsubmitHandler}
                  title="Change Placeholder"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DndHolder;
