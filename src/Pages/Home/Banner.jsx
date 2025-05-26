import React from "react";
import { motion } from "motion/react"
import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
            <motion.img
          src={team1}
          animate={{y: [100, 150, 100]}}
          transition={{duration:5, repeat:Infinity}}
          className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
        />
            <motion.img
          src={team2}
          animate={{x: [100, 150, 100]}}
          transition={{duration:7,delay:2, repeat:Infinity}}
          className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Latest <motion.span
          animate=
          {{color:['#b533ff', '#0545fc', '#c7fc05', '#fc05a9'],
            transition: {duration:2, repeat: Infinity}
          }}
          >Jobs</motion.span> for You!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
