import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
const allFeedback = [
  {
    text: "CozyAid made it so simple to donate and help those in need. I love how transparent and efficient the process is!",
    name: "- Sarah Rahman",
  },
  {
    text: "Thanks to CozyAid, I could easily contribute clothes for the winter. Their platform is amazing!",
    name: "- Ahmed Hasan",
  },
  {
    text: "I volunteered with CozyAid, and the impact we made was truly heartwarming. Highly recommend getting involved!",
    name: "- Nusrat Jahan",
  },
  {
    text: "The campaigns are well-organized, and it feels great to know my donations are making a real difference!",
    name: "- Maria Akter",
  },
  {
    text: "I’ve never seen such a user-friendly donation platform. It’s an excellent way to contribute to a meaningful cause.",
    name: "- Tanvir Hossain",
  },
];

function WhatPeoapleSay() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isShowMore, setIsShowMore] = useState(true);

  useEffect(() => {
    setFeedbacks(allFeedback.slice(0, 3));
  }, []);

  const showMoreBtnHandler = () => {
    setIsShowMore((prev) => !prev);

    setFeedbacks(
      isShowMore
        ? allFeedback.slice(0, allFeedback.length)
        : allFeedback.slice(0, 3)
    );
  };

  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="md:text-4xl text-2xl font-bold text-center text-gray-800 dark:text-gray-400 mb-8 lg:w-5/12 md:w-9/12 mx-auto">
          What People Say About <span className="text-myPrimary">CozyAid</span>
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {feedbacks?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-black/20 p-6  shadow-md rounded-sm flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-600 dark:text-gray-500 mb-4">
                {testimonial.text}
              </p>
              <h4 className="text-gray-800 dark:text-gray-400 font-semibold">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-7" onClick={showMoreBtnHandler}>
          <button className="bg-myPrimary text-white  font-bold py-2 px-3 text-xs hover:bg-myPrimary/80 active:scale-95 rounded-sm  transition">
            {isShowMore ? "Show More" : "Show less"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhatPeoapleSay;
