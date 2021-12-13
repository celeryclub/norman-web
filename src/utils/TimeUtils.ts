// These functions only support minutes and seconds.
// They convert between seconds and mm:ss formatted strings.

// secondsFromString('00:10') => 10
// secondsFromString('08:30') => 510
// secondsFromString('15:30') => 930
export function secondsFromString(timeString: string): number {
  const groups = timeString.split(':');

  let sum = 0;
  const multipliers = [60, 1];

  for (let i = 0; i < groups.length; i += 1) {
    const value = parseInt(groups[i], 10);

    if (Number.isNaN(value)) {
      throw new Error(`Invalid time provided: ${timeString}`);
    }

    sum += value * multipliers[i];
  }

  return sum;
}

// secondsToString(10)  => '00:10'
// secondsToString(510) => '08:30'
// secondsToString(930) => '15:30'
export function secondsToString(duration: number): string {
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return [formattedMinutes, formattedSeconds].join(':');
}
