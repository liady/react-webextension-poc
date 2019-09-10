const React = require('react');
const ReactDOM = require('react-dom');

const container = document.createElement('div');
container.id = "raf-test";
document.body.appendChild(container);

ReactDOM.render(React.createElement('div', null, `Hello rAF`), container);