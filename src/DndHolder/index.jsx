import React, { useEffect } from "react";

const DndHolder = ({ initialFields }) => {
  useEffect(() => {
    console.log(initialFields);
  }, [initialFields]);
  return (
    <div className="text-center dnd-holder p-4">
      <h3 className="mb-4 text-xl">DND Holder</h3>
      <hr />

      <div className="text-left">
        {initialFields.map((field, index) => (
          <div key={index} className="field">
            <div className="field-header flex justify-between items-center">
              <label htmlFor=""></label>
            </div>
            <field.inputType
              className="w-full input input-bordered"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DndHolder;
