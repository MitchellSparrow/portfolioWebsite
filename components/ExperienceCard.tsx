import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex drop-shadow-xl overflow-visible flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[700px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white  to-darkGreen/20 p-5 md:p10 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-28 h-28 md:w-28 md:h-28 rounded-full xl:w-[150px] xl:h-[150px] mb-2  object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-lg md:text-3xl font-light text-black">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-md md:text-2xl  mt-1 text-lightGreen">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full object-cover"
              src={urlFor(technology?.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500 text-sm md:text-lg">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc text-black max-h-48 space-y-4 ml-5 text-sm md:text-lg   overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
