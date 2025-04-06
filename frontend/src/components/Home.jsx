import { IoPlayCircleOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import Balancer from "react-wrap-balancer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { benefits } from "../utils/benefitsData";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const cardAnimation = {
    hidden: { x: -200, opacity: 0 }, // Start off-screen to the left and invisible
    visible: { x: 0, opacity: 1 }, // Move into view and become visible
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative flex h-screen justify-center bg-purple-400 items-center"
        style={{
          backgroundImage: `url('/wave.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="text-center absolute text-black">
          <h1 className="md:text-6xl text-4xl font-extrabold">
            Find Inner Peace with SerenitySpeak
          </h1>

          <p className="md:text-xl text-md font-bold mt-6">
            <Balancer>
              Your personal companion for mental wellness. Meditation, <br />{" "}
              mindfulness, and emotional support - all in one place.
            </Balancer>
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-x-4 mt-5">
            {!user && (
              <button
                onClick={() => navigate("/signUp")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-black bg-[#5527c0] hover:bg-[#7C3AED] text-white text-base font-semibold transition duration-300"
              >
                Get Started Free
                <GoArrowRight size={22} />
              </button>
            )}

            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#06D6A0] hover:bg-[#05c495] text-white text-base font-semibold transition duration-300"
              onClick={() => navigate("/features")}
            >
              Learn More
              <IoPlayCircleOutline size={26} />
            </button>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full h-[540px] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#273036"
            fillOpacity="0.9"
            d="M0,192L60,213.3C120,235,240,277,360,288C480,299,600,277,720,245.3C840,213,960,171,1080,128C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col justify-center items-center text-white p-6 h-full">
        <div className="text-center mb-8 mt-10">
          <Balancer>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of section is visible
              variants={cardAnimation}
              transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
              className="md:text-5xl font-extrabold text-2xl text-teal-400 md:font-bold mb-4"
            >
              Transform Your Life with SerenitySpeak
            </motion.h1>
          </Balancer>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardAnimation}
            transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
            className="text-xs font-bold md:text-lg text-gray-300"
          >
            <Balancer>
              Experience the powerful benefits of regular mental wellness
              practice
            </Balancer>
          </motion.p>
        </div>

        {/* Card Components */}
        <div className="flex mb-9 justify-center gap-x-6 flex-wrap gap-y-6 mt-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of card is visible
              variants={cardAnimation}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: 0.6 + index * 0.1, // Stagger each card animation
              }}
              className="className= card w-96 bg-neutral-900 shadow-md hover:shadow-cyan-300 rounded-2xl p-5 overflow-hidden"
            >
              <div className="card-body space-y-3 p-6">
                <div className={`${benefit.color}`}>
                  <benefit.icon size={34} />
                </div>

                <h2 className="card-title">{benefit.title}</h2>
                <p className="font-medium text-base text-gray-400">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
