import { AppointmentTime, AppointmentTimeTypeEnum } from "./time";

describe('AppointmentTime', () => {
  it('getInterval returns correct interval', () => {
    const currentTime = new Date('2022-01-01T12:00:00');
    const futureTime = new Date('2022-01-01T14:30:00');

    const appointment1 = new AppointmentTime(currentTime, AppointmentTimeTypeEnum.In);
    const appointment2 = new AppointmentTime(futureTime, AppointmentTimeTypeEnum.Out);

    const expectedInterval = futureTime.getTime() - currentTime.getTime();

    const interval = appointment1.getInterval(appointment2);

    expect(interval.value).toEqual(expectedInterval);
  });
});
