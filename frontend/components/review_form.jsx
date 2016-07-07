const React = require('react');

const ReviewForm = React.createClass({
  getInitialState: function () {
    return ({
      tea_id: this.props.id,
      rating: '',
      body: '',
      steep_time: '',
      leaf_quantity: '',
      temperature: '',
      leaf_density: '',
      ratingClass: 'rating-selector-5',
    })

  },

  _handleSubmit: function () {

  },

  _handleInput: function (event, property, rating) {
    if (property === 'rating') {
      this.setState({rating: rating});
      return;
    }
    this.setState({[property]: event.target.value});
  },

  _updateClass: function (event, rating) {
    if (rating === '') {
      rating = 5
    }
    this.setState({ratingClass: 'rating-selector-' + rating})
  },


  render: function () {

    let ratingSelector= (
      <div className='rating-container' >
        <div className={'rated--by-current-user rating-selector ' + this.state.ratingClass}>
        </div>
        <ul className={'rating-selection-fields'} onMouseOut={event => this._updateClass(event, this.state.rating)}>
          <li className='li1' onMouseEnter={(event) => this._updateClass(event, 1)} onClick={(event) => this._handleInput(event, 'rating', 1)}></li>
          <li className='li2' onMouseEnter={(event) => this._updateClass(event, 2)} onClick={(event) => this._handleInput(event, 'rating', 2)}></li>
          <li className='li3' onMouseEnter={(event) => this._updateClass(event, 3)} onClick={(event) => this._handleInput(event, 'rating', 3)}></li>
          <li className='li4' onMouseEnter={(event) => this._updateClass(event, 4)} onClick={(event) => this._handleInput(event, 'rating', 4)}></li>
          <li className='li5' onMouseEnter={(event) => this._updateClass(event, 5)} onClick={(event) => this._handleInput(event, 'rating', 5)}></li>
        </ul>
        <div className='height-giver' />
      </div>
    )
    return (
      <form onSubmit={this._handleSubmit} className='review_form'>
        <label>Rating
          {ratingSelector}
        </label>

        <label>Review
          <textarea onChange={(event) => this._handleInput(event, 'body')}
                    placeholder='Wow! What a yummy tea!'
                    value={this.state.body}></textarea>
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
      </form>
    )
  }
});


module.exports = ReviewForm;
