import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { /*shallow,*/ mount } from "enzyme";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});

it("Shows the correct title", () => {
    const title = mount(<App />);
    expect(title.find("Title").text()).toEqual("TypeTris");
});
