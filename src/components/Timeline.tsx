// components/Timeline.js
import React from "react";
import { motion } from "framer-motion";

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
      className="flex flex-col md:flex-row space-x-4 items-start md:items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
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
    <div className="overflow-hidden w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row md:flex-nowrap overflow-y-scroll md:overflow-x-scroll md:overflow-y-hidden">
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
