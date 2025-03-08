const request = require("supertest");
const app = require("../src/app");

describe("Contact API", () => {
  it("should fetch all contacts", async () => {
    const res = await request(app).get("/contacts");
    expect(res.statusCode).toEqual(200);
  });
});
