const React = require('react');


const Errors = React.createClass({
  render: function () {
    let errors = <ul className='errors'>{
      parseErrors(this.props.errors)
    }</ul>;

    if (Object.keys(this.props.errors).length === 0) {
      errors = '';
    }

    return (
      <div>
        {errors}
      </div>
    )
  }
});

function parseErrors(errors) {
  return Object.keys(errors).map( (field) => {
    const parsedErrorsForField = errors[field].join(", ")
    if (field === 'base' || field === 'user_id') {
      return <li key={field}>{'Oops! ' + parsedErrorsForField[0].toUpperCase() + parsedErrorsForField.slice(1) + '!'}</li>
    };

    return <li key={field}>{'Oops! ' + field[0].toUpperCase() + field.slice(1) + ' ' + parsedErrorsForField + '!'}</li>;
  })
}

module.exports = Errors;
