import { UserIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

export const CardSelector = () => {
  const [selected, setSelected] = useState(true);
  const { setUserData } = useContext(GlobalContext);

  useEffect(() => {
    setUserData((prev) => ({ ...prev, edenUsecase: "For myself" }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setSelected((prev) => !prev);
  };

  return (
    <div onChange={handleChange} className="flex justify-center gap-6">
      <label>
        <input
          type="radio"
          defaultChecked={true}
          name="edenUsecase"
          value="For myself"
          className="hidden"
        />
        <div
          className={`cursor-pointer w-40 px-4 py-5 border rounded ${
            selected ? "border-myPurple" : "border-gray-200"
          }`}
        >
          <UserIcon
            className={`h-6 mb-4 ${
              selected ? "text-myPurple" : "text-gray-800"
            }`}
          />
          <div className="text-sm text-gray-800 font-bold mb-2">For myself</div>
          <div className="text-xs text-gray-500">
            Write better. Think more clearly. Stay organised.
          </div>
        </div>
      </label>
      <label>
        <input
          type="radio"
          name="edenUsecase"
          value="With team"
          className="hidden"
        />
        <div
          className={`cursor-pointer w-40 px-4 py-5 border rounded ${
            !selected ? "border-myPurple" : "border-gray-200"
          }`}
        >
          <UserGroupIcon
            className={`h-6 mb-4 ${
              !selected ? "text-myPurple" : "text-gray-800"
            }`}
          />
          <div className="text-sm text-gray-800 font-bold mb-2">
            With my team
          </div>
          <div className="text-xs text-gray-500">
            Wikis, docs, tasks & projects, all in one place.
          </div>
        </div>
      </label>
    </div>
  );
};
