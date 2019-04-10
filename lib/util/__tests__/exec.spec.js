const exec = require("../exec");

describe("exec", () => {
  test("exec success", async () => {
    let result = await exec.exec({ cmd: "pwd" });
    expect(result).toEqual(process.cwd());
  });
});
