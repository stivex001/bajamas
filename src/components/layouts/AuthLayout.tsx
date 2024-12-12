import { ReactNode } from "react";
import authDetails from "@/assets/images/authdetails.png";
import { motion } from "framer-motion";
import { SkipIcon } from "@/assets/svgs/SkipIcon";
import logo from "../../../public/logo.png";

type Props = {
  children: ReactNode;
};

const listedText = [
  "Reach your target audience effectively, track your results, and grow your customer base with ease",
  "With intuitive tools and features, creating stunning email campaigns has never been easier",
  "Design your marketing with email automation workflow",
  "Join the thousands of businesses that trust us for their email marketing needs and start seeing results today.",
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

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AuthLayout = ({ children }: Props) => {
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
            src={authDetails}
            alt="decscription"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-9">
          <h3 className="text-gray1 font-semibold text-2xl text-center">
            Track every single email sent out for your campaign
          </h3>
          <motion.div className="">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-gray2 font-medium text-base list-disc"
            >
              {listedText.map((list) => (
                <motion.li variants={childVariants} className="mb-1">
                  {list}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <SkipIcon />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
