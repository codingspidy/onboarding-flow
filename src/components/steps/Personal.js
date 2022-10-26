import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import StepperControl from "../StepperControl";

const Personal = () => {
  const { currentStep, handleClick, userData, setUserData } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="w-full mt-14">
      <div className="text-center mb-12 space-y-2">
        <h3 className="text-[26px] font-semibold">Welcome! First things first...</h3>
        <p className="text-sm text-gray-500">
          You can always change them later.
        </p>
      </div>
      <div className="space-y-5 w-full max-w-xs mx-auto">
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-medium text-gray-700" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="text-[13px] rounded border border-gray-200 bg-white px-4 py-[10px] focus:outline-none"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Steve Jobs"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-medium text-gray-700" htmlFor="fullName">
            Display Name
          </label>
          <input
            className="text-[13px] rounded border border-gray-200 bg-white px-4 py-[10px] focus:outline-none"
            type="text"
            name="displayName"
            id="displayName"
            placeholder="Steve"
            onChange={handleChange}
          />
        </div>
        <StepperControl onClick={handleClick} lastStep={currentStep} />
      </div>
    </div>
  );
};

export default Personal;
