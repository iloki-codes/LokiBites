import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import {
  getAll,
  getAllByTag,
  getAllTags,
  search,
} from '../../services/foodService';
import NotFound from '../../components/NotFound/NotFound';
import bgVid from "../../assets/bgVid.mp4";
import classes from './homePage.module.css';

const initialState = { foods: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    case 'TAGS_LOADED':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;
  const { searchTerm, tag } = useParams();



  useEffect(() => {
    getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

    const loadFoods = tag
      ? getAllByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();

    loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
  }, [searchTerm, tag]);

  return (
    <>
        <div className={classes.vidContainer}>

          <div className={classes.bgv}>

            <video autoPlay loop muted playsInline className={classes.vid}>
            <source src={bgVid} type='video/mp4' />
          </video>
            <div className={classes.overlay}></div>

          </div>


        <div className={classes.main}>
          <Search />
          <Tags tags={tags} />
          {foods.length === 0 && <NotFound linkText="Reset Search" />}
          <Thumbnails foods={foods} />
        </div>

        </div>
    </>
  );
}