import React from 'react';
import PropTypes from 'prop-types';

function OptionCard({ text, isSelected, onSelect }) {
  const handleOptionSelect = () => {
    onSelect(text);
  };

  return (
    <div
      className={`option-card ${isSelected ? 'selected' : ''}`}
      onClick={handleOptionSelect}
    >
      <input type="checkbox" checked={isSelected} readOnly />
      {text}
    </div>
  );
}
OptionCard.propTypes = {
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default OptionCard;

