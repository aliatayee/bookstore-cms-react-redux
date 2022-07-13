import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import store from './redux/configureStore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;
