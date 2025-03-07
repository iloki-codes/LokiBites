import React from 'react';

DateTime.defaultProps = {
  options: {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  },
};

export default function DateTime({
  date,
  options={},
}) {
  var currentLocale = new Intl.DateTimeFormat().resolvedOptions().locale;

  const getDate = (currentLocale, options) =>
  
    new Intl.DateTimeFormat(currentLocale, {...DateTime.defaultProps.options, ...options}).format(Date.parse(date));
    
    return  <>
              {getDate()}
            </>;
}