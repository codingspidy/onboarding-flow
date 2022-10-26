import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { CardSelector } from "../form-components";
import StepperControl from "../StepperControl";

const Usecase = () => {
  const { currentStep, handleClick } = useContext(GlobalContext);

  return (
    <div className="mt-14">
      <div className="text-center mb-10 space-y-2">
        <h3 className="text-[26px] font-semibold">
          How are you planning to use Eden?
        </h3>
        <p className="text-sm text-gray-500">
          We'll streamline your experience accordingly.
        </p>
      </div>
      <div className="w-fit mx-auto">
        <CardSelector />
        <StepperControl onClick={handleClick} lastStep={currentStep} />
      </div>
    </div>
  );
};

export default Usecase;
