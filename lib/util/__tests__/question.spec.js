const { generateInput, generateSelect, generateCheckbox } = require("../question");

describe("question", () => {
  describe("generateInput", () => {
    it("should return an input question", () => {
      const input = {
        name: "name",
        value: "test"
      };
      const message = "name:";
      const question = generateInput(input.name, message)("name");
      expect(question).toEqual({
        type: "input",
        name: "name",
        message,
        default: "name"
      });
    });
  });
  describe("generateSelect", () => {
    it("should return a select question", () => {
      const choices = ["choiceA", "choiceB", "choiceC"];
      const question = generateSelect("name")("message")(choices);
      expect(question).toEqual({
        type: "list",
        name: "name",
        message: "message",
        choices
      });
    });
  });
  describe("generateCheckbox", () => {
    it("should return a check question", () => {
      const choices = ["choiceA", "choiceB", "choiceC"];
      const question = generateCheckbox("name")("message")(choices);
      expect(question).toEqual({
        type: "checkbox",
        name: "name",
        message: "message",
        choices
      });
    });
  });
});
