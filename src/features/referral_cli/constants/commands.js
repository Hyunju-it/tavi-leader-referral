import stringWidth from "string-width";

export const commands = {
  help: {
    description: "사용 가능한 모든 명령어를 보여줍니다.",
    execute: () => {

      // 표시폭(terminal columns) 계산 헬퍼
      const sw = (s) => stringWidth(s, { ambiguousIsNarrow: true });

      // 표시폭 기준 오른쪽 패딩
      const padRight = (str, targetWidth) => {
        const len = sw(str.replace(/[가-힣]/g, 'z'));
        return str + " ".repeat(Math.max(0, targetWidth - len));
      };

      const width = 60; // 테두리 안쪽 콘텐츠 폭(표시폭 기준)
      const top    = "╔" + "═".repeat(width) + "╗";
      const middle = "╚" + "═".repeat(width) + "╝";
      const bottom = "╚" + "═".repeat(width) + "═";

      // 헤더
      const header = "║" + padRight(" Commands", width) + "║";

      // 왼쪽 컬럼 폭(표시폭 기준)
      const cmdCol = 15; // command 이름 영역
      const arrow  = " →    ";

      const rows = Object.entries(commands)
          .filter(([name]) => name !== "help")
          .map(([name, { description }]) => {
            const left = "  " + padRight(name, cmdCol); // "  " + command 15칸
            const line = `${left}${arrow}${description}`;
            return "║" + padRight(line, width) ;
          });

      return [top, header, middle, ...rows, bottom].join("\n");
    },
  },
  journey: {
    description: "선배의 여정을 돌아봅니다.",
    execute: () => "__JOURNEY__",
  },
  impact: {
    description: "조직에 남긴 대표적인 성과를 기록합니다.",
    execute: () => "__IMPACT__",
  },
  achievements: {
    description: "세부적인 업적과 기여를 나열합니다.",
    execute: () => "__ACHIEVEMENTS__",
  },
  recommend: {
    description: "이 분의 역량과 추천 사유를 기록합니다.",
    execute: () => `서광원 님은 제가 경험한 동료 중 최고의 커뮤니케이터이자 협업형 리더입니다.
수많은 동료들과 함께했지만, 커뮤니케이션과 협업 역량에서 서광원 님만큼 뛰어난 분은 없었습니다.

선배님은 단순히 의견을 맞추는 수준을 넘어서, 이해관계가 다른 사람들까지 빠르게 한 방향으로 모아내는 힘이 있었습니다.
특히 위기 상황에서도 흔들리지 않고 팀이 혼란에 빠지지 않도록 잡아주었고, 모두가 자신감을 잃지 않게 만들어 주는 장면을 여러 번 봤습니다.
이런 순간들을 직접 경험했기에, 갈등을 풀고 팀의 사기를 지켜내는 그의 능력은 정말 흔치 않은 강점이라고 확신합니다.

이러한 리더십과 협업 능력을 바탕으로, 저는 서광원 님의 장점을 다음과 같은 대표 키워드로 정리하고 싶습니다.

💎 책임감
어떤 상황에서도 맡은 일을 끝까지 책임지고 완수
동료들에게 안정감과 신뢰를 주는 든든한 리더

🤝 협업 & 소통
다양한 의견을 열린 마음으로 경청하고 조율
갈등 상황에서도 빠르게 합의점을 찾아내는 능력
동료들의 목소리를 존중하며 모두가 기여할 수 있는 분위기 조성

🧭 리더십
위기 상황에서도 침착함을 잃지 않고 방향 제시
역할을 명확히 나눠주어 혼란 최소화, 팀의 자신감 극대화
스스로 책임을 지되, 팀원에게 기회를 나누어 성장을 이끈 리더

🌱 피드백 & 코칭
실질적이고 actionable(실행 가능한) 피드백 제공
팀원 개개인의 강점을 살리고 부족한 점을 보완하도록 돕는 멘토
여유가 주어질수록 팀 전체의 성장을 가속화할 분

💡 인간적 배려
업무 외적으로도 동료의 상황을 세심하게 살핌
단순한 팀워크를 넘어 “함께 일하고 싶은 팀 분위기”를 만들어냄`,
  },
  
  epilogue: {
    description: "후배로서 남기고 싶은 마지막 응원을 기록합니다.",
    execute: () => `많은 면접을 거치며 다양한 피드백을 얻고, 스스로도 깊은 성찰을 하신 걸 보았습니다.
그 과정에서 때로는 부족한 점에 마음이 더 쏠리기도 하지만, 사실 이미 충분히 큰 강점들을 지니고 계심을 잊지 않으셨으면 합니다.

하지만 저는 누구보다 가까이에서,
서광원 님이 얼마나 뛰어난 역량과 책임감을 발휘해오셨는지를 보아왔습니다.

선배님은 이미 충분히 대단한 분이고,
이번 경험들은 앞으로 더 큰 가능성을 쌓아가는 밑거름이 될 것이라 믿습니다.

제가 이 CLI를 만든 이유는 단순합니다. 
저와 함께한 시간 동안 확인한 선배님의 진짜 가치와 영향력을 다른 이들에게도 전하고 싶은 마음에서 남깁니다.`,
  }
};
