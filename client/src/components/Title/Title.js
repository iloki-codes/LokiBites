import classes from './title.module.css';

export default function Title({ title, fontSize, margin, color }) {
  return <h1 className={classes.h1} style={{ fontSize, margin, color }}>{title}</h1>;
}