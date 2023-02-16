import React, { useEffect, useState } from "react";
import "../assets/styles/style.css";
import { ImCross } from "react-icons/im";

const ModalPreview = ({ closeModalHandler, initialFields }) => {
  const [finalGeneratedForm, setFinalGeneratedForm] = useState([]);
  useEffect(() => {
    const generatedForm = [
      {
        formId: "dynamicForm",
        formName: localStorage.getItem("formName")
          ? localStorage.getItem("formName")
          : "Untitled Form",
        fields: [...initialFields],
      },
    ];
    setFinalGeneratedForm(generatedForm);
  }, [initialFields]);

  const handleFinalFormSubmit = (e) => {
    e.preventDefault();
    console.log(finalGeneratedForm);
  };

  // console.log("generated: " + finalGeneratedForm[0].formName);
  return (
    <div className="modal-preview px-10 pb-5">
      <div className="flex justify-between items-center">
        <input
          type="text"
          className="input p-3 pl-0 text-3xl"
          defaultValue={
            localStorage.getItem("formName")
              ? localStorage.getItem("formName")
              : "Untitled Form"
          }
          name=""
          id=""
          onChange={(e) => localStorage.setItem("formName", e.target.value)}
        />
        <button className="btn" onClick={closeModalHandler}>
          <ImCross />
        </button>
      </div>
      <hr className="my-4" />

      <form action="" onSubmit={handleFinalFormSubmit}>
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
        {initialFields.length > 0 && (
          <>
            <hr />
            <div className="text-right">
              <button className="btn bg-primary text-white p-3 mt-4 px-6 rounded-md">
                SAVE
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ModalPreview;
