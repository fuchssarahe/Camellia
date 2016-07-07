import { hashHistory } from 'react-router';
const React = require('react'),
      ErrorStore = require('../stores/errors_store'),
      TeaActions = require('../actions/tea_actions'),
      TeaConstants = require('../constants/tea_constants'),
      TeaStore = require('../stores/tea_store'),
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
      image: '',
      errors: ErrorStore.formErrors()
    }
  },

  componentWillMount: function () {
    this.errorListener = ErrorStore.addListener(this._onErrors);
    this.listener = TeaStore.addListener(this._onCreation)
  },

  _onErrors: function () {
    if (ErrorStore.form() === 'newTea') {
      this.setState({errors: ErrorStore.formErrors('newTea') });
    }
  },

  _onCreation: function () {
    const id = TeaStore.newestId()
    if (id !== null) {
      hashHistory.push( 'teas/' + id );
    }
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
    this.listener.remove();
  },

  _handleInput: function (event, property) {
    this.setState({[property]: event.target.value});
  },

  _handleImageInput: function (event) {
    this.setState({image: event.target.files[0]});
  },

  _handleSubmit: function (event) {
    event.preventDefault();
    TeaActions.createTea(this.state);
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
              <option hidden style={{display: 'none'}} >Select a type!</option>
              {
                TeaConstants.ALL_TYPES.map( (type) => {
                  return <option name={type} key={type}>{type}</option>;
                })
              }
            </select>
          </label>

          <label>Region
            <select onChange={(event) => this._handleInput(event, 'region')}>
              <option hidden style={{display: 'none'}}>Select a region!</option>
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
            <input type="number"
                   onChange={(event) => this._handleInput(event, 'temperature')}
                   value={this.state.temperature}
                   placeholder='80'/>
          </label>

          <label>Leaf Quantity (teaspoons per 8 ounces of liquid)
            <input type="number"
                   step="0.25"
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

          <label>Image
            <input type="file"
                   accept="image/*"
                   ref='image'
                   onChange={this._handleImageInput}/>
          </label>

          <input type="submit" value="Create Tea!" className="submit-input" />
        </form>
      </div>
    )
  }
});

module.exports = TeaForm;
