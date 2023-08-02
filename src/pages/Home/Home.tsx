import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import RoomNumber from "../../components/RoomNumber";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        {/* new booking btn */}
        <div className="text-3xl font-semibold">Home</div>
        <Link
          to="/new-booking"
          className="bg-blue-900 text-white px-20 py-2 rounded-md mb-2 font-semibold capitalize flex items-center gap-2"
        >
          <span>
            <FaPlus />
          </span>
          New Booking
        </Link>
      </div>
      <div className="grid grid-cols-12 mt-5">
        {/* room number part */}
        <RoomNumber />
        {/* current selection part */}
        <div className="col-span-3 bg-gray-200 p-4 rounded-sm ml-4">
          <h3 className="text-lg capitalize font-semibold mb-5">
            Current Selection
          </h3>
          <div className="flex justify-between text-md">
            <div className="flex items-center">
              <span className="cursor-pointer">
                <AiOutlineClose />
              </span>
              <div className="mx-2 font-semibold">
                Super Deluxe Tripel (Non-AC)
              </div>
            </div>
            <div className="font-semibold">206</div>
          </div>

          {/* edit btn  */}
          <div className="mt-72">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md w-full mb-2 font-semibold">
              Edit Booking
            </button>
            {/* view booking btn */}
            <button className="w-full px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-md hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors duration-300 font-semibold">
              View Booking Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
