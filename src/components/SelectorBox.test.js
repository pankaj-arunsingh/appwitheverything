import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SelectBox from "./SelectBox";

describe("SelectBox tests", () => {
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
  test("selectbox is rendered", () => {
    const component = render(<SelectBox items={options} />);
    expect(component).toBeDefined();
  });
});
