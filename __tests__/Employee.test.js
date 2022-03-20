const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        // Test for all use cases when initializing a new Employee object
        it("should create an object with a name, id, and an email address if provided the valid string arguments", () => {
            let employee = new Employee("Louis", "1", "louis@fakemail.com");

            // Verify that the newly-created object has the correct properties
            expect(employee.name).toEqual("Louis");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("louis@fakemail.com");
        });
    });

    describe("getName", () => {
        it("should return the employee's name value", () => {
            let employee = new Employee("Joe", "2", "joe@fakemail.com");

            // Verify that the newly-created object's method returns the correct value
            expect(employee.getName()).toEqual("Joe");
        });
    });

    describe("getId", () => {
        it("should return the employee's id value", () => {
            let employee = new Employee("Bud", "3", "bud@fakemail.com");

            // Verify that the newly-created object's method returns the correct value
            expect(employee.getId()).toEqual("3");
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            let employee = new Employee("Pam", "4", "pam@fakemail.com");

            // Verify that the newly-created object's method returns the correct value
            expect(employee.getEmail()).toEqual("pam@fakemail.com");
        });
    });

    describe("getRole", () => {
        it("should return the employee's role (class)", () => {
            let employee = new Employee("Johnny", "5", "johnny@fakemail.com");

            // Verify that the newly-created object's method returns the correct value
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});