const CourseHeader = () => {
  return (
    <header className="bg-[#004AAD] h-[175px] text-white py-6 px-4 flex items-center justify-center text-center">
      <div>
        <h1 className="text-[20px] lg:text-[32px] font-semibold mb-1">
          Master Project{" "}
          <span className="text-[#ffa400] border-b-2 border-b-[#ffa400]">
            Management
          </span>
        </h1>
        <p className="text-[14px] lg:text-lg mt-[15px]">
          Master the skills to excel in freelance project management
        </p>
      </div>
    </header>
  );
};

export default CourseHeader;
