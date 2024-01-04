import { UUID } from "../../@core/shared/object-values/id"
import { EmployeeInMemoryRepository } from "../infra/repository/employee.in-memory"
import PointService from "./point-service"

describe('Point Service', () => {
    it('should be able create new employee', async () => {
        const repository = new EmployeeInMemoryRepository()
        const pointService = new PointService(repository)

        await pointService.createNewEmployee(
            new UUID().getValue(),
            8
        )

        expect(repository.data).toHaveLength(1)
    })

    it('should be able clock in', async () => {
        const repository = new EmployeeInMemoryRepository()
        const pointService = new PointService(repository)

        await pointService.createNewEmployee(
            new UUID().getValue(),
            8
        )

        const employee = repository.data[0]

        await pointService.clockIn(
            employee.getId().getValue()
        )

        await pointService.clockIn(
            employee.getId().getValue()
        )

        expect(employee.workdays).toHaveLength(1)
        expect(employee.workdays[0].appointments).toHaveLength(2)
    })
})
