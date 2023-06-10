import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export const ProgressBar = () => {
  return (
    <div className='stepper'>
      <Stepper
        activeStep={6}
        alternativeLabel
        sx={{ width: '50%', fontSize: '2rem' }}
      >
        {steps.map((label, index) => (
          <Step>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
