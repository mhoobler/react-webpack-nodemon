import React from "react";
import axios from "axios";

import "./style.css";

const App: React.FC = () => {
  axios
    .get("/test")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return (
    <div>
      <h1> Hello World!! </h1>
    </div>
  );
};

export default App;
