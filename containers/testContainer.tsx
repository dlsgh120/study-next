import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TestStore from "../store/testStore";

interface Props {
  testStore?:TestStore;
}

@inject("testStore")
@observer
class TestContainer extends Component<Props, {}> {
  private testStore = this.props.testStore as TestStore;
  render() {
    
    return (
      <div>
        {this.testStore.test}
      </div>
    );
  }
}

export default TestContainer;