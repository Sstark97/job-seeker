import React, { useEffect } from "react";
import {
  Searcher,
  Image,
  SearcherChild,
} from "../assets/styles/components/Searcher";
import * as actionsJobs from "../redux/actions/jobsActions";
import { useSelector, useDispatch } from "react-redux";
import InputSearcher from "../components/InputSearcher";
import background from "../assets/static/backgroundImg.png";

const Home = () => {
  const jobsReducer = useSelector((store) => store.jobsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsJobs.traerTodos());
  }, []);

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
