import React from 'react';

const Keypad = () => {
  const handleChange = (e) => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input
        type="password"
        onChange={handleChange}
        placeholder="Enter Password"
      />
    </div>
  );
};

export default Keypad;
