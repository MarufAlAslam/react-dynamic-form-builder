import React from "react";
import { TiTick } from "react-icons/ti";

const EditFormField = ({
  field,
  index,
  labelOnsubmitHandler,
  title,
  defaultValue,
}) => {
  return (
    <div>
      <div className="w-full">
        <form
          action=""
          onSubmit={labelOnsubmitHandler}
          className="flex justify-start items-centerm w-full"
        >
          <label
            className="flex text-primary p-1 rounded-md justify-start font-bold items-center w-[250px]"
            htmlFor={`input${index}`}
          >
            {title}
          </label>
          <input
            type="text"
            className="input input-bordered w-full p-1 mx-3"
            defaultValue={defaultValue}
            name={`placeholder${index}`}
            id={`placeholder${index}`}
          />
          <button className="btn border p-1 rounded-md bg-green min-w-[40px] h-[40px] flex justify-center items-center text-white">
            <TiTick />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFormField;
