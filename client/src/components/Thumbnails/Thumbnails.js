import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import StarRating from '../StarRating/StarRating';
import classes from './thumbnails.module.css';

export default function Thumbnails({ foods }) {

   const [page, setPage] = useState(1);
  
    const startIndex = ( page - 1 ) * 9;
    const displayFoods = foods.slice(startIndex, startIndex + 9);
  
    const totalPages = Math.ceil(foods.length/9);


  return (
    <ul className={classes.list}>
      {displayFoods.map(food => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`${food.imageUrl}`}
              alt={food.name}
            />

            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? '' : classes.not
                }`}
              >
                ❤
              </span>
              <div className={classes.stars}>
                <StarRating stars={food.stars} size={15} />
              </div>
              <div className={classes.product_item_footer}>
                <div className={classes.outlet}>
                  {food.outlet.map(origin => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
                <div className={classes.cook_time}>
                  <span>🕒</span>
                  {food.cookTime}
                </div>
              </div>
              <div className={classes.price}>
                <Price price={food.price} />
              </div>

            </div>
          </Link>
        </li>
      ))}

              <button 
                className={classes.btnNext} 
                disabled={page === 1} 
                onClick={() => setPage((prev) => prev - 1)}>
                  ←
              </button>

              <button 
                className={classes.btnPrev} 
                disabled={page === totalPages} 
                onClick={() => setPage((prev) => prev + 1)}>
                   →
              </button>
    </ul>
  );
}