import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
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
  test("value is updated when different option is selected", () => {
    const handleChange = jest.fn();
    const component = render(
      <SelectBox items={options} handleSelectedItem={handleChange} />
    );
    const selectElement = component.container.querySelector("select");
    fireEvent.change(selectElement, {
      target: {
        value: "BMW",
      },
    });
    expect(handleChange.mock.calls).toHaveLength(1);
    expect(handleChange.mock.calls[0][0]).toBe("BMW");
  });
});
