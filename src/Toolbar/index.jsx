import React, { useEffect } from "react";
import { GrDrag, GrCheckboxSelected } from "react-icons/gr";
import { BiText } from "react-icons/bi";

const Toolbar = ({ initialFields, setInitialFields }) => {
  const items = [
    {
      id: 1,
      name: "Text",
      icon: BiText,
      inputType: "input",
      type: "text",
      defaultValue: "",
      value: "",
      placeholder: "Enter text",
      required: false,
      options: [],
    },
    {
      id: 2,
      name: "Select",
      icon: GrCheckboxSelected,
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
  ];

  const itemClickHandler = (item) => {
    console.log(`Item clicked: ${item.name}`);
    setInitialFields([...initialFields, item]);
  };
  return (
    <div className="toolbar p-4">
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
  );
};

export default Toolbar;
