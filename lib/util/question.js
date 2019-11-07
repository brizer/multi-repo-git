const inquirer = require("inquirer");

const generateInput = (name, message) => {
  return defaultAnswer => ({
    type: "input",
    name,
    message,
    default: defaultAnswer
  });
};

const generateSelect = name => message => choices => ({
  type: "list",
  name,
  message,
  choices
});

const generateCheckbox = name => message => choices => ({
  type: "checkbox",
  name,
  message,
  choices
});

async function getProjectName() {
  const prompt = inquirer.createPromptModule();
  const message = "What name would you like to use for the new project?";
  const questions = [generateInput("name", message)("mrgx")];
  const answers = await prompt(questions);
  return answers;
}

async function getPackageManager() {
  const questions = [
    generateSelect("package-manager")("Choose packageManager")(["npm", "bower"])
  ];
  const prompt = inquirer.createPromptModule();
  return await prompt(questions);
}

async function getConfigBackup(list) {
  const chooses = [
    generateCheckbox("projects")("Choose some project from backup list")(list)
  ];
  const prompt = inquirer.createPromptModule();
  return await prompt(chooses);
}

module.exports = {
  generateInput,
  generateSelect,
  generateCheckbox,
  getProjectName,
  getPackageManager,
  getConfigBackup
};
