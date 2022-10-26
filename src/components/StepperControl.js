const StepperControl = ({ onClick }) => {
    return (
        <button className="w-full bg-myPurple rounded-md py-3 text-sm text-white mt-6" onClick={onClick}>
           Create Workspace
        </button>
    )
}

export default StepperControl;