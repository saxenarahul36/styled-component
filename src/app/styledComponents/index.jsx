import React from "react";
import {
  VerticalProgressWrapper,
  StepProgres,
  Text,
} from "./VerticalProgress/ui";

const VerticalProgress = () => {
  const myProgresList = [
    { title: "Setp 1", status: "done" },
    { title: "Setp 2", status: "done" },
    { title: "Setp 3", status: "done" },
    { title: "Setp 4", status: "done" },
    { title: "Setp 5", status: "active" },
    { title: "Setp 6", status: "" },
    { title: "Setp 7", status: "" },
    { title: "Setp 8", status: "" },
    { title: "Setp 9", status: "" },
    { title: "Setp 10", status: "" },
  ];

  return (
    <>
      <h5> VerticalProgress</h5>
      <VerticalProgressWrapper>
        {myProgresList.map((val) => (
          <StepProgres status={val.status}>
            <Text>{val.title}</Text>
          </StepProgres>
        ))}
      </VerticalProgressWrapper>
    </>
  );
};

export default VerticalProgress;
