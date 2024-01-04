import { Repository } from "../../../@core/shared/repository";
import { Employee } from "../models/employee";

export default interface EmployeeRepository extends Repository<Employee> {}
