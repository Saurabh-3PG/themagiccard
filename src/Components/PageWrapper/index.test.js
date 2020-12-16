import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PageWrapper from "./index";

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

it("PageWrapper", () => {
  act(() => {
    render(<PageWrapper componentID={'PageWrappertest'} footerMiddleChild={<hr/>} searchHandler={()=>{}} children={<hr/>}  />, container);
  });
  expect(container).toBeTruthy();
});