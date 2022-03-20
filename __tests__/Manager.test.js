const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        // Test for all use cases when initializing a new Manager object
        it("should create an object with a name, id, and an email address of its parent Employee class and a office number, all strings", () => {
            let manager = new Manager("Jared", "42", "jared@fakemail.com", "5");

            // Verify that the newly-created object has the correct properties of both parent class and the subclass
            expect(manager.name).toEqual("Jared");
            expect(manager.id).toEqual("42");
            expect(manager.email).toEqual("jared@fakemail.com");
            expect(manager.officeNumber).toEqual("5");
        });
    });

    describe("getRole", () => {
        it("should return the string 'Manager'", () => {
            let manager = new Manager("Jared", "42", "jared@fakemail.com", "5");

            // Verify that the newly-created object's method returns the correct value
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});