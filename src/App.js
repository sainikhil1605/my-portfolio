import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ReactGA from "react-ga4";

ReactGA.initialize("G-3YK2M8YSK0");
function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
