# Electronic Point

This time tracking system is designed to manage employee attendance efficiently. The project adheres to clean code practices, follows Domain-Driven Design (DDD) principles, and emphasizes a clear separation of concerns.

## Project Structure

The project comprises several components, each serving a specific purpose:

### 1. EmployeeId
- **Description:** `EmployeeId` serves as a unique identifier for each employee in the system.
- **Importance:** Ensures that each employee is uniquely identified, simplifying system-wide referencing and data integrity.

### 2. Employee
- **Description:** The `Employee` class represents an employee in the time tracking system, capturing details such as their ID, associated user ID, workdays, and the expected daily work hours.
- **Importance:** Centralizes information related to a specific employee, enhancing code readability, maintainability, and scalability.

### 3. AppointmentTime
- **Description:** `AppointmentTime` represents a specific moment in time, associated with a type (either entry or exit).
- **Importance:** A value object encapsulating information about a specific time and the associated type of appointment, facilitating the manipulation and understanding of employee entry and exit times.

### 4. AppointmentTimeTypeEnum
- **Description:** An enumeration defining the types of appointments (in or out).
- **Importance:** Enhances code readability and reduces typing errors by providing a clear and centralized definition of appointment types.

### 5. Workday
- **Description:** The `Workday` class represents a day of work for an employee, containing a list of appointment times (either entry or exit).
- **Importance:** Encapsulates the logic associated with a single workday, including constraints such as the daily limit of appointments. Contributes to a modular and cohesive design.
