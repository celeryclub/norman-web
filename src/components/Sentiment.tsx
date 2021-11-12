import React from 'react';

interface SentimentProps {
  value?: boolean;
}

export default function Sentiment({ value }: SentimentProps) {
  if (value === true) {
    return <>👍</>;
  }

  if (value === false) {
    return <>👎</>;
  }

  return <>➖</>;
}
