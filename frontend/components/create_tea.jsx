const React = require('react'),
      TeaForm = require('./tea_form');

const CreateTea = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <div className='container-basket'>
        <div className='standalone-tea-form'>
          <h1>Add a new tea to Camellia!</h1>
          <h2>As soon as you add a new tea, the tea will belong to the Camellia Tea Shelf. You'll have the ability to review the tea or add it to your personal Tea Shelf once it has been added here!</h2>
          <TeaForm />
        </div>
        </div>
      </div>
    )
  }
});

module.exports = CreateTea;
