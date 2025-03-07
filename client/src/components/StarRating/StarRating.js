
import React from 'react';
import fullStar from '../../assets/star-full.svg';
import halfStar from '../../assets/star-half.svg';
import emptyStar from '../../assets/star-empty.svg';
import classes from './starRating.module.css';



export default function StarRating({ stars, size }) {
  const styles = {
    width: size + 'px',
    height: size + 'px',
    marginRight: size / 6 + 'px',
  };

  function Star({ number, stars }) {
    const halfNumber = number - 0.5;

    return (
      <>
        {
          stars >= number ? (
            <img src={fullStar} style={styles} alt={number} />
          ) : stars >= halfNumber ? (
            <img src={halfStar} style={styles} alt={number} />
          ) : (
            <img src={emptyStar} style={styles} alt={number} />
          )
        }
      </>
    )
  }

  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map(number => (
        <Star key={number} number={number} stars={stars} />
      ))}
    </div>
  );
}

StarRating.defaultProps = {
  size: 5,
  stars: 5
};
