import { Link, hashHistory } from 'react-router';
const React = require('react'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      SearchBar = require('./search_bar');

const App = React.createClass({
  getInitialState: function () {
    return {currentUser: SessionStore.currentUser()}
  },

  componentDidMount: function () {
    this.listener = SessionStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({currentUser: SessionStore.currentUser()})
  },

  _navToSignup: function () {
    hashHistory.push('/signup');
  },

  _navToLogin: function () {
    hashHistory.push('/login');
  },

  _navToDashBoard: function () {
    hashHistory.push('/dashboard');
  },

  _navToCreateTea: function () {
    hashHistory.push('/teas/new')
  },

  _navToExplore: function () {
    hashHistory.push('/teas/?tea=')
  },

  _logout: function () {
    SessionActions.logout();
    hashHistory.push('/');
  },

  _loginGuest: function () {
    SessionActions.login({username: 'guest', password: '123456'});
  },

  render: function () {

    let buttons = "";
    if (SessionStore.isUserLoggedIn()) {
      buttons =
        <ul className='auth-buttons'>
          <li><button onClick={this._navToExplore} className='minor-button'>Explore</button></li>
          <li><button onClick={this._navToDashBoard} className='minor-button'>Dashboard</button></li>
          <li><button onClick={this._navToCreateTea} className='minor-button'>Add New Tea</button></li>
          <li><button onClick={this._logout}>Logout!</button></li>
        </ul>
    } else {
      buttons =
      <ul className='auth-buttons'>
        <li><button onClick={this._navToSignup} className="minor-button">Sign Up</button></li>
        <li><button onClick={this._navToLogin} className="minor-button">Login</button></li>
        <li><button onClick={this._loginGuest}>Demo Acount</button></li>
      </ul>
    }

    let searchBar = <div></div>
    const url = window.location.hash
    if (url.length > 12 && url.includes('login') === false && url.includes('signup') === false) {
      searchBar = <SearchBar/>
    }

    return (
      <div>
        <div className="header-holder">
          <header className="site-nav">
          <Link to="/"><img src="https://raw.githubusercontent.com/fuchssarahe/Camellia/master/app/assets/images/camellia_logo.png" alt="Camellia Logo" /></Link>
          {searchBar}
          {buttons}
          </header>
        </div>
        {this.props.children}
        <footer className="footer">
          <small>Want more information on Camellia? Check out the Github repositories for both the site and its creator:</small>
          <ul className='footer-links'>
            <li><a href='https://github.com/fuchssarahe/Camellia' >Camellia Repo</a></li>
            <li><a href='https://github.com/fuchssarahe' >Creator Github</a></li>
          </ul>
        </footer>
      </div>)
  }
});

module.exports = App;
