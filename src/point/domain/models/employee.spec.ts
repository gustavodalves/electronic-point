import { Employee } from "./employee";
import { Workday } from "./workday";
import { UUID } from "../../../@core/shared/object-values/id";

describe('Employee', () => {
  const userId = new UUID();
  const expectedDailyWorkHours = 8;

  it('should create a new employee', () => {
    const employee = Employee.create(userId.getValue(), expectedDailyWorkHours);

    expect(employee).toBeInstanceOf(Employee);
    expect(employee.userId).toEqual(userId);
    expect(employee.workdays).toHaveLength(0);
    expect(employee.expectedDailyWorkHours).toEqual(expectedDailyWorkHours);
  });

  it('should recover an existing employee', () => {
    const employeeId = new UUID().getValue();
    const workdays = [new Workday()];
    const employee = Employee.recover(employeeId, userId.getValue(), workdays, expectedDailyWorkHours);

    expect(employee).toBeInstanceOf(Employee);
    expect(employee.userId).toEqual(userId);
    expect(employee.workdays).toEqual(workdays);
    expect(employee.expectedDailyWorkHours).toEqual(expectedDailyWorkHours);
  });

  it('should clock in an appointment', () => {
    const employee = Employee.create(userId.getValue(), expectedDailyWorkHours);
    const appointmentTime = new Date();

    employee.clockIn(appointmentTime);

    expect(employee.workdays).toHaveLength(1);
    expect(employee.workdays[0].appointments).toHaveLength(1);
    expect(employee.workdays[0].appointments[0].time).toEqual(appointmentTime);
  });

  it('should get remaining work hours', () => {
    const employee = Employee.create(userId.getValue(), expectedDailyWorkHours);
    const appointmentTime1 = new Date('2023-01-01T09:00:00');
    const appointmentTime2 = new Date('2023-01-01T09:00:00');
    appointmentTime2.setHours(appointmentTime1.getHours() + 4);

    employee.clockIn(appointmentTime1);
    employee.clockIn(appointmentTime2);

    expect(employee.getRemainingWorkHours()).toEqual(expectedDailyWorkHours - 4);
  });
});
