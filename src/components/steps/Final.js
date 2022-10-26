import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Final = () => {
  return (
    <div className="mt-14">
      <div className="text-center flex flex-col items-center">
        <CheckCircleIcon className="h-16 w-16 text-myPurple mb-7" />
        <h3 className="text-[26px] font-semibold mb-2">Congratulations, Eren!</h3>
        <p className="text-sm text-gray-500">
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>
      <a
        className="flex justify-center w-full max-w-xs mx-auto bg-myPurple rounded-md py-3 text-sm text-white mt-8"
        href="/"
      >
        Launch Eden
      </a>
    </div>
  );
};

export default Final;
