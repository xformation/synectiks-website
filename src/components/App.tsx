import * as React from "react";
import "./App.css";
import Sliders from "./slider/sliders";
import "../components/slider/slider.css";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
class App extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="container-fluid">
        {/* <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div> */}
        {/* <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
          </div> */}
        <div>{/* <Sliders /> */}</div>
      </div>
      // </div>
    );
  }
}

export default App;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
