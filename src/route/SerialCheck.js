import React from "react";
import "../styles/SerialInput.css";

class SerialCheck extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    return (
      <form>
        <label>
          <h4>S/N</h4>
          <input type="text" name="inputSn" />
        </label>

        <input id="checkBtn" type="submit" value="조회" />
      </form>
    );
  }
}
export default SerialCheck;
