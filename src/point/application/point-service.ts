import { Employee } from "../domain/models/employee";
import EmployeeRepository from "../domain/repositories/employee";

export default class PointService {
    constructor(
        private readonly repository: EmployeeRepository
    ) {}

    async createNewEmployee(
        userId: string,
        expectedDailyWorkHours: number
    ) {
        const employee = Employee.create(
            userId, expectedDailyWorkHours
        )
        await this.repository.add(employee)
        return employee
    }

    async clockIn(employeeId: string) {
        const employee = await this.repository.get(employeeId)
        employee.clockIn(new Date())
        await this.repository.add(employee)
    }
}
