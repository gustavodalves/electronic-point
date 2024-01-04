import { Workday } from './workday';
import { Hours } from '../../../@core/shared/object-values/time';

describe('Workday', () => {
    it('should calculate work hours correctly', () => {
        const workday = new Workday();

        workday.markAppointment(new Date('2024-01-01T08:00:00'));
        workday.markAppointment(new Date('2024-01-01T12:00:00'));
        workday.markAppointment(new Date('2024-01-01T13:00:00'));
        workday.markAppointment(new Date('2024-01-01T17:00:00'));

        const workHours = workday.calculateWorkHours();
        const exptectedHoursInMs = new Hours(8).toMilliseconds().value
        expect(workHours.value).toBe(exptectedHoursInMs);
    });

    it('should throw AppointmentTimeDailyFourException when marking more than four appointments', () => {
        const workday = new Workday();

        workday.markAppointment(new Date('2024-01-01T08:00:00'));
        workday.markAppointment(new Date('2024-01-01T12:00:00'));
        workday.markAppointment(new Date('2024-01-01T13:00:00'));
        workday.markAppointment(new Date('2024-01-01T17:00:00'));

        expect(() => {
            workday.markAppointment(new Date('2024-01-01T18:00:00'));
        }).toThrow();
    });
});
