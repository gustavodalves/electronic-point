export class Milliseconds {
    constructor(readonly value: number) {}

    toSeconds() {
        return new Seconds(this.value / 1000);
    }

    toMinutes() {
        return new Minutes(this.value / (1000 * 60));
    }

    toHours() {
        return new Hours(this.value / (1000 * 60 * 60));
    }
}

export class Seconds {
    constructor(readonly value: number) {}

    toMilliseconds() {
        return new Milliseconds(this.value * 1000);
    }

    toMinutes() {
        return new Minutes(this.value / 60);
    }

    toHours() {
        return new Hours(this.value / 3600);
    }
}

export class Minutes {
    constructor(readonly value: number) {}

    toMilliseconds() {
        return new Milliseconds(this.value * 60 * 1000);
    }

    toSeconds() {
        return new Seconds(this.value * 60);
    }

    toHours() {
        return new Hours(this.value / 60);
    }
}

export class Hours {
    constructor(readonly value: number) {}

    toMilliseconds() {
        return new Milliseconds(this.value * 60 * 60 * 1000);
    }

    toSeconds() {
        return new Seconds(this.value * 3600);
    }

    toMinutes() {
        return new Minutes(this.value * 60);
    }
}
