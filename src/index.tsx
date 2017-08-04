import * as React from "react";
import * as ReactDOM from "react-dom";
import RegisterServiceWorker from "./registerServiceWorker";
import App from "./App/App";

ReactDOM.render(<App />, document.getElementById("root"));
RegisterServiceWorker();
