import { AggregateRoot } from "./aggregate"

export interface Repository<T extends AggregateRoot> {
    add(aggregate: T): Promise<void>
    get(id: string): Promise<T>
}
