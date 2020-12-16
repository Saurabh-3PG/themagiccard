import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import MaxWidth from "./index";

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

it("MaxWidth", () => {
  act(() => {
    render(<MaxWidth componentID="itisheader" children={<hr/>}  />, container);
  });
  expect(container).toBeTruthy();
});