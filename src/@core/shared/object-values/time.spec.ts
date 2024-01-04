import { Milliseconds, Seconds, Minutes, Hours } from './time';

describe('Milliseconds', () => {
  it('toSeconds', () => {
    const milliseconds = new Milliseconds(1000);
    const seconds = milliseconds.toSeconds();
    expect(seconds.value).toBe(1);
  });

  it('toMinutes', () => {
    const milliseconds = new Milliseconds(60000);
    const minutes = milliseconds.toMinutes();
    expect(minutes.value).toBe(1);
  });

  it('toHours', () => {
    const milliseconds = new Milliseconds(3600000);
    const hours = milliseconds.toHours();
    expect(hours.value).toBe(1);
  });
});

describe('Seconds', () => {
  it('toMilliseconds', () => {
    const seconds = new Seconds(1);
    const milliseconds = seconds.toMilliseconds();
    expect(milliseconds.value).toBe(1000);
  });

  it('toMinutes', () => {
    const seconds = new Seconds(60);
    const minutes = seconds.toMinutes();
    expect(minutes.value).toBe(1);
  });

  it('toHours', () => {
    const seconds = new Seconds(3600);
    const hours = seconds.toHours();
    expect(hours.value).toBe(1);
  });
});

describe('Minutes', () => {
  it('toMilliseconds', () => {
    const minutes = new Minutes(1);
    const milliseconds = minutes.toMilliseconds();
    expect(milliseconds.value).toBe(60000);
  });

  it('toSeconds', () => {
    const minutes = new Minutes(1);
    const seconds = minutes.toSeconds();
    expect(seconds.value).toBe(60);
  });

  it('toHours', () => {
    const minutes = new Minutes(60);
    const hours = minutes.toHours();
    expect(hours.value).toBe(1);
  });
});

describe('Hours', () => {
  it('toMilliseconds', () => {
    const hours = new Hours(1);
    const milliseconds = hours.toMilliseconds();
    expect(milliseconds.value).toBe(3600000);
  });

  it('toSeconds', () => {
    const hours = new Hours(1);
    const seconds = hours.toSeconds();
    expect(seconds.value).toBe(3600);
  });

  it('toMinutes', () => {
    const hours = new Hours(1);
    const minutes = hours.toMinutes();
    expect(minutes.value).toBe(60);
  });
});