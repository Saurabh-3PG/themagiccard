import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "./index";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Header", () => {
  const onChange = jest.fn();
  act(() => {
    render(<Header componentID="itisheader" />, container);
  });
  expect(container).toBeTruthy();

  const link = document.querySelector("a>h1");
  expect(link.innerHTML).toBe("Cards");
  act(() => {
    link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(0);
  expect(link.innerHTML).toBe("Cards");
});
