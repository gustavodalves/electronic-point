import { Milliseconds } from "../../../@core/shared/object-values/time";
import { AppointmentTimeDailyFourException } from "../exceptions/appointment-daily-four";
import { AppointmentTime, AppointmentTimeTypeEnum } from "./time";

export class Workday {
    appointments: AppointmentTime[] = [];

    markAppointment(appointmentTime: Date) {
        if (this.appointments.length >= 4) {
            throw new AppointmentTimeDailyFourException()
        }

        const type = 
            !(this.appointments.length % 2) ?
            AppointmentTimeTypeEnum.In :
            AppointmentTimeTypeEnum.Out


        this.appointments.push(
            new AppointmentTime(
                appointmentTime,
                type
            )
        );
    }

    calculateWorkHours() {
        const workHoursInMs = this.appointments.reduce((totalHours, appointment, index) => {
            if (appointment.type === AppointmentTimeTypeEnum.In && index + 1 < this.appointments.length) {
                const afterCurrentAppointment = this.appointments[index + 1]
                totalHours += appointment.getInterval(afterCurrentAppointment).value;
            }
            return totalHours;
        }, 0);

        return new Milliseconds(workHoursInMs)
    }
}
