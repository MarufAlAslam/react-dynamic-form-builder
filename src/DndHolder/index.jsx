import React, { useEffect } from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const DndHolder = ({ initialFields, setInitialFields }) => {
  useEffect(() => {
    console.log(initialFields);
  }, [initialFields]);

  const deleteItemHandler = (index) => {
    const newInitialFields = initialFields.filter((item, i) => i !== index);
    setInitialFields(newInitialFields);
  };
  return (
    <div className="text-start dnd-holder p-4">
      <div className="card h-full bg-white p-4 shadow-md rounded-md">
        <div className="text-left">
          {initialFields.map((field, index) => (
            <div key={index} className="field">
              <div className="field-header flex justify-between items-center">
                <label htmlFor="">
                  <h4 className="mb-2">{field.name}</h4>
                </label>
                <div className="actions">
                  <button className="btn btn-ghost pl-2 text-lg">
                    <BiEdit />
                  </button>
                  <button
                    className="btn btn-ghost pl-2 text-lg"
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
