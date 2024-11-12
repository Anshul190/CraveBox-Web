function Shimmer(){
    return (
        <div className="bg-gray-900 flex flex-wrap gap-4 p-4 ">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-[215px]  h-80 bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-40 bg-gray-600 rounded-t-lg mb-4"></div>
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                <div className="h-6 bg-gray-600 rounded w-1/3"></div>
              </div>
            </div>
          ))}
      </div>
    );
  }

export default Shimmer;