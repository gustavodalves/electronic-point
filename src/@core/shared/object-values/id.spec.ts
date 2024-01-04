import { UUID } from "./id"

const UUID_SIZE = 36

describe("id", () => {
    it("shoud be able create uuid", () => {
        const uuid = new UUID()

        expect(uuid).toBeInstanceOf(UUID)
        expect(typeof uuid.getValue()).toBe('string')
        expect(uuid.getValue()).toHaveLength(UUID_SIZE)
    })

    it("shoud not be able create invalid uuid", () => {
        expect(() => new UUID('34u129843761298')).toThrow()
    })
})
