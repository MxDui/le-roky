// components/Timeline.js
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TimelineItem = ({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row space-x-4 items-center md:items-center timeline-item p-4 min-h-screen w-full"
      transition={{ duration: 0.2 }}
    >
      <Image
        src={`https://picsum.photos/500/500?random=$20`}
        alt={`Image 20`}
        width={500}
        height={500}
      />
      <div className="text-gray-600 font-semibold">{date}</div>
      <div className="border-l-2 border-gray-400 h-8 md:h-auto md:w-0.5"></div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const TimelineC = ({
  events,
}: {
  events: { date: string; title: string; description: string }[];
}) => {
  return (
    <div className="overflow-hidden w-full min-h-screen flex flex-col items-center justify-center timeline-scrollbar">
      <div className="w-full min-h-screen space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row md:flex-nowrap overflow-y-scroll md:overflow-x-scroll md:overflow-y-hidden timeline-container">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineC;
