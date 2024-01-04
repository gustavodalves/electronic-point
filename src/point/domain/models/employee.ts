
import { DateComparer } from "../../../@core/date/compare-dates";
import { AggregateRoot } from "../../../@core/shared/aggregate";
import { UUID } from "../../../@core/shared/object-values/id";
import { Workday } from "./workday";

export class EmployeeId extends UUID {}

export class Employee extends AggregateRoot {
    private constructor(
        employeeId: EmployeeId,
        public readonly userId: UUID,
        public readonly workdays: Workday[],
        public readonly expectedDailyWorkHours: number
    ) {
        super(employeeId);
    }

    static create(
        userId: string,
        expectedDailyWorkHours: number
    ) {
        return new Employee(new EmployeeId(), new UUID(userId), [], expectedDailyWorkHours);
    }

    static recover(
        employeeId: string, userId: string, workdays: Workday[], expectedDailyWorkHours: number
    ) {
        return new Employee(new EmployeeId(employeeId), new UUID(userId), workdays, expectedDailyWorkHours);
    }

    private viewWorkday(day: Date) {
        return this.workdays.find(workday =>
            workday.appointments.some(appointment => {
                return new DateComparer().isSameDay(
                    appointment.time,
                    day
                )
            })
        );
    }

    clockIn(appointmentTime: Date) {
        let todayAttendance = this.viewWorkday(appointmentTime);

        if (!todayAttendance) {
            todayAttendance = new Workday();
            this.workdays.push(todayAttendance);
        }

        todayAttendance.markAppointment(appointmentTime);
    }

    getRemainingWorkHours() {
        const hoursWorked = this.workdays.reduce((acc, item) => {
            return acc + item.calculateWorkHours().toHours().value
        }, 0)
        const total = (this.workdays.length * this.expectedDailyWorkHours)
        return total - hoursWorked
    }
}
