import React from 'react';
import './App.css';
import PropTypes from "prop-types";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
  return (
      <>
          {props.children}
      </>
  );
};

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
export default App;
