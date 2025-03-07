import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';
import orders from "../../assets/orders.svg";
import profile from "../../assets/profile.svg";
import users from "../../assets/users.svg";
import foods from "../../assets/foods.svg";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.url}
              style={{
                backgroundColor: item.bgColor,
                color: item.color,
              }}
            >
              <img src={item.imageUrl} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
          ))}
      </div>
    </div>
  );
}

const allItems = [
  {
    title: 'Orders',
    imageUrl: orders,
    url: '/orders',
    bgColor: '#ec407a',
    color: 'white',
  },
  {
    title: 'Profile',
    imageUrl: profile,
    url: '/profile',
    bgColor: '#1565c0',
    color: 'white',
  },
  {
    title: 'Users',
    imageUrl: users,
    url: '/admin/users',
    forAdmin: true,
    bgColor: '#00bfa5',
    color: 'white',
  },
  {
    title: 'Foods',
    imageUrl: foods,
    url: '/admin/foods',
    forAdmin: true,
    bgColor: '#e040fb',
    color: 'white',
  },
];