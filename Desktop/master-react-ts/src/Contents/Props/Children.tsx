import React from "react";

type componentProps = {
  children: React.ReactNode;
};

export default function Children({ children }: componentProps) {
  return <div>{children}</div>;
}
