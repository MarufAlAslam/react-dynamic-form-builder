import React, { useState } from "react";
import "../assets/styles/style.css";
import { ImCross } from "react-icons/im";

const ModalPreview = ({ closeModalHandler, initialFields }) => {
  const generatedForm = [
    {
      formId: "form-1",
      formName: "Untitled Form",
      fields: [...initialFields],
    },
  ];

  console.log("generated: " + generatedForm[0].formName);
  return (
    <div className="modal-preview p-10">
      <div className="flex justify-between items-center">
        <input
          type="text"
          className="input p-3 pl-0 text-3xl"
          defaultValue={localStorage.getItem("formName")}
          name=""
          id=""
          onChange={(e) => localStorage.setItem("formName", e.target.value)}
        />
        <button className="btn" onClick={closeModalHandler}>
          <ImCross />
        </button>
      </div>
      <hr className="my-4" />

      {initialFields.length > 0
        ? initialFields.map((field, index) => (
            <div
              key={index}
              className={`final-field my-4 border-left ${field.type}`}
            >
              <div className="field-header flex justify-between items-center">
                <label htmlFor="">
                  <h4 className="mb-2">{field.name}</h4>
                </label>
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
          ))
        : "No fields added yet"}
    </div>
  );
};

export default ModalPreview;
