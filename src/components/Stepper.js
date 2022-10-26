import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          selected: true,
          completed: true,
        };
        count++;
      }

      //step pending
      else {
        newSteps[count] = {
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          completed: false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={"flex items-center w-full first:relative last:w-fit"}
      >
        <div
          className={`rounded-full text-xs font-medium transition duration-500 ease-in-out border h-8 w-8 flex items-center justify-center py-3  ${
            step.selected
              ? "bg-myPurple text-white font-medium border-myPurple "
              : "bg-white border-gray-300"
          }`}
        >
          {index + 1}
        </div>
        <div
          className={`-ml-[57px] relative -z-10 border-l border-t transition duration-500 ease-in-out  ${
            step.completed
              ? "border-myPurple flex-auto"
              : "border-gray-300 flex-1"
          }  `}
        ></div>
        <div className="w-10 h-8 bg-white absolute -left-10 top-0" />
      </div>
    );
  });

  return (
    <div className="w-[95%] max-w-[250px] mx-auto">
      <div className="-ml-8 p-4 flex justify-between items-center">
        {stepsDisplay}
      </div>
    </div>
  );
};
export default Stepper;
