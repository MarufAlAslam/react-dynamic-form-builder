import React, { useState } from "react";
import DndHolder from "./DndHolder";
import Toolbar from "./Toolbar";
import "./assets/styles/style.css";

function App() {
  const [initialFields, setInitialFields] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default App;
