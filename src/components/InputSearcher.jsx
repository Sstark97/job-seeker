import React from "react";
import {
  InputSearcherGroup,
  InputStyledSearcher,
  InputRightElement,
  Button,
} from "../assets/styles/components/InputSearcher";

const InputSearcher = () => {
  return (
    <InputSearcherGroup>
      <InputStyledSearcher
        type="text"
        placeholder="Title, companies, expertise or benefits"
      />
      <InputRightElement>
        <Button>Search</Button>
      </InputRightElement>
    </InputSearcherGroup>
  );
};

export default InputSearcher;
