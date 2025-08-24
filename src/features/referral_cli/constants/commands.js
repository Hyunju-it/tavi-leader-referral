export const commands = {
  help: {
    description: "Show available commands.",
    execute: () => {
      const commandList = Object.entries(commands)
        .map(([command, { description }]) => `  ${command.padEnd(15)} ${description}`)
        .join("\n");
      return `Available commands:\n${commandList}`;
    },
  },
  about: {
    description: "This is a fake CLI running inside your browser 🌌",
    execute: () => "This is a fake CLI running inside your browser 🌌",
  },
  journey: {
    description: "__JOURNEY__",
    execute: () => "__JOURNEY__",
  },
  clear: {
    description: "Clear the terminal screen.",
    execute: () => "__CLEAR__",
  },
  legacy: {
    description: "__LEGACY__",
    execute: () => "__LEGACY__",
  },
  impact: {
    description: "__IMPACT__",
    execute: () => "__IMPACT__",
  },
  mentor: {
    description: "__MENTOR__",
    execute: () => "__MENTOR__",
  },
  thankyou: {
    description: "__THANKYOU__",
    execute: () => "__THANKYOU__",
  },
  recommend: {
    description: "__RECOMMEND__",
    execute: () => "__RECOMMEND__",
  },
  epilogue: {
    description: "__EPILOGUE__",
    execute: () => "__EPILOGUE__",
  },
  sorry: {
    description: "__SORRY__",
    execute: () => "__SORRY__",
  },
  tmi: {
    description: "__TMI__",
    execute: () => "__TMI__",
  }
};
