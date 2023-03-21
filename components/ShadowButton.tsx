import styled from "styled-components";

export const ShadowButton = styled.button`
  all: unset;
  background: DeepPink;
  border-radius: 10px;
  padding: 8px 32px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  font-size: 48px;

  &:hover {
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
    margin-top: -10px;
  }
`;
