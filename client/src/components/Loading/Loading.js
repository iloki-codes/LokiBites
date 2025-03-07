import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import classes from './loading.module.css';
import loading from "../../assets/loading.svg";

export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return;

  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <img src={loading} alt="Loading!" />
        <h1>Loading...your cravings !</h1>
      </div>
    </div>
  );
}