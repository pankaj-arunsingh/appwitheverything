import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("app component", () => {
  test("renders learn react link", () => {
    const component = render(<App />);
    const selectElement = component.container.querySelector("select");
    expect(selectElement).toBeDefined();
  });
  test("renders volvo component by default", () => {
    const component = render(<App />);
    const defaultComponent = component.getByText("Volvo component");
    expect(defaultComponent).toBeDefined();
  });
  test("renders correct component when selected", () => {
    const component = render(<App />);
    const selectElement = component.container.querySelector("select");
    fireEvent.change(selectElement, {
      target: {
        value: "BMW",
      },
    });
    const selectedComponent = component.getByText("BMW component");
    expect(selectedComponent).toBeDefined();
    fireEvent.change(selectElement, {
      target: {
        value: "SAAB",
      },
    });
    const nextSelectedComponent = component.getByText("Saab component");
    expect(nextSelectedComponent).toBeDefined();
    fireEvent.change(selectElement, {
      target: {
        value: "mercedes",
      },
    });
    const lastSelectedComponent = component.getByText("Mercedes component");
    expect(lastSelectedComponent).toBeDefined();
    fireEvent.change(selectElement, {
      target: {
        value: "fakeCar",
      },
    });
    const volvoSelectedComponent = component.getByText("Volvo component");
    expect(volvoSelectedComponent).toBeDefined();
  });
});
