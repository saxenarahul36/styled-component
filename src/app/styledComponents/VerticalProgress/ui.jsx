import styled from "styled-components";

export const VerticalProgressWrapper = styled.div`
  border-left: 3px solid #6c757d;
  margin-left: 1.5rem;
`;

export const StepProgres = styled.div`
  padding-left: 0.8rem;
  padding-bottom: 0.6rem;
  position: relative;
  line-height: 1.3;
  margin: 14px auto 14px auto;
  cursor: pointer;
  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: ${({ status }) =>
      status === "done" ? "#0dcaf0" : "#fff"};
    background: ${({ status }) =>
      status === "active" ? "rgb(61, 84, 110)" : ""};
    border: 2px solid #198754;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -12px;
  }
  ${({ status }) =>
    status === "done" &&
    `
   &::after {
    content: "";
    display: block;
    width: 0.4rem;
    height: 0.6rem;
    border: 2px solid #212529;
    border-width: 0 2px 2px 0;
    position: absolute;
    top: 19%;
    left: -5px;
    z-index: 9;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  `}

  &:last-child {
    padding-bottom: 0px;
  }
`;

export const Text = styled.span``;
