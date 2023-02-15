import React, { useEffect } from "react";

import { TiTick } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";

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
                <div className="w-full">
                  <form
                    action=""
                    onSubmit={labelOnsubmitHandler}
                    className="flex justify-start items-centerm w-full"
                  >
                    <label
                      className="flex bg-primary text-white p-1 rounded-md text-center text-sm justify-center items-center w-[150px]"
                      htmlFor={`input${index}`}
                    >
                      Change Label
                    </label>
                    <input
                      type="text"
                      className="input w-full p-1 pl-0 mx-3"
                      defaultValue={field.name}
                      name={`input${index}`}
                      id={`input${index}`}
                    />
                    <button className="btn border p-1 rounded-md bg-green w-[40px] h-[40px] flex justify-center items-center text-white">
                      <TiTick />
                    </button>
                  </form>
                </div>
                <div className="actions">
                  <button
                    className="btn border p-1 rounded-md bg-red w-[40px] h-[40px] flex justify-center items-center text-white"
                    onClick={() => deleteItemHandler(index)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
              {field.inputType === "input" && (
                <field.inputType
                  className="w-full input input-bordered"
                  placeholder={field.placeholder}
                  defaultValue={field.defaultValue}
                  name={`input${index}`}
                  type={field.type}
                />
              )}
              {field.inputType === "select" && (
                <field.inputType
                  className="w-full input input-bordered"
                  placeholder={field.placeholder}
                >
                  <option value="" hidden>
                    Select
                  </option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </field.inputType>
              )}
              {field.inputType === "textarea" && (
                <field.inputType
                  className="w-full input input-bordered"
                  placeholder={field.placeholder}
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
