import React, { useState } from 'react';

const CheckBoxImage = ({ imageSrc, alt, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckBoxChange}
        className="checkbox-image"
      />
      <label htmlFor="checkbox" style={{ backgroundImage: `url(${imageSrc})` }}></label>
      <span>{alt}</span>
    </div>
  );
};

export default CheckBoxImage;
