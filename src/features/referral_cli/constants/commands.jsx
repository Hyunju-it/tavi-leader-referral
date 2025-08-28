import stringWidth from "string-width";
import { motion } from 'framer-motion';
import NumberedTypingEffect from '../components/NumberedTypingEffect';

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
        <div className="max-w-4xl mx-2 md:mx-auto font-mono leading-relaxed space-y-4">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-cyan-400 font-semibold mb-1">
              Available Commands:
            </div>
            <div className="text-gray-400 text-xs">
              Use 'command_name' to execute. Tab for autocomplete.
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-950 p-3 border-l-2 border-cyan-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="space-y-0">
              {rows.map((row, i) => (
                <motion.div 
                  key={i} 
                  className="text-gray-300 py-0.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: 0.4 + i * 0.08,
                    ease: "easeOut"
                  }}
                >
                  {row}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-3 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + rows.length * 0.08 }}
          >
            → Type a command name and press Enter to execute
          </motion.div>
        </div>
      );
    },
  },
  about: {
    description: "선배를 소개합니다.",
    execute: () => {
      const journeyData = [
        {
          period: "서광원 팀장님 2016.xx - 2025.08.29",
          role: "백엔드 개발자 / 팀장",
          team: "호텔 CMS 개발팀",
          highlights: [
            "TideSquare CMS 프로젝트 총괄 및 전반적인 개발 주도",
            "신규 CMS 연동 및 판매채널 구축 프로젝트 리딩",
            "팀 내 협업 프로세스와 코드 리뷰 문화에 적응"
          ]
        },
        {
          period: "이현주 2024.10 - 2025.08",
          role: "주니어 백엔드 개발자",
          team: "호텔 CMS 개발팀",
          highlights: [
            "서광원 팀장님과 함께 다양한 프로젝트 협업",
            "Kakao 및 Tripbtoz, Yanolja 등 외부 파트너 연동 개발",
            "운영 이슈 해결 및 시스템 안정성 개선 경험 축적"
          ]
        }
      ];

      return (
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
          <div className="mb-4">
            <div className="text-cyan-400 font-semibold">Career About Report</div>
            <div className="text-gray-400 text-xs">Subject: 서광원 | Timeline: Professional Experience</div>
          </div>

          {journeyData.map((period, i) => (
            <motion.div 
              key={i} 
              className="mb-6"
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + i * 0.4,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.4 }}
              >
                <div className="text-yellow-400 font-semibold">
                  {period.period}
                </div>
                <div className="text-white text-xs">
                  {period.role} @ {period.team}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.4 }}
              >
                {period.highlights.map((highlight, j) => (
                  <motion.div 
                    key={j} 
                    className="text-gray-300 py-0.5"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.8 + i * 0.4 + j * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    • {highlight}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          <div className="mt-6 pt-2 border-t border-gray-700">
            <div className="text-cyan-400 text-xs">
              ✓ Career progression documented. Total experience: 8+ years
            </div>
          </div>
        </div>
      );
    },
  },
  impact: {
    description: "조직에 남긴 대표적인 성과를 기록합니다.",
    execute: () => {
      const impactData = [
        {
          category: "REVENUE_GROWTH",
          impact: "매출 성장 기여",
          details: [
            "신규 채널 확장 프로젝트 6건을 통한 매출 다각화",
            "파트너 연동 시스템으로 수익원 확장",
            "서비스 안정성 향상으로 고객 이탈 방지"
          ]
        },
        {
          category: "OPERATIONAL_EFFICIENCY",
          impact: "운영 효율성 극대화",
          details: [
            "운영 프로세스 자동화 10건으로 리소스 절약",
            "SQL 쿼리 최적화로 응답속도 90% 단축",
            "재작업 최소화로 개발 생산성 향상"
          ]
        },
        {
          category: "SYSTEM_RELIABILITY",
          impact: "시스템 안정성 강화",
          details: [
            "마감/취소/정산 로직 강화로 오류 방지",
            "트래픽 처리 개선으로 서비스 중단 최소화",
            "오류 예방 시스템 구축으로 사전 대응 체계 확립"
          ]
        },
        {
          category: "CUSTOMER_SATISFACTION",
          impact: "고객 만족도 개선",
          details: [
            "고객 피드백 반영 9건으로 사용성 향상",
            "파트너 요구사항 적극 수용으로 파트너십 강화",
            "서비스 확장 기능 7건으로 고객 선택권 확대"
          ]
        }
      ];

      const animationKey = `impact-${Date.now()}`;
      
      return (
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4" key={animationKey}>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="text-cyan-400 font-semibold"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Business Impact Analysis
            </motion.div>
            <motion.div 
              className="text-gray-400 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              Subject: 서광원 | Period: 2023.03 - 2024.08
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              height: [0, "auto", "auto", 0],
              marginBottom: [0, 16, 16, 0]
            }}
            transition={{ 
              delay: 0.6, 
              duration: 2.4,
              times: [0, 0.2, 0.8, 1]
            }}
            className="text-sm text-gray-400 flex items-center space-x-2 overflow-hidden"
          >
            <motion.div
              className="w-4 h-4 border-2 border-gray-400 border-t-cyan-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.8 
              }}
            />
            <span>Analyzing organizational impact metrics...</span>
          </motion.div>

          {impactData.map((item, i) => (
            <motion.div 
              key={i} 
              className="mb-4"
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 3.2 + i * 0.3, // 로딩 메시지 사라진 후 시작
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4 + i * 0.3, duration: 0.3 }}
              >
                <motion.div 
                  className="text-green-400 font-semibold"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ 
                    delay: 3.5 + i * 0.3, 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {item.category}: {item.impact}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-950 p-3 border-l-2 border-green-500 ml-2"
                initial={{ opacity: 0, x: -30, scaleX: 0.8 }}
                animate={{ opacity: 1, x: 0, scaleX: 1 }}
                transition={{ 
                  delay: 3.6 + i * 0.3, 
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                {item.details.map((detail, j) => (
                  <motion.div 
                    key={j} 
                    className="text-gray-300 py-0.5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 3.8 + i * 0.3 + j * 0.1,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <motion.span
                      initial={{ color: "#9ca3af" }}
                      animate={{ color: ["#9ca3af", "#22c55e", "#9ca3af"] }}
                      transition={{ 
                        delay: 4.0 + i * 0.3 + j * 0.1,
                        duration: 0.8,
                        ease: "easeInOut"
                      }}
                    >
                      •
                    </motion.span>
                    <span className="ml-2">{detail}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          <motion.div 
            className="mt-6 pt-2 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5 + impactData.length * 0.3, duration: 0.6 }}
          >
            <motion.div 
              className="text-green-400 text-xs"
              animate={{ 
                textShadow: [
                  "0 0 0px #22c55e",
                  "0 0 10px #22c55e40", 
                  "0 0 0px #22c55e"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 5.0 + impactData.length * 0.3
              }}
            >
              ✓ Impact assessment complete. Overall contribution: SIGNIFICANT POSITIVE
            </motion.div>
          </motion.div>
        </div>
      );
    },
  },
  achievements: {
    description: "세부적인 업적과 기여를 나열합니다.",
    execute: () => {
      const achievementsData = [
        { category: "PROJECT_LAUNCH", items: ["신규 채널 확장 프로젝트 6건", "매출 성장 견인"] },
        { category: "PERFORMANCE_OPT", items: ["SQL 쿼리 최적화 4건", "트래픽 처리 개선 4건", "응답속도 최대 90% 단축"] },
        { category: "AUTOMATION", items: ["운영 프로세스 자동화 10건", "리소스 절감 및 오류 방지", "재작업 최소화"] },
        { category: "NEW_FEATURES", items: ["Kakao 연동 시스템", "Tripbtoz 파트너 연동", "서비스 확장 기능 7건"] },
        { category: "PROCESS_IMPROVE", items: ["마감/취소/정산 로직 강화", "운영 효율화 12건", "시스템 안정성 향상"] },
        { category: "QUALITY_ENHANCE", items: ["고객 피드백 반영 9건", "파트너 요구사항 수용", "오류 예방 시스템 구축"] }
      ];

      const animationKey = `achievements-${Date.now()}`;
      
      return (
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4" key={animationKey}>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-cyan-400 font-semibold">Achievements Report</div>
            <div className="text-gray-400 text-xs">Generated: {new Date().toISOString().split('T')[0]} (Jira 기준)</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              height: [0, "auto", "auto", 0],
              marginBottom: [0, 16, 16, 0]
            }}
            transition={{ 
              delay: 0.6, 
              duration: 2.4,
              times: [0, 0.2, 0.8, 1]
            }}
            className="text-sm text-gray-400 flex items-center space-x-2 overflow-hidden"
          >
            <motion.div
              className="w-4 h-4 border-2 border-gray-400 border-t-yellow-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.8 
              }}
            />
            <span>Analyzing performance metrics...</span>
          </motion.div>

          {achievementsData.map((achievement, i) => (
            <motion.div 
              key={i} 
              className="mb-4"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 3.2 + i * 0.2, // 로딩 완료 후 시작
                duration: 0.4,
                ease: "easeOut" 
              }}
            >
              <motion.div 
                className="text-yellow-400 font-semibold mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.4 + i * 0.2, duration: 0.3 }}
              >
                {achievement.category}:
              </motion.div>
              <motion.div 
                className="bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.5 + i * 0.2, duration: 0.3 }}
              >
                {achievement.items.map((item, j) => (
                  <motion.div 
                    key={j} 
                    className="text-gray-300 py-0.5"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 3.6 + i * 0.2 + j * 0.1,
                      duration: 0.2
                    }}
                  >
                    <motion.span
                      initial={{ color: "#9ca3af" }}
                      animate={{ color: ["#9ca3af", "#eab308", "#9ca3af"] }}
                      transition={{ 
                        delay: 3.7 + i * 0.2 + j * 0.1,
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    >
                      •
                    </motion.span>
                    <span className="ml-2">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          <motion.div 
            className="mt-4 pt-2 border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 + achievementsData.length * 0.2, duration: 0.4 }}
          >
            <motion.div 
              className="text-green-400 text-xs"
              animate={{ 
                textShadow: [
                  "0 0 0px #22c55e",
                  "0 0 8px #22c55e40", 
                  "0 0 0px #22c55e"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 5.0 + achievementsData.length * 0.2
              }}
            >
              ✓ Report generated successfully. Total categories: {achievementsData.length}
            </motion.div>
          </motion.div>
        </div>
      );
    },
  },
  recommend: {
    description: "이 분의 역량과 추천 사유를 기록합니다.",
    execute: () => {
      const strengthsData = [
        { title: "RESPONSIBILITY", desc: ["어떤 상황에서도 맡은 일을 끝까지 책임지고 완수", "동료들에게 안정감과 신뢰를 주는 든든한 리더"] },
        { title: "COLLABORATION", desc: ["다양한 의견을 열린 마음으로 경청하고 조율", "갈등 상황에서도 빠르게 합의점을 찾아내는 능력"] },
        { title: "LEADERSHIP", desc: ["위기 상황에서도 침착함을 잃지 않고 방향 제시", "역할을 명확히 나눠주어 혼란 최소화, 팀의 자신감 극대화"] },
        { title: "MENTORING", desc: ["실질적이고 actionable(실행 가능한) 피드백 제공", "팀원 개개인의 강점을 살리고, 부족한 부분은 채워줄 수 있도록 이끄는 멘토"] },
        { title: "HUMAN_CARE", desc: ["업무 외적으로도 동료의 상황을 세심하게 살핌", "단순한 팀워크를 넘어 \"함께 일하고 싶은 팀 분위기\"를 만들어냄"] }
      ];

      return (
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-cyan-400 font-semibold">Recommendation Report</div>
            <div className="text-gray-400 text-xs">Subject: 서광원 | Evaluator: 후배 개발자</div>
          </motion.div>

          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div 
              className="text-white font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Executive Summary:
            </motion.div>
            <motion.div 
              className="bg-gray-950 p-3 border-l-2 border-cyan-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                  서광원 님은 제가 경험한 동료 중 <span className="text-cyan-400 font-semibold">최고의 커뮤니케이터이자 협업형 리더</span> 입니다.<br/>
                수많은 동료들과 함께했지만, 커뮤니케이션과 협업 역량에서 서광원 님만큼 뛰어난 분은 없었습니다.<br/><br/>
                선배님은 단순히 의견을 맞추는 수준을 넘어서, 이해관계가 다른 사람들까지 빠르게 한 방향으로 모아내는 힘이 있었습니다.
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          >
            <div className="text-white font-semibold mb-2">Core Competencies:</div>
          </motion.div>

          {strengthsData.map((strength, i) => (
            <motion.div 
              key={i} 
              className="mb-4"
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 1.7 + i * 0.15,
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="text-green-400 font-semibold mb-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + i * 0.15, duration: 0.3 }}
              >
                {strength.title}:
              </motion.div>
              <motion.div 
                className="bg-gray-950 p-3 border-l-2 border-green-500 ml-2"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9 + i * 0.15, duration: 0.3 }}
              >
                {strength.desc.map((desc, j) => (
                  <motion.div 
                    key={j} 
                    className="text-gray-300 py-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      delay: 2.0 + i * 0.15 + j * 0.08,
                      duration: 0.3
                    }}
                  >
                    • {desc}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          <motion.div 
            className="mt-6 pt-2 border-t border-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 + strengthsData.length * 0.15, duration: 0.5 }}
          >
            <motion.div 
              className="text-green-400 text-xs"
              animate={{ 
                color: ["#22c55e", "#16a34a", "#15803d", "#22c55e"],
                textShadow: [
                  "0 0 0px #22c55e",
                  "0 0 8px #22c55e", 
                  "0 0 0px #22c55e"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 3.0 + strengthsData.length * 0.15
              }}
            >
              ✓ Recommendation: STRONGLY POSITIVE | Confidence: HIGH
            </motion.div>
          </motion.div>
        </div>
      );
    },
  },
  
  epilogue: {
    description: "후배로서 남기고 싶은 마지막 응원을 기록합니다.",
    execute: () => {
      const messages = [
        "[01] 다양한 과정을 겪으면서 고생하시고, 그에 대한 고민이나 생각을 들으며 걱정했습니다.",
        "[02] 그 과정에서 때로는 부족한 점에 마음이 더 쏠리기도 하지만, 사실 이미 충분히 큰 강점들을 지니고 계심을 잊지 않으셨으면 합니다.",
        "[03] 저는 가까이에서 선배님이 얼마나 뛰어난 역량과 책임감을 보여주셨는지를 계속 보아왔습니다.",
        "[04] 선배님은 이미 충분히 대단한 분이고, 이번 경험들은 앞으로 더 큰 가능성을 쌓아가는 밑거름이 될 것이라 믿습니다.",
        "[05] 다른 사람도 언젠가 이 멋진 점을 알아봐주길 바라며 진심을 다해서 만들었습니다.",
        "",
        "◆ 언제나 응원하고 있습니다 ◆",
        "",
        "[ TMI ]",
        "기획 갈아엎기 3번, 디자인 전체 갈아엎기 2번, 컨셉 갈아엎기 5번, 색상 갈아엎기 3번, 약 1년 6개월 만에 다시 만지는 React...",
        "높은 완성도로 만들고 싶었는데 원하는 만큼 안나온 것 같아서 많이 아쉽습니다."
      ];

      return (
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
          <div className="mb-6">
            <div className="text-cyan-400 font-semibold">Personal Message</div>
            <div className="text-gray-400 text-xs">From: 후배 | To: 광원님</div>
          </div>

          <NumberedTypingEffect 
            messages={messages} 
            typingSpeed={30} 
            lineDelay={800}
            numberColor="text-yellow-400"
          />
        </div>
      );
    },
  },
  
  portfolio: {
    description: "상세한 프로젝트 임팩트 내역을 카테고리별로 출력합니다.",
    execute: async () => {
      try {
        const impactData = await import('../constants/impact.json');
        const data = impactData.default || impactData;
        
        return (
          <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
            <div className="mb-4">
              <div className="text-cyan-400 font-semibold">Detailed Impact Report</div>
              <div className="text-gray-400 text-xs">Source: impact.json | Categories: {data.impact?.length || 0}</div>
            </div>

            {data.impact?.map((category, i) => (
              <div key={i} className="mb-6">
                <div className="mb-2">
                  <div className="text-yellow-400 font-semibold">
                    {category.category}
                  </div>
                  <div className="text-gray-400 text-xs">
                    Items: {category.items?.length || 0}
                  </div>
                </div>
                
                <div className="bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2">
                  {category.items?.map((item, j) => (
                    <div key={j} className="mb-3 pb-2 border-b border-gray-800 last:border-b-0 last:mb-0 last:pb-0">
                      <div className="text-green-400 font-medium mb-1">
                        • {item.title}
                      </div>
                      <div className="text-gray-300 text-sm ml-2">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-6 pt-2 border-t border-gray-700">
              <div className="text-cyan-400 text-xs">
                ✓ Detailed impact data loaded successfully. Use 'impact' for summary view.
              </div>
            </div>
          </div>
        );
      } catch (error) {
        return (
          <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
            <div className="mb-4">
              <div className="text-red-400 font-semibold">Error Loading Impact Data</div>
              <div className="text-gray-400 text-xs">Failed to load impact.json</div>
            </div>
            <div className="bg-gray-950 p-3 border-l-2 border-red-500">
              <div className="text-red-300">
                Error: {error.message}
              </div>
            </div>
          </div>
        );
      }
    },
  }
};