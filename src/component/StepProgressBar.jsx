import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

const StepProgressBar = (props) => {
  return (
    <ProgressBar
      percent={((props.step - 0.5) * 100) / 3}
      filledBackground="indigo">
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? 'completed' : null}`}>1</div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? 'completed' : null}`}>2</div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? 'completed' : null}`}>3</div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? 'completed' : null}`}>4</div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default StepProgressBar;
