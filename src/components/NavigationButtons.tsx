import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  disablePrevious: boolean;
  disableNext: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) => {
  return (
    <div className="absolute top-0 right-0 flex space-x-4 mt-1 mr-2">
      <button
        onClick={onPrevious}
        disabled={disablePrevious}
        className={`btn text-gray-600 p-2 rounded-full shadow-lg ${
          disablePrevious ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={onNext}
        disabled={disableNext}
        className={`btn text-gray-600 p-2 rounded-full shadow-lg ${
          disableNext ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default NavigationButtons;
