const React = require('react'),
      ErrorStore = require('../stores/errors_store'),
      TeaActions = require('../actions/tea_actions'),
      TeaConstants = require('../constants/tea_constants'),
      Errors = require('./errors');

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

  _handleSubmit: function (event) {
    event.preventDefault();
    TeaActions.createTea(this.state);
    // window.location.history
  },

  render: function () {
    return (
      <div>
        <Errors errors={this.state.errors} />
        <form onSubmit={this._handleSubmit} className="tea_form">
          <label>Name
            <input type="text"
                   onChange={(event) => this._handleInput(event, 'name')}
                   value={this.state.name}
                   placeholder='Dragonwell'/>
          </label>

          <label>Description
            <textarea onChange={(event) => this._handleInput(event, 'description')}
                      placeholder='Dragonwell is a variety of pan-roasted green tea...'
                      value={this.state.description}></textarea>
          </label>

          <label>Type
            <select onChange={(event) => this._handleInput(event, 'tea_type')}>
              <option>Please select a tea type!</option>
              {
                TeaConstants.ALL_TYPES.map( (type) => {
                  return <option name={type} key={type}>{type}</option>;
                })
              }
            </select>
          </label>

          <label>Region
            <select onChange={(event) => this._handleInput(event, 'region')}>
              <option>Please select a region!</option>
              {
                TeaConstants.ALL_REGIONS.map( (region) => {
                  return <option name={region} key={region}>{region}</option>;
                })
              }
            </select>
          </label>

          <label>Steep Time (in minutes)
            <input type="number"
                   step="0.25"
                   onChange={(event) => this._handleInput(event, 'steep_time')}
                   value={this.state.steep_time}
                   placeholder='0'/>
          </label>

          <label>Temperature (in degrees Celcius)
            <input type="text"
                   onChange={(event) => this._handleInput(event, 'temperature')}
                   value={this.state.temperature}
                   placeholder='80'/>
          </label>

          <label>Leaf Quantity (teaspoons per 8 ounces of liquid)
            <input type="float"
                   onChange={(event) => this._handleInput(event, 'leaf_quantity')}
                   value={this.state.leaf_quantity}
                   placeholder='1.5'/>
          </label>

          <label>Leaf Density (grams per ounce)
            <input type="number"
                   onChange={(event) => this._handleInput(event, 'leaf_density')}
                   value={this.state.leaf_density}
                   placeholder='30'/>
          </label>

          <label>Retailer
            <input type="text"
                   onChange={(event) => this._handleInput(event, 'retailer')}
                   value={this.state.retailer}
                   placeholder='Louisville Tea Company'/>
          </label>

          <input type="submit" value="Create Tea!" className="submit-input" />
        </form>
      </div>
    )
  }
});

module.exports = TeaForm;
