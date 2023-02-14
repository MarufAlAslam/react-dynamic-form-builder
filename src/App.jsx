import React from "react";
import DndHolder from "./DndHolder";
import Toolbar from "./Toolbar";
import "./assets/styles/style.css";

function App() {
  const [initialFields, setInitialFields] = React.useState([]);
  return (
    <div className="App">
      <div className="flex justify items-start">
        <DndHolder
          initialFields={initialFields}
          setInitialFields={setInitialFields}
        />
        <Toolbar
          initialFields={initialFields}
          setInitialFields={setInitialFields}
        />
      </div>
    </div>
  );
}

export default App;
