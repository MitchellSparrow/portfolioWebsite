import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://scontent.flba1-1.fna.fbcdn.net/v/t39.30808-6/266101944_6573443129396334_4029447336686182629_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=NkLdSnsM7WEAX9X_obe&tn=-ZFNwGrCQ54xtijW&_nc_ht=scontent.flba1-1.fna&oh=00_AfBk3Q-iWwwVNCdtNHXJf7_fL96Z_mzEdWV_w9CyEZKQqQ&oe=636B3654"
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">90%</p>
        </div>
      </div>
    </div>
  );
}
