import React, { Suspense, lazy, useState } from "react";
import SelectBox from "./SelectBox";
import styled from "styled-components";
const Volvo = lazy(() => import("./Volvo"));
const Saab = lazy(() => import("./Saab"));
const Mercedes = lazy(() => import("./Mercedes"));
const BMW = lazy(() => import("./BMW"));
const StyledDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const Cars = () => {
  const [renderComponent, setRenderComponent] = useState("volvo");
  const handleSelectedItem = (selectedValue) => {
    setRenderComponent(selectedValue);
  };
  return (
    <StyledDiv>
      <SelectBox items={options} handleSelectedItem={handleSelectedItem} />
      <Suspense fallback={<div>Loading...</div>}>
        {componentToRender(renderComponent)}
      </Suspense>
    </StyledDiv>
  );
};
export default Cars;
