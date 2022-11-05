import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://scontent.flba1-1.fna.fbcdn.net/v/t1.6435-9/134352906_4831896543551010_6149883889908693630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5gtiBsS5muQAX_wvn5X&_nc_ht=scontent.flba1-1.fna&oh=00_AfDtnD9hCVPELofi4o5tnqQz43vfLBIi9uqKVSHFKP0mNQ&oe=638E2F42"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of X</h4>
        <p className="font-bold text-2xl mt-1">This is an example</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="
           https://scontent.flba1-1.fna.fbcdn.net/v/t1.6435-9/134352906_4831896543551010_6149883889908693630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5gtiBsS5muQAX_wvn5X&_nc_ht=scontent.flba1-1.fna&oh=00_AfDtnD9hCVPELofi4o5tnqQz43vfLBIi9uqKVSHFKP0mNQ&oe=638E2F42    "
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="
           https://scontent.flba1-1.fna.fbcdn.net/v/t1.6435-9/134352906_4831896543551010_6149883889908693630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5gtiBsS5muQAX_wvn5X&_nc_ht=scontent.flba1-1.fna&oh=00_AfDtnD9hCVPELofi4o5tnqQz43vfLBIi9uqKVSHFKP0mNQ&oe=638E2F42    "
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="
           https://scontent.flba1-1.fna.fbcdn.net/v/t1.6435-9/134352906_4831896543551010_6149883889908693630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5gtiBsS5muQAX_wvn5X&_nc_ht=scontent.flba1-1.fna&oh=00_AfDtnD9hCVPELofi4o5tnqQz43vfLBIi9uqKVSHFKP0mNQ&oe=638E2F42    "
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
