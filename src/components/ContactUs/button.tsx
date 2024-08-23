import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

type Props = {};

const RegistrationButton: React.FC<Props> = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <button className={`btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 ${showForm&&'collapse'} hover:border-indigo-700 text-white rounded-md`} onClick={handleClick}>Have a query?</button>
      {showForm && <RegistrationForm onClose={handleClose} />}
    </>
  );
};

export default RegistrationButton;
