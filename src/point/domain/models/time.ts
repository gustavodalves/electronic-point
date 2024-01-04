import { Milliseconds } from "../../../@core/shared/object-values/time";

export enum AppointmentTimeTypeEnum {
    In = 'in',
    Out = 'out'
}

export class AppointmentTime {
    constructor(
        readonly time: Date,
        readonly type: AppointmentTimeTypeEnum
    ) {}

    getInterval(
        appointmentTime: AppointmentTime
    ) {
        return new Milliseconds(
            appointmentTime.time.getTime() - this.time.getTime()
        )
    }
}
