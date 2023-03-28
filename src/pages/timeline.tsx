import TimelineC from "@/components/Timeline";
import React from "react";
const Timeline = () => {
  const events = [
    {
      date: "2023-01-01",
      title: "Event 1",
      description: "This is the description for Event 1.",
    },
    {
      date: "2023-02-01",
      title: "Event 2",
      description: "This is the description for Event 2.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
    {
      date: "2023-03-01",
      title: "Event 3",
      description: "This is the description for Event 3.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  w-full">
      <TimelineC events={events} />
    </div>
  );
};

export default Timeline;
