const React = require('react'),
      ErrorStore = require('../stores/errors_store'),
      TeaActions = require('../actions/tea_actions');

const TeaForm = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      tea_type: '',
      region: '',
      steep_time: '',
      temperature: '',
      leaf_quantity: '',
      leaf_density: '',
      retailer: '',
      errors: ErrorStore.all()
    }
  },

  componentWillMount: function () {
    console.log('mounting form');
    this.errorListener = ErrorStore.addListener(this._onErrors);
  },

  _onErrors: function () {
    this.setState({errors: ErrorStore.all()})
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
  },

  _handleInput: function (property) {
    this.setState({[property]: event.target.value})
  },

  _handleSubmit: function () {
    TeaActions.createTea(this.state);
    // window.location.history
  },

  render: function () {
    return (
      <div>
        <p>hellow from form</p>
        <form onSubmit={this._handleSubmit} >
          <label>name:
            <input type="text" value={this.state.name} />
          </label>

          <label>description:
            <input type="text" value={this.state.description} />
          </label>

          <label>tea_type:
            <input type="text" value={this.state.tea_type} />
          </label>

          <label>region:
            <input type="text" value={this.state.region} />
          </label>

          <label>steep_time:
            <input type="text" value={this.state.steep_time} />
          </label>

          <label>temperature:
            <input type="text" value={this.state.temperature} />
          </label>

          <label>leaf_quantity:
            <input type="text" value={this.state.leaf_quantity} />
          </label>

          <label>leaf_density:
            <input type="text" value={this.state.leaf_density} />
          </label>

          <label>retailer:
            <input type="text" value={this.state.retailer} />
          </label>

          <input type="submit" value="Create Tea!" />
        </form>
      </div>
    )
  }
});

module.exports = TeaForm;
