import { useState } from "react";
import Mercedes from "./components/Mercedes";
import Saab from "./components/Saab";
import SelectBox from "./components/SelectBox";
import Volvo from "./components/Volvo";
import BMW from "./components/BMW";

const options = [
  {
    id: 1,
    value: "volvo",
    label: "volvo car",
  },
  {
    id: 2,
    value: "SAAB",
    label: "saab car",
  },
  {
    id: 3,
    value: "mercedes",
    label: "mercedes car",
  },
  {
    id: 4,
    value: "BMW",
    label: "BMW car",
  },
];
function App() {
  const [renderComponent, setRenderComponent] = useState("volvo");
  const handleSelectedItem = (selectedValue) => {
    setRenderComponent(selectedValue);
    console.log(selectedValue);
  };
  const componentToRender = (value) => {
    switch (value) {
      case "volvo":
        return <Volvo />;
      case "SAAB":
        return <Saab />;
      case "mercedes":
        return <Mercedes />;
      case "BMW":
        return <BMW />;
      default:
        return <Volvo />;
    }
  };
  return (
    <div className="App">
      <SelectBox items={options} handleSelectedItem={handleSelectedItem} />
      {componentToRender(renderComponent)}
    </div>
  );
}

export default App;
