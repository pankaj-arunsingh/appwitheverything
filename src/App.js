import { useState, lazy, Suspense, useEffect } from "react";
import SelectBox from "./components/SelectBox";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { initializeNotes } from "./reducers/noteReducer";

const Volvo = lazy(() => import("./components/Volvo"));
const Saab = lazy(() => import("./components/Saab"));
const Mercedes = lazy(() => import("./components/Mercedes"));
const BMW = lazy(() => import("./components/BMW"));
const StyledDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
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
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);
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
    <StyledDiv>
      <SelectBox items={options} handleSelectedItem={handleSelectedItem} />
      <Suspense fallback={<div>Loading...</div>}>
        {componentToRender(renderComponent)}
      </Suspense>
    </StyledDiv>
  );
}

export default App;
