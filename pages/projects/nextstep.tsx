import React, { useState } from "react";

function NextStep() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step < 4 ? step + 1 : 4);
  const prevStep = () => setStep(step > 1 ? step - 1 : 1);

  return (
    <div className="project nextstep">
      <h1>Next Step</h1>
      <div className="container">
        <div className={`bar w-${step - 1}-3`}></div>
        <div className="steps">
          <Step id={1} currentStep={step} />
          <Step id={2} currentStep={step} />
          <Step id={3} currentStep={step} />
          <Step id={4} currentStep={step} />
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => prevStep()} disabled={step === 1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button onClick={() => nextStep()} disabled={step === 4}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Step({ id, currentStep }) {
  return <div className={id === currentStep ? `active` : ``}>{id}</div>;
}

export default NextStep;
