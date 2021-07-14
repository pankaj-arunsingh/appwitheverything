import React from "react";
import { render, cleanup } from "@testing-library/react";

import BMW from "./BMW";

describe("BMW tests", () => {
  test("BMW returns loading screen", () => {
    const component = render(<BMW />);
    const loadingElement = component.getByText(
      "I am a BMW car and loading Notes"
    );
    expect(loadingElement).toBeInTheDocument();
    cleanup();
  });
  test("BMW returns notes when fecth operation is done", async () => {
    const component = render(<BMW />);
    const listNode = await component.findByTestId("list");
    expect(listNode).toBeInTheDocument();

    cleanup();
  });
});
