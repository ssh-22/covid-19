import React from "react";
import CountdownForm from "./CountdownForm";
import CountdownList from "./CountdownList";

const App = () => {
  return (
    <div className="App">
      <CountdownList />
      <br />
      <CountdownForm />
    </div>
  );
};

export default App;
