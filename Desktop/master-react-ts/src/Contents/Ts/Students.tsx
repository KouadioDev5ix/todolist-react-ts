import React from "react";

type StudendProps = {
  id: number | string;
  name: string;
  isActive: boolean;
  hobbies: string[];
};

const AllStudents: StudendProps[] = [
  {
    id: 1,
    name: "Kouadio",
    isActive: true,
    hobbies: ["Sport", "Music", "Reading"],
  },
];

export default function Students() {
  const student1: StudendProps = {
    id: "YO",
    name: "Koffi",

    isActive: true,
    hobbies: ["Sport", "music"],
  };
  const renderStudent = (data: StudendProps): void => {
    console.log(data.hobbies.map((hobbie) => hobbie));
  };

  renderStudent(student1);
  return <div></div>;
}
