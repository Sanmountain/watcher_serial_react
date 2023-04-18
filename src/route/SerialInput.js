import React from "react";
import "../styles/SerialInput.css";

class SerialInput extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 1,
    };
  }

  render() {
    return (
      <form>
        <label>
          <h4>S/N</h4>
          <input type="text" name="inputSn" />
        </label>
        <label>
          <h4>점소코드</h4>
          <input type="text" name="inputCode" />
        </label>
        <label>
          <h4>업체</h4>
          <select>
            <option value="logen">로젠</option>
            <option value="hangin">한진</option>
          </select>
        </label>
        <input id="submitBtn" type="submit" value="시리얼 등록" />
      </form>
    );
  }
}
export default SerialInput;
