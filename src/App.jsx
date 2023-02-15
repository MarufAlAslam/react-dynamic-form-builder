import React, { useState } from "react";
import DndHolder from "./DndHolder";
import Toolbar from "./Toolbar";
import "./assets/styles/style.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ModalPreview from "./Modal";

function App() {
  const [initialFields, setInitialFields] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [preview, setPreview] = useState(false);

  const previewHandler = () => {
    setModalVisible(!modalVisible);
    setPreview(!preview);
  };
  // console.log(modalVisible);
  return (
    <div className="App">
      <div className="p-4 flex justify-between items-center">
        <div className="title-part">
          <h3 className="text-xl font-bold blue">Form</h3>
          <p className="text-sm gray">Create & Manage Form</p>
        </div>
        <div className="action-part flex items-center">
          <button
            className="btn text-lg mr-3 text-[#A6ACCB] border-end"
            onClick={previewHandler}
          >
            {preview ? <BsEyeSlash /> : <BsEye />}
          </button>
          <button className="btn bg-primary px-5 py-2 rounded-md text-white">
            Generate
          </button>
        </div>
      </div>
      <div className="flex justify items-start">
        <DndHolder
          initialFields={initialFields}
          setInitialFields={setInitialFields}
          setModalVisible={setModalVisible}
        />
        <Toolbar
          initialFields={initialFields}
          setInitialFields={setInitialFields}
          modalVisible={modalVisible}
        />
        {modalVisible && (
          <ModalPreview
            closeModalHandler={previewHandler}
            initialFields={initialFields}
          />
        )}
      </div>
    </div>
  );
}

export default App;
