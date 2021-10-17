const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("init", () => {
        it("should create an instance of an engineer when we call it with the new keyword", () => {
            const engineer1 = new Engineer("Brad", 123, "bodell94@yahoo.com", "BradMW");
            expect(engineer1.name).toEqual("Brad");
            expect(engineer1.id).toEqual(123);
            expect(engineer1.email).toEqual("bodell94@yahoo.com");
            expect(engineer1.gitHub).toEqual("BradMW");
        })
    })
    describe("getName", () => {
        it("should get the name of the engineer that was created", () => {
            const engineer2 = new Engineer("Brad", 123, "bodell94@yahoo.com", "BradMW");
            const result = engineer2.getName();
            expect(result).toEqual("Brad");
        })
    })

    describe("getId", () => {
        it("should get the ID of the engineer that was created", () => {
            const engineer3 = new Engineer("Brad", 123, "bodell94@yahoo.com", "BradMW");
            const result = engineer3.getId();
            expect(result).toEqual(123);
        })
    })

    describe("getEmail", () => {
        it("should get the email of the engineer that was created", () => {
            const engineer4 = new Engineer("Brad", 123, "bodell94@yahoo.com", "BradMW");
            const result = engineer4.getEmail();
            expect(result).toEqual("bodell94@yahoo.com");
        })
    })

    describe("getRole", () => {
        it("should get the role of the engineer that was created", () => {
            const engineer5 = new Engineer("Brad", 123, "bodell94@yahoo.com", "BradMW");
            const result = engineer5.getRole();
            expect(result).toEqual("Engineer");
        })
    })

    describe("getGitHub", () => {
        it("should get the github of the engineer that was created", () => {
            const engineer6 = new Engineer("Brad", 123, "bodell94@yahoo.com", "BradMW");
            const result = engineer6.getGithub();
            expect(result).toEqual("BradMW");
        })
})
})