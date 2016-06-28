const React = require('react');

const App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hellow from app</h1>
        {this.props.children}
      </div>)
  }
});

module.exports = App;
