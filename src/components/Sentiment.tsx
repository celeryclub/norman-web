import React from 'react';

interface SentimentProps {
  value?: boolean;
}

function Sentiment({ value }: SentimentProps) {
  if (value === true) {
    return <>👍</>;
  }

  if (value === false) {
    return <>👎</>;
  }

  return <>➖</>;
}

export default Sentiment;
