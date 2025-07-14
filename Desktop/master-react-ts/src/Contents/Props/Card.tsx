import React from "react";

type cardProps = {
  text: string;
  content: string;
  count: number;
};

export default function Card({ text, content, count }: cardProps) {
  return (
    <div>
      <h1>{text}</h1>
      <h1>{content}</h1>
      <h1>{count}</h1>
    </div>
  );
}
