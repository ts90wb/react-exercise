
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ComponentApp from './comment-app/CommentApp'
ReactDOM.render(<ComponentApp/>, document.getElementById("root"));
registerServiceWorker();
