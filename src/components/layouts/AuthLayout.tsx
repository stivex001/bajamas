import { ReactNode, useState } from "react";
import authDetails from "@/assets/images/newImg.png";
import { motion } from "framer-motion";
import { SkipIcon } from "@/assets/svgs/SkipIcon";
import logo from "../../../public/logo.png";

type Props = {
  children: ReactNode;
};

const slidesData = [
  {
    id: 1,
    title: "Skyrocket Your Sales with Personalized Messaging",
    descText: [
      "Reach your customers directly with targeted email and SMS campaigns.",
      "Boost sales by sending personalized offers and promotions.",
      "Increase customer engagement and loyalty.",
      "Easy-to-use platform designed for SMEs and businesses of all sizes.",
      "Affordable pricing to maximize your ROI.",
    ],
    image: authDetails,
  },
  {
    id: 2,
    title: " Stay Connected with Timely Notifications",
    descText: [
      "Keep your customers informed with automated SMS and email notifications.",
      "Send order updates, appointment reminders, and important announcements effortlessly.",
      "Improve customer satisfaction by providing timely and relevant information.",
      "Save time and resources by automating your communication.",
      "Reliable delivery ensures your messages reach your audience.",
    ],
    image: authDetails,
  },
  {
    id: 3,
    title: "CheapMailing: Your All-in-One Communication Solution",
    descText: [
      "Combine the power of email and SMS marketing in one platform.",
      "Personalize your messages to resonate with your target audience.",
      "Track your campaign performance and optimize your strategy.",
      " Dedicated customer support to assist you every step of the way.",
      "Flexible pricing plans to fit your budget.",
    ],
    image: authDetails,
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

// const childVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//   },
// };

const AuthLayout = ({ children }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSkip = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <div className="flex w-full h-full  no-scrollbar bg-gray1">
      <div className="flex-1 flex flex-col gap-8 px-6 lg:px-24 py-9">
        <div className="flex-start w-[188px] lg:w-[249px] lg:h-[89px]">
          <img src={logo} />
        </div>
        {children}
      </div>
      <div className="hidden flex-1 lg:flex flex-col items-center py-16 px-12 bg-authbg bg-cover bg-no-repeat no-scrollbar">
          <div className="w-[600px] mb-14">
            <img
              src={slidesData[currentSlide].image}
              alt="description"
              className="w-full h-full object-cover"
            />
          </div>
        <motion.div
          key={slidesData[currentSlide].id}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col gap-9">
            <h3 className="text-gray1 font-semibold text-2xl text-center">
              {slidesData[currentSlide].title}
            </h3>
            <motion.ul className="text-gray2 font-medium text-base list-disc">
              {slidesData[currentSlide].descText.map((list, index) => (
                <motion.li key={index} className="mb-1">
                  {list}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* Skip Button */}
        <div
          className="mt-10 flex items-center justify-center cursor-pointer"
          onClick={handleSkip}
        >
          <SkipIcon />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
