import { Employee } from "../../domain/models/employee";
import EmployeeRepository from "../../domain/repositories/employee";

export class EmployeeInMemoryRepository implements EmployeeRepository {
    readonly data: Employee[] = []

    async add(aggregate: Employee): Promise<void> {
        this.data.push(aggregate)
    }

    async get(id: string): Promise<Employee> {
        const employee = this.data.find(item => item.getId().getValue() === id)

        if(!employee) throw new Error("id not exists")

        return employee
    }
}
