export class DateComparer {
    isSameDay(
        date1: Date,
        date2: Date
    ) {
        const appointmentDate = date1.getDate();
        const inputDate = date2.getDate();
        const appointmentMonth = date1.getMonth();
        const inputMonth = date2.getMonth();
        const appointmentYear = date1.getFullYear();
        const inputYear = date2.getFullYear();

        return (
            appointmentDate === inputDate &&
            appointmentMonth === inputMonth &&
            appointmentYear === inputYear
        );
    }
}