export class AppointmentTimeDailyFourException extends Error {
    constructor() {
        super("limit max to mark in daily point is 4");
    }
}
