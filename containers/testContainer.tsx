import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TestStore from "../stores/testStore";

interface Props {
  counter: counterStore;
}

@inject("testStore")
@observer
class TestContainer extends Component<Props, {}> {
  render() {
    const { testStore } = this.props;
    return (
      <div>
        {testStore.test}
      </div>
    );
  }
}

export default TestContainer;