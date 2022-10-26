import { useState, createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const steps = ["Personal", "Workspace", "Usecase", "Final"];

  const handleClick = () => {
    let newStep = currentStep;
    newStep++;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <GlobalContext.Provider
      value={{ currentStep, setCurrentStep, steps, handleClick, userData, setUserData }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
