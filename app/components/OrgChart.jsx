// components/OrgChart.jsx
const OrgChart = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-5xl font-bold">
          Company Chart
        </h2>
        <span className="block w-20 h-1 bg-lime-500 mx-auto mt-3 mb-4 rounded dark:text-white"></span>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center dark:text-gray-300 mb-12 font-sans">
          At NOVA Inc. Construction, our organizational structure is designed to
          ensure efficiency, accountability, and high-quality project delivery.
          At the top, CEO/Managing Director provides strategic leadership,
          supported by a management team overseeing key functions. Our structure
          emphasizes clear communication and smooth workflow across all levels.
          From operations manager and engineers to site supervisors and foremen.
        </p>
      {/* CEO */}
      <div className="bg-lime-500 text-white font-bold px-6 py-3 rounded-lg shadow-md text-center sm:text-sm md:text-lg lg:text-xl">
        CEO/ Managing Director
      </div>

      {/* First level */}
      <div className="flex justify-center mt-6 space-x-2 sm:space-x-2 md:space-x-10">
        <div className="flex flex-col items-center">
          <div className="bg-lime-500 text-white font-bold px-4 py-2 rounded-lg shadow-md text-center">
            <p className="sm:text-sm">1- Operation Department</p>
          </div>
          <div className="mt-6 bg-lime-500 text-white px-3 py-1 rounded shadow text-center">
            Officer/ Executive
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-lime-500 text-white font-bold px-4 py-2 rounded-lg shadow-md text-center">
            2- Finance Department
          </div>
          <div className="mt-6 bg-lime-500 text-white px-3 py-1 rounded shadow text-center">
            Officer/ Accountant
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-lime-500 text-white font-bold px-4 py-2 rounded-lg shadow-md text-center">
            3- Eng Department 
          </div>
          <div className="mt-6 bg-lime-500 text-white px-3 py-1 rounded shadow text-center">
            Officer/ Executive
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
