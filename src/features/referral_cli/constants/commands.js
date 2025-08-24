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
  stars: {
    description: "✨✨✨ Look at the galaxy shine ✨✨✨",
    execute: () => "✨✨✨ Look at the galaxy shine ✨✨✨",
  },
  hi: {
    description: "🙏 Thank you for being here. Your presence is appreciated!",
    execute: () => "🙏 Thank you for being here. Your presence is appreciated!",
  },
  journey: {
    description: "__JOURNEY__",
    execute: () => "__JOURNEY__",
  },
  clear: {
    description: "Clear the terminal screen.",
    execute: () => "__CLEAR__",
  },
  loading: {
    description: "__LOADING__",
    execute: () => "__LOADING__",
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
  quote: {
    description: "__QUOTE__",
    execute: () => "__QUOTE__",
  },
  thankyou: {
    description: "__THANKYOU__",
    execute: () => "__THANKYOU__",
  },
  leader: {
    description: "__LEADER__",
    execute: () => "__LEADER__",
  },
  recommend: {
    description: "__RECOMMEND__",
    execute: () => "__RECOMMEND__",
  },
  epilogue: {
    description: "__EPILOGUE__",
    execute: () => "__EPILOGUE__",
  },
  thanks: {
    description: "__THANKS__",
    execute: () => "__THANKS__",
  },
  sorry: {
    description: "__SORRY__",
    execute: () => "__SORRY__",
  },
  tmi: {
    description: "__TMI__",
    execute: () => "__TMI__",
  },
  farewell: {
    description: "__FAREWELL__",
    execute: () => "__FAREWELL__",
  },
};
