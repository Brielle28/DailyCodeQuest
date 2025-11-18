import { IoIosStarOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { PiSmileyAngry } from "react-icons/pi";
import { TbMoodWrrr } from "react-icons/tb";
import { TbMoodSmile } from "react-icons/tb";
import { TbMoodSmileBeam } from "react-icons/tb";
import { TbMoodSpark } from "react-icons/tb";
const StarRating = () => {
  const [star, setStar] = useState(0);

  const HandleToggle = (i) => {
    setStar(i);
  };

  return (
    <div className="flex flex-col-reverse items-start justify-start w-full min-h-screen bg-black md:flex-row">
      {/* Left section - Star rating */}
      <div className="w-full md:w-[60%] min-h-screen flex flex-col items-start justify-start p-5">
        <h1 className="text-[30px] md:text-[40px] font-bold text-[#63ad58]">
          Kindly Rate <i className="text-[#63ad58]">Daily Code Quest</i>
        </h1>
        <div className="flex items-center w-full gap-6 mt-10 sm:gap-10 md:gap-14">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              onClick={() => HandleToggle(i)}
              key={i}
              className="focus:outline-none"
            >
              {i <= star ? (
                <FaStar className="text-[40px] sm:text-[50px] md:text-[70px] text-[#63ad58] outline-[#63ad58]" />
              ) : (
                <IoIosStarOutline className="text-[40px] sm:text-[50px] md:text-[70px] text-[#63ad58]" />
              )}
            </button>
          ))}
        </div>

        {/* Review Texts */}
        <div className="flex flex-wrap gap-6 mt-8">
          {star == 1 ? (
            <hi className="flex flex-row items-center justify-center gap-3 font-bold text-red-600 text-[15px] md:text-[30px]">
              Very Bad
              <PiSmileyAngry className="" />
            </hi>
          ) : star == 2 ? (
            <h1 className="flex flex-row items-center justify-center gap-3 font-bold text-red-600 text-[15px] md:text-[30px]">
              {" "}
              bad
              <TbMoodWrrr />
            </h1>
          ) : star == 3 ? (
            <h1 className="flex flex-row items-center justify-center gap-3 font-bold text-yellow-600 text-[15px] md:text-[30px]">
              {" "}
              good <TbMoodSmile />
            </h1>
          ) : star == 4 ? (
            <h1 className="flex flex-row items-center justify-center gap-3 font-bold text-yellow-600 text-[15px] md:text-[30px]">
              {" "}
              very good
              <TbMoodSmileBeam />
            </h1>
          ) : star == 5 ? (
            <h1 className="flex flex-row items-center justify-center gap-3 font-bold text-green-600 text-[15px] md:text-[30px]">
              {" "}
              excellent
              <TbMoodSpark />
            </h1>
          ) : (
            <h1></h1>
          )}
        </div>
      </div>

      {/* Right section - Question */}
      <div className="w-full md:w-[40%] min-h-screen flex flex-col items-start justify-start border-b-2 md:border-b-0 md:border-l-2 border-[#63ad58] p-5">
        <h1 className="text-[24px] md:text-[30px] text-[#63ad58] font-bold mb-4">
          Question
        </h1>
        <div className="text-base leading-relaxed text-[white] md:text-lg">
          Create an interactive star rating component using React and Tailwind
          CSS.
          <br />
          <br />
          Requirements:
          <ul className="mt-2 ml-5 space-y-1 list-disc">
            <li>
              Display 5 stars using <code>&lt;IoIosStarOutline /&gt;</code> for
              inactive and <code>&lt;FaStar /&gt;</code> for active.
            </li>
            <li>Clicking a star activates it and all previous stars.</li>
            <li>Use a single state to manage selected stars.</li>
            <li>
              Display review texts like "Very Poor", "Good", etc., with emojis.
            </li>
            <li>Use Tailwind for layout and responsiveness.</li>
            <li>
              Make the layout responsive: stars on the left, question on the
              right (stacked on smaller screens).
            </li>
          </ul>
          <br />
          Example behavior: Clicking the 4th star should highlight stars 1 to 4
          and leave the 5th as outline.
        </div>
      </div>
    </div>
  );
};

export default StarRating;
