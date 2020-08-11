import React, { Component } from "react";
import Cardcomponent from "./Cardcomponent";

class Vacancies extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: "inline-flex" }}>
        <Cardcomponent
          createdDate="12.04.2020"
          viewsNum="236"
          appReceivedNum="16"
        />
        <Cardcomponent
          createdDate="12.04.2020"
          viewsNum="198"
          appReceivedNum="23"
        />
        <Cardcomponent
          createdDate="12.04.2020"
          viewsNum="349"
          appReceivedNum="31"
        />
      </div>
    );
  }
}

export default Vacancies;
