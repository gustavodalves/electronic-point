import * as crypto from "crypto";

export class UUID {
    protected readonly value: string

    constructor(
        value?: string
    ) {
        if(value) {
            this.validateUUID(value)
        }
        this.value = value || this.generateUUID()
    }

    getValue() {
        return this.value
    }

    private generateUUID() {
        return crypto.randomUUID()
    }

    private validateUUID(uuid: string) {
        const uuidRegex: RegExp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

        if(!uuidRegex.test(uuid)) {
            throw new Error("uuid is not valid")
        }
    }
}
