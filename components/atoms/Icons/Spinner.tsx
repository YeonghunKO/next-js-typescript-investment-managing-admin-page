import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Spinner = ({ ...props }) => {
  return <FaSpinner className="spinner" {...props} />;
};

export default Spinner;
