import React from "react";

const ReactCreateElement = () => React.createElement('h1', {}, 'React.createElement method');

class ReactComponent extends React.Component {
  render() {
    return (
        <h1>React.Component method</h1>
    );
  }
}

class ReactPureComponent extends React.PureComponent {
  render() {
    return (
        <h1>React.PureComponent method</h1>
    );
  }
}

const FunctionalComponent = () => <h1>Functional Component method</h1>

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ReactCreateElement />
      <ReactComponent />
      <ReactPureComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;