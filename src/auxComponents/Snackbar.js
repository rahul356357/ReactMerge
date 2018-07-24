import React from 'react';
import { bool, object } from 'prop-types';
import './Snackbar.css';

const SnackBar = ({ open, message }) => {
  let t = 'show';
  setTimeout(() => {
    t = '';
  }, 3000);
  return (
    <div id="snackbar_selene" className={open ? t : ''} > {message} </div>
  );
};

SnackBar.propTypes = {
  open: bool,
  message: object,
  // success: bool,
  // failure: bool,
};
export default SnackBar;
