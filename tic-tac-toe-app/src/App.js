import React from "react";
import "./App.css";
import Board from "./Components/Board";
import "./Styles/box.css";
import "./Styles/board.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
