import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownMenuProps {
  options: Option[];
  onSelect: (selectedOption: Option) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label :       <FontAwesomeIcon icon={faCaretDown} />}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Example usage:
const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Dropdown: React.FC = () => {
  const handleSelect = (selectedOption: Option) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
      <DropdownMenu options={options} onSelect={handleSelect} />
    </div>
  );
};

export default Dropdown;