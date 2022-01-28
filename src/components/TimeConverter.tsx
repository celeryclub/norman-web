import React, { useState } from 'react';
import { secondsFromString, secondsToString } from '../utils/TimeUtils';

export default function TimeConverter(): JSX.Element {
  const [timeString, setTimeString] = useState('');
  const [timeNumber, setTimeNumber] = useState<number>();

  const onChangeTimeString = (e): void => {
    const { value } = e.target;
    setTimeString(value);
    setTimeNumber(secondsFromString(value));
  };

  const onChangeTimeNumber = (e): void => {
    const value = parseInt(e.target.value, 10);
    setTimeNumber(value || null);
    setTimeString(secondsToString(value || null));
  };

  return (
    <>
      <hr />
      string: <input value={timeString} onChange={onChangeTimeString} />
      number: <input value={timeNumber} onChange={onChangeTimeNumber} />
      <hr />
    </>
  );
}
