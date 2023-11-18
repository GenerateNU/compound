import React, { useState } from 'react';

interface Option {
  id: number;
  label: string;
}

interface CircleButtonChoiceProps {
  onSelect: (selectedOption: Option) => void;
}

const CircleButtonChoice: React.FC<CircleButtonChoiceProps> = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  const options: Option[] = [
    { id: 1, label: 'Single' },
    { id: 2, label: 'Married filing jointly' },
    { id: 3, label: 'Married filing separately' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
      {options.map((option) => (
        <label key={option.id} className="flex items-center space-x-2 cursor-pointer w-full max-w-xs">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-green-500 "
            checked={selectedOption?.id === option.id}
            onChange={() => handleOptionSelect(option)}
          />
          <span className="text-gray-800">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CircleButtonChoice;