import React from "react";
import {
  Searcher,
  Image,
  SearcherChild,
} from "../assets/styles/components/Searcher";
import InputSearcher from "../components/InputSearcher";
import background from "../assets/static/backgroundImg.png";

const Home = () => {
  return (
    <Searcher>
      <Image src={background} alt="Searcher Background" />
      <SearcherChild>
        <InputSearcher />
      </SearcherChild>
    </Searcher>
  );
};

export default Home;
