export const commands = {
  help: {
    description: "사용 가능한 모든 명령어를 보여줍니다.",
    execute: () => {
      const commandList = Object.entries(commands)
        .map(([command, { description }]) => `  ${command.padEnd(15)} ${description}`)
        .join("\n");
      return `Available commands:\n${commandList}`;
    },
  },
  about: {
    description: "이 CLI의 목적과 헌정 배경을 소개합니다. 🌌",
    execute: () => "This is a fake CLI running inside your browser 🌌",
  },
  journey: {
    description: "선배가 걸어온 길을 따라가봅니다.",
    execute: () => "__JOURNEY__",
  },
  clear: {
    description: "터미널 화면을 초기화합니다.",
    execute: () => "__CLEAR__",
  },
  impact: {
    description: "팀과 회사에 남긴 흔적과 울림을 되새깁니다.",
    execute: () => "__IMPACT__",
  },
  recommend: {
    description: "이 분과 함께할 기회가 얼마나 큰 행운인지 전합니다.",
    execute: () => "__RECOMMEND__",
  },
  mentor: {
    description: "후배들에게 남긴 말과 조언을 다시 들어봅니다.",
    execute: () => "__MENTOR__",
  },
  sorry: {
    description: "전하지 못했던 미안함을 조심스레 풀어놓습니다.",
    execute: () => "__SORRY__",
  },
  thankyou: {
    description: "진심을 담아 전하는 감사의 말을 꺼내놓습니다.",
    execute: () => "__THANKYOU__",
  },
  tmi: {
    description: "웃음 섞인 기억과 소소한 TMI들을 남겨봅니다.",
    execute: () => "__TMI__",
  },
  epilogue: {
    description: "후배로서 남기고 싶은 마지막 고백을 기록합니다.",
    execute: () => "__EPILOGUE__",
  }
};
