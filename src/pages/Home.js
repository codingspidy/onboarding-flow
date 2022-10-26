import { useContext } from "react";
import Final from "../components/steps/Final";
import Personal from "../components/steps/Personal";
import Usecase from "../components/steps/Usecase";
import Workspace from "../components/steps/Workspace";
import Stepper from "../components/Stepper";
import { FireIcon } from "@heroicons/react/24/solid";
import GlobalContext from "../context/GlobalContext";

const Home = () => {
  const { currentStep, steps } = useContext(GlobalContext);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Personal />;
      case 2:
        return <Workspace />;
      case 3:
        return <Usecase />;
      case 4:
        return <Final />;
      default:
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col items-center px-4 sm:px-0">
        <h2 className="flex items-end -ml-3 text-2xl font-bold mb-10">
          <FireIcon className="h-8 text-myPurple" /> Eden
        </h2>
        <Stepper currentStep={currentStep} steps={steps} />
        {displayStep(currentStep)}
      </div>
    </div>
  );
};

export default Home;
