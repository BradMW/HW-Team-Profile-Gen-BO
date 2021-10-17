const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("init", () => {
        it("should create an instance of an employee when we call it with the new keyword", () => {
            const employee1 = new Employee("Brad", 123, "bodell94@yahoo.com");
            expect(employee1.name).toEqual("Brad");
            expect(employee1.id).toEqual(123);
            expect(employee1.email).toEqual("bodell94@yahoo.com");
        })
    })
    describe("getName", () => {
        it("should get the name of the employee that was created", () => {
            const employee2 = new Employee("Brad", 123, "bodell94@yahoo.com");
            const result = employee2.getName();
            expect(result).toEqual("Brad");
        })
    })

    describe("getId", () => {
        it("should get the ID of the employee that was created", () => {
            const employee3 = new Employee("Brad", 123, "bodell94@yahoo.com");
            const result = employee3.getId();
            expect(result).toEqual(123);
        })
    })

    describe("getEmail", () => {
        it("should get the email of the employee that was created", () => {
            const employee4 = new Employee("Brad", 123, "bodell94@yahoo.com");
            const result = employee4.getEmail();
            expect(result).toEqual("bodell94@yahoo.com");
        })
    })

    describe("getRole", () => {
        it("should get the role of the employee that was created", () => {
            const employee5 = new Employee("Brad", 123, "bodell94@yahoo.com");
            const result = employee5.getRole();
            expect(result).toEqual("Employee");
        })
    })
})