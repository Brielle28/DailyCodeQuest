const Template = () => {
  return (
    <div className="flex flex-row items-start justify-start w-full min-h-screen bg-white">
      <div className="w-[60%] min-h-screen flex flex-col items-start justify-start p-5">
        implementation here
      </div>
      {/* question */}
      <div className="w-[40%] min-h-screen flex flex-col items-start justify-start border-l-2 border-blue-500 p-5">
        <h1 className="text-[30px] text-blue-500 font-bold"> Question </h1>
        <h1> Question here </h1>
      </div>
    </div>
  );
};

export default Template;
