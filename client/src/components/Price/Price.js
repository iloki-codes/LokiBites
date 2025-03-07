import React from 'react';

export default function Price({ price, locale, currency }) {
  
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'INR'
    }).format(price);

  return <span style={{color: "green"}}>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: 'en-US',
  currency: 'INR',
};