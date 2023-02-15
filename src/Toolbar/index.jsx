import React, { useEffect, useState } from "react";
import { GrDrag, GrCheckboxSelected } from "react-icons/gr";
import { TbSelect } from "react-icons/tb";
import { BiText } from "react-icons/bi";
import { BsTextareaT } from "react-icons/bs";

const Toolbar = ({ initialFields, setInitialFields }) => {
  const items = [
    {
      id: 1,
      name: "Text",
      icon: BiText,
      inputType: "input",
      type: "text",
      defaultValue: "hello world",
      value: "",
      placeholder: "Enter text",
      required: false,
      options: [],
    },
    {
      id: 2,
      name: "Select",
      icon: TbSelect,
      inputType: "select",
      type: "select",
      defaultValue: "",
      value: "",
      placeholder: "Enter text",
      required: false,
      options: [
        {
          id: "s-1",
          value: "Option 1",
          label: "Option 1",
        },
        {
          id: "s-2",
          value: "Option 2",
          label: "Option 2",
        },
        {
          id: "s-3",
          value: "Option 3",
          label: "Option 3",
        },
      ],
    },
    {
      id: 3,
      name: "Text Area",
      icon: BsTextareaT,
      inputType: "textarea",
      type: "textarea",
      defaultValue: "",
      value: "",
      placeholder: "Enter Your Message",
      required: false,
      options: [],
    },
  ];

  const itemClickHandler = (item) => {
    console.log(`Item clicked: ${item.name}`);
    setInitialFields([...initialFields, item]);
  };
  return (
    <div className="toolbar p-4 pl-0">
      <div className="card h-full rounded-md p-4 bg-white shadow-md">
        <h2 className="text-lg mb-4">ToolBar</h2>
        <hr />

        <div className="toolbar-items">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => itemClickHandler(item)}
              className="btn w-full item flex justify-between items-center"
            >
              <div className="contents w-full">
                <div className="icon">
                  <item.icon className="mr-2" />
                </div>
                <div className="text w-full text-left">
                  <h4 className="text-lg">{item.name}</h4>
                </div>
              </div>
              <div className="drag">
                <GrDrag />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
