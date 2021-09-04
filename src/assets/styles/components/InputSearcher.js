import styled from "styled-components";

export const InputSearcherGroup = styled.div`
  width: 109rem;
  height: 5.5rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
`;

export const InputStyledSearcher = styled.input`
  border: none;
  width: 76.3%;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-left: 4rem;
  :focus {
    box-shadow: none;
    border-color: none;
  }
`;

export const InputRightElement = styled.div`
  width: 14.6rem;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 6.5rem;
  border-radius: 0.4rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 4.7rem;
  background: #1e86ff;
  color: #ffffff;
  font-size: 1.6rem;
  line-height: 1.9rem;
  justify-self: flex-end;
  border: none;
  border-radius: 0.4rem;
`;
