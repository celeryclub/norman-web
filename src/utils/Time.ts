// This class only supports minutes and seconds.
// It converts between seconds and mm:ss formatted strings.

export default class Time {
  // Time.fromString('00:10') => 10
  // Time.fromString('08:30') => 510
  // Time.fromString('15:30') => 930
  public static fromString(timeString: string): number {
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

  // Time.toString(10)  => '00:10'
  // Time.toString(510) => '08:30'
  // Time.toString(930) => '15:30'
  public static toString(duration: number): string {
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return [formattedMinutes, formattedSeconds].join(':');
  }
}
