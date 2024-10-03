import React from 'react';

const steps = ['Điền thông tin', 'Thanh toán & Hoàn tất'];

const StepsHeader = ({ activeStep = 0 }: { activeStep?: number }) => {
  return (
    <div className='flex items-center space-x-8'>
      {steps.map((step, index) => (
        <>
          <div key={index} className='flex items-center space-x-3'>
            <span
              className={`w-5 h-5 rounded-full ${
                index <= activeStep ? 'bg-primary' : 'bg-gray-400'
              } text-white flex justify-center items-center text-xs font-light`}
            >
              {index + 1}
            </span>
            <span
              className={`${
                index <= activeStep ? 'text-primary' : 'text-gray-400'
              } text-sm`}
            >
              {step}
            </span>
          </div>
          {index !== steps.length - 1 && (
            <div
              key={index + 'line'}
              className={`${
                index < activeStep ? 'bg-primary' : 'bg-gray-400'
              } w-12 h-0.5`}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default StepsHeader;
