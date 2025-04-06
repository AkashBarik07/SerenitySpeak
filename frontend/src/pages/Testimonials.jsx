import Balancer from "react-wrap-balancer";
import { testimonials } from "../utils/testimonialsData";
import { motion } from "framer-motion";

function Testimonials() {
  const animationSettings = {
    initial: { x: -200, opacity: 0 }, // Start off-screen to the left and invisible
    animate: { x: 0, opacity: 1 }, // Move into view and become visible
    transition: { type: "spring", stiffness: 50 }, // Spring animation
  };

  return (
    <div className="md:h-screen h-full flex flex-col items-center    justify-center">
      <div className="text-center mb-8 ">
        <Balancer>
          <motion.h1
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.4 }}
            className="md:text-5xl text-3xl font-extrabold mb-4 text-cyan-300"
          >
            Success Stories from Our Users
          </motion.h1>
        </Balancer>

        <Balancer>
          <motion.p
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.4 }}
            className="text-base md:text-lg text-gray-300  font-medium"
          >
            Discover how MindWell has transformed lives and improved mental
            wellness
          </motion.p>
        </Balancer>
      </div>

      {/* card components */}
      <div className="flex justify-center gap-x-8 gap-y-7 flex-wrap mt-6 mb-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="card w-96 bg-neutral-900 border border-gray-500 rounded-2xl p-6 shadow-md hover:shadow-red-400 transition-shadow duration-300"
            key={index}
            {...animationSettings}
            transition={{
              ...animationSettings.transition,
              delay: 0.6 + index * 0.1,
            }}
          >
            <div className="card-body">
              <div className="flex gap-x-3">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-lg  bg-gradient-to-r from-violet-500 to-blue-500 font-bold rounded-full">
                    <span className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-xl font-bold text-gray-200">
                      {testimonial.shorthand}
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="card-title text-pink-500 ">
                    {testimonial.name}
                  </h2>
                  <h5 className="font-mono text-red-400 ">{testimonial.job}</h5>
                </div>
              </div>

              <p className="mt-2 font-serif mb-2 text-gray-300">
                <Balancer>{testimonial.review}</Balancer>
              </p>

              <div className="rating rating-sm ">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />

                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
