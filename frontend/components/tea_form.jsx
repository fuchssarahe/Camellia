const React = require('react'),
      ErrorStore = require('../stores/errors_store'),
      TeaActions = require('../actions/tea_actions');

const TeaForm = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      tea_type: '',
      description: '',
      region: '',
      steep_time: '',
      temperature: '',
      leaf_quantity: '',
      leaf_density: '',
      retailer: '',
      errors: ErrorStore.formErrors()
    }
  },

  componentWillMount: function () {
    console.log('mounting form');
    this.errorListener = ErrorStore.addListener(this._onErrors);
  },

  _onErrors: function () {
    if (ErrorStore.form() === 'newTea') {
      this.setState({errors: ErrorStore.formErrors('newTea') });
    }
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
  },

  _handleInput: function (event, property) {
    this.setState({[property]: event.target.value})
  },

  _handleSubmit: function () {
    TeaActions.createTea(this.state);
    // window.location.history
  },

  render: function () {
    return (
      <form onSubmit={this._handleSubmit} className="tea_form">
        <label>Name:
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'name')}
                 value={this.state.name}
                 placeholder='Dragonwell'/>
        </label>

        <label>Description:
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'description')}
                 value={this.state.description}
                 placeholder='Dragonwell is a variety of pan-roasted green tea...'/>
        </label>

        <label>Type:
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'tea_type')}
                 value={this.state.tea_type}
                 placeholder='Green'/>
        </label>

        <label>Region:
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'region')}
                 value={this.state.region}
                 placeholder='China'/>
        </label>

        <label>Steep Time (in minutes):
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'steep_time')}
                 value={this.state.steep_time}
                 placeholder=''/>
        </label>

        <label>Temperature (in Celcius):
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'temperature')}
                 value={this.state.temperature}
                 placeholder='80'/>
        </label>

        <label>Leaf Quantity (teaspoons per 8 ounces of liquid):
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'leaf_quantity')}
                 value={this.state.leaf_quantity}
                 placeholder='Leaf Quantity'/>
        </label>

        <label>Leaf Density (grams per ounce):
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'leaf_density')}
                 value={this.state.leaf_density}
                 placeholder='Leaf Density'/>
        </label>

        <label>Retailer:
          <input type="text"
                 onChange={(event) => this._handleInput(event, 'retailer')}
                 value={this.state.retailer}
                 placeholder='Retailer'/>
        </label>

        <input type="submit" value="Create Tea!" />
      </form>
    )
  }
});

module.exports = TeaForm;
