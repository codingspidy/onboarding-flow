import { useContext, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";
import StepperControl from "../StepperControl";

const Workspace = () => {
  const { currentStep, handleClick, setUserData } =
    useContext(GlobalContext);
  const urlRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleURLChange = (e) => {
    const defaultURL = urlRef.current.defaultValue;
    const workspaceURL = e.target.name;
    const value = defaultURL + e.target.value;
    setUserData((prev) => ({ ...prev, [workspaceURL]: value }));
  };

  return (
    <div className="w-full mt-14">
      <div className="text-center mb-12 space-y-2">
        <h3 className="text-[26px] font-semibold">
          Let's set up a home for all your work
        </h3>
        <p className="text-sm text-gray-500">
          You can always create another workspace later.
        </p>
      </div>
      <div>
        <div className="space-y-5 w-full max-w-[350px] mx-auto">
          <div className="flex flex-col gap-1">
            <label
              className="text-[13px] font-medium text-gray-700"
              htmlFor="workspaceName"
            >
              Workspace Name
            </label>
            <input
              className="text-[13px] rounded border border-gray-200 bg-white px-4 py-[10px] focus:outline-none"
              type="text"
              name="workspaceName"
              id="workspaceName"
              placeholder="Eden"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-gray-700" htmlFor="workspaceURL">
              Workspace URL{" "}
              <span className="text-gray-300">(optional)</span>
            </label>
            <div className="flex">
              <input
                className="w-[135px] pointer-events-none text-[13px] rounded-l border border-gray-200 bg-gray-100 text-gray-600 px-4 py-[10px] focus:outline-none"
                type="url"
                defaultValue="www.eden.com/"
                id="workspaceURL"
                name="workspaceURL"
                placeholder="Example"
                ref={urlRef}
              />
              <input
                className="w-full text-[13px] rounded-r border-t border-r border-b border-gray-200 bg-white px-4 py-[10px] focus:outline-none"
                type="url"
                id="workspaceURL"
                name="workspaceURL"
                placeholder="Example"
                onChange={handleURLChange}
              />
            </div>
          </div>
          <StepperControl onClick={handleClick} lastStep={currentStep} />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
