const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        // Test for all use cases when initializing a new Intern object
        it("should create an object with a name, id, and an email address of its parent Employee class and a school name, all strings", () => {
            let intern = new Intern("Jill", "7", "jill@fakemail.com", "McMaster University");

            // Verify that the newly-created object has the correct properties of both parent class and the subclass
            expect(intern.name).toEqual("Jill");
            expect(intern.id).toEqual("7");
            expect(intern.email).toEqual("jill@fakemail.com");
            expect(intern.school).toEqual("McMaster University");
        });
    });

    describe("getSchool", () => {
        it("should return the employee's school name", () => {
            let intern = new Intern("Jill", "7", "jill@fakemail.com", "University of Windsor");

            // Verify that the newly-created object's method returns the correct value
            expect(intern.getSchool()).toEqual("McMaster University");
        });
    });

    describe("getRole", () => {
        it("should return the string 'Intern'", () => {
            let intern = new Intern("Jill", "7", "jill@fakemail.com", "McMaster University");

            // Verify that the newly-created object's method returns the correct value
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});