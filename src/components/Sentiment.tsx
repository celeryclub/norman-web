import React from 'react';

interface SentimentProps {
  value?: boolean;
}

export default function Sentiment({ value }: SentimentProps): JSX.Element {
  if (value === true) {
    return <>👍</>;
  }

  if (value === false) {
    return <>👎</>;
  }

  return <>➖</>;
}
