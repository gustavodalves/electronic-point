import { UUID } from "./object-values/id";

export abstract class Entity {
    constructor(
        private readonly id: UUID
    ) {}

    getId() {
        return this.id
    }
}
