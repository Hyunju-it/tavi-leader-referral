import stringWidth from "string-width";
import { motion } from 'framer-motion';

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

      const rows = Object.entries(commands)
          .filter(([name]) => name !== "help")
          .map(([name, { description }]) => {
            const left = "  " + padRight(name, 15);
            const line = `${left} →    ${description}`;
            return line;
          });

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-6"
          >
            <motion.div
              className="text-2xl font-bold text-[#93c5fd] mb-2"
              animate={{ textShadow: ["0 0 10px #93c5fd", "0 0 20px #93c5fd", "0 0 10px #93c5fd"] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🗺️ 여정 탐색 가이드 🗺️
            </motion.div>
            <div className="text-sm text-purple-300">함께 했던 시간들을 되돌아보며...</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6"
          >
            <div className="font-mono text-sm space-y-1">
              {[
                "┌─────────────────────────────────────────────────────────────┐",
                "│                    🌟 여정의 발자취 🌟                    │", 
                "├─────────────────────────────────────────────────────────────┤",
                ...rows.map(row => `│ ${padRight(row, 58)} │`),
                "└─────────────────────────────────────────────────────────────┘"
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className={i === 1 ? "text-[#93c5fd] font-bold" : "text-[#d0cde1]"}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-6"
          >
            <motion.div
              className="text-xs text-purple-300"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              ✨ Tab으로 자동완성 • Enter로 여정 시작 ✨
            </motion.div>
          </motion.div>
        </motion.div>
      );
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
    execute: () => {
      const achievementsData = [
        { category: "🚀 프로젝트 런칭", items: ["신규 채널 확장 프로젝트 6건", "매출 성장 견인"] },
        { category: "⚡ 성능 최적화", items: ["SQL 쿼리 최적화 4건", "트래픽 처리 개선 4건", "응답속도 최대 90% 단축"] },
        { category: "🤖 자동화·최적화", items: ["운영 프로세스 자동화 10건", "리소스 절감 및 오류 방지", "재작업 최소화"] },
        { category: "💡 신규 기능 개발", items: ["Kakao 연동 시스템", "Tripbtoz 파트너 연동", "서비스 확장 기능 7건"] },
        { category: "🛠️ 프로세스 개선", items: ["마감/취소/정산 로직 강화", "운영 효율화 12건", "시스템 안정성 향상"] },
        { category: "🔍 품질 향상", items: ["고객 피드백 반영 9건", "파트너 요구사항 수용", "오류 예방 시스템 구축"] }
      ];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <motion.span
              className="text-2xl font-bold text-[#93c5fd]"
              animate={{ textShadow: ["0 0 10px #93c5fd", "0 0 20px #93c5fd", "0 0 10px #93c5fd"] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🏆 주요 업적 & 기여 🏆
            </motion.span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievementsData.map((achievement, i) => (
              <motion.div
                key={achievement.category}
                initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: i * 0.15, 
                  type: "spring", 
                  stiffness: 100,
                  duration: 0.6 
                }}
                className="p-4 rounded-lg bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-lg font-bold mb-3 text-[#93c5fd]"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                >
                  {achievement.category}
                </motion.div>
                <div className="space-y-2">
                  {achievement.items.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.15 + j * 0.1 }}
                      className="text-[#d0cde1] text-sm flex items-center"
                    >
                      <motion.span
                        className="text-yellow-400 mr-2"
                        animate={{ rotate: [0, 360] }}
                        transition={{ repeat: Infinity, duration: 4, delay: j * 0.5 }}
                      >
                        ✨
                      </motion.span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    },
  },
  recommend: {
    description: "이 분의 역량과 추천 사유를 기록합니다.",
    execute: () => {
      const strengthsData = [
        { emoji: "💎", title: "책임감", desc: ["어떤 상황에서도 맡은 일을 끝까지 책임지고 완수", "동료들에게 안정감과 신뢰를 주는 든든한 리더"] },
        { emoji: "🤝", title: "협업 & 소통", desc: ["다양한 의견을 열린 마음으로 경청하고 조율", "갈등 상황에서도 빠르게 합의점을 찾아내는 능력", "동료들의 목소리를 존중하며 모두가 기여할 수 있는 분위기 조성"] },
        { emoji: "🧭", title: "리더십", desc: ["위기 상황에서도 침착함을 잃지 않고 방향 제시", "역할을 명확히 나눠주어 혼란 최소화, 팀의 자신감 극대화", "스스로 책임을 지되, 팀원에게 기회를 나누어 성장을 이끈 리더"] },
        { emoji: "🌱", title: "피드백 & 코칭", desc: ["실질적이고 actionable(실행 가능한) 피드백 제공", "팀원 개개인의 강점을 살리고 부족한 점을 보완하도록 돕는 멘토", "여유가 주어질수록 팀 전체의 성장을 가속화할 분"] },
        { emoji: "💡", title: "인간적 배려", desc: ["업무 외적으로도 동료의 상황을 세심하게 살핌", "단순한 팀워크를 넘어 \"함께 일하고 싶은 팀 분위기\"를 만들어냄"] }
      ];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-6 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <motion.div
              className="text-lg text-[#93c5fd] mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ⭐ 추천서 ⭐
            </motion.div>
            <div className="text-[#d0cde1] leading-relaxed">
              서광원 님은 제가 경험한 동료 중 최고의 커뮤니케이터이자 협업형 리더입니다.<br/>
              수많은 동료들과 함께했지만, 커뮤니케이션과 협업 역량에서 서광원 님만큼 뛰어난 분은 없었습니다.<br/><br/>
              선배님은 단순히 의견을 맞추는 수준을 넘어서, 이해관계가 다른 사람들까지 빠르게 한 방향으로 모아내는 힘이 있었습니다.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-6"
          >
            <span className="text-lg font-bold text-[#93c5fd]">🌟 핵심 역량</span>
          </motion.div>

          <div className="space-y-4">
            {strengthsData.map((strength, i) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.2, type: "spring", stiffness: 80 }}
                className="p-4 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
              >
                <motion.div
                  className="flex items-center mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="text-2xl mr-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                  >
                    {strength.emoji}
                  </motion.span>
                  <span className="text-xl font-bold text-[#93c5fd]">{strength.title}</span>
                </motion.div>
                <div className="space-y-2 pl-8">
                  {strength.desc.map((desc, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.2 + j * 0.1 }}
                      className="text-[#d0cde1] text-sm leading-relaxed"
                    >
                      • {desc}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    },
  },
  
  epilogue: {
    description: "후배로서 남기고 싶은 마지막 응원을 기록합니다.",
    execute: () => {
      const messages = [
        "많은 면접을 거치며 다양한 피드백을 얻고, 스스로도 깊은 성찰을 하신 걸 보았습니다.",
        "그 과정에서 때로는 부족한 점에 마음이 더 쏠리기도 하지만, 사실 이미 충분히 큰 강점들을 지니고 계심을 잊지 않으셨으면 합니다.",
        "하지만 저는 누구보다 가까이에서, 서광원 님이 얼마나 뛰어난 역량과 책임감을 발휘해오셨는지를 보아왔습니다.",
        "선배님은 이미 충분히 대단한 분이고, 이번 경험들은 앞으로 더 큰 가능성을 쌓아가는 밑거름이 될 것이라 믿습니다.",
        "제가 이 CLI를 만든 이유는 단순합니다. 저와 함께한 시간 동안 확인한 선배님의 진짜 가치와 영향력을 다른 이들에게도 전하고 싶은 마음에서 남깁니다."
      ];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            className="text-center mb-12"
          >
            <motion.div
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              💝 에필로그 💝
            </motion.div>
            <motion.div
              className="text-lg text-[#93c5fd]"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              후배의 마음을 담아...
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            {messages.map((message, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.6 + i * 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="relative p-6 rounded-xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 30px rgba(147, 197, 253, 0.2)" 
                }}
              >
                <motion.div
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: i * 0.5 
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.4 }}
                  className="text-[#d0cde1] leading-relaxed text-base pl-8"
                >
                  {message}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, type: "spring", stiffness: 80 }}
            className="text-center mt-12"
          >
            <motion.div
              className="text-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🌟
            </motion.div>
            <motion.p
              className="text-[#93c5fd] mt-4 font-semibold"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              언제나 응원하고 있습니다! 💪
            </motion.p>
          </motion.div>
        </motion.div>
      );
    },
  }
};
