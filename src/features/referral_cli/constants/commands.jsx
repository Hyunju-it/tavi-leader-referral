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

      const rows = Object.entries(commands)
          .filter(([name]) => name !== "help")
          .map(([name, { description }]) => {
            const left = "  " + padRight(name, 15);
            const line = `${left} →    ${description}`;
            return line;
          });

      return (
        <div className="max-w-4xl mx-2 md:mx-auto font-mono leading-relaxed space-y-4">
          <div className="mb-4">
            <div className="text-cyan-400 font-semibold mb-1">
              Available Commands:
            </div>
            <div className="text-gray-400 text-xs">
              Use 'command_name' to execute. Tab for autocomplete.
            </div>
          </div>

          <div className="bg-gray-950 p-3 border-l-2 border-cyan-500">
            <div className="space-y-0">
              {rows.map((row, i) => (
                <div key={i} className="text-gray-300 py-0.5">
                  {row}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            → Type a command name and press Enter to execute
          </div>
        </div>
      );
    },
  },
  about: {
    description: "선배의 여정을 돌아봅니다.",
    execute: () => {
      const journeyData = [
        {
          period: "서광원 팀장님 2016.?? - 2025.08.29",
          role: "백엔드 개발자 / 팀장",
          team: "호텔 CMS 개발팀",
          highlights: [
            "TideSquare CMS 프로젝트 리딩 / 전반적인 개발",
            "신규 CMS 연동 / 신규 채널 구축 프로젝트 주도",
            "팀 내 협업 프로세스와 코드 리뷰 문화에 적응"
          ]
        },
        {
          period: "이현주 2024.10 - 2025.08",
          role: "주니어 백엔드 개발자",
          team: "여행 플랫폼 서비스팀",
          highlights: [
            "서광원 시니어와 함께 다양한 프로젝트 협업",
            "Kakao 연동, Tripbtoz 파트너 연동 등 외부 시스템 통합",
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
            <div key={i} className="mb-6">
              <div className="mb-2">
                <div className="text-yellow-400 font-semibold">
                  {period.period}
                </div>
                <div className="text-white text-xs">
                  {period.role} @ {period.team}
                </div>
              </div>
              
              <div className="bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2">
                {period.highlights.map((highlight, j) => (
                  <div key={j} className="text-gray-300 py-0.5">
                    • {highlight}
                  </div>
                ))}
              </div>
            </div>
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

      return (
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
          <div className="mb-4">
            <div className="text-cyan-400 font-semibold">Business Impact Analysis</div>
            <div className="text-gray-400 text-xs">Subject: 서광원 | Period: 2023.03 - 2024.08</div>
          </div>

          {impactData.map((item, i) => (
            <div key={i} className="mb-4">
              <div className="mb-1">
                <div className="text-green-400 font-semibold">
                  {item.category}: {item.impact}
                </div>
              </div>
              
              <div className="bg-gray-950 p-3 border-l-2 border-green-500 ml-2">
                {item.details.map((detail, j) => (
                  <div key={j} className="text-gray-300 py-0.5">
                    • {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-6 pt-2 border-t border-gray-700">
            <div className="text-green-400 text-xs">
              ✓ Impact assessment complete. Overall contribution: SIGNIFICANT POSITIVE
            </div>
          </div>
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

      return (
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
          <div className="mb-4">
            <div className="text-cyan-400 font-semibold">Achievements Report</div>
            <div className="text-gray-400 text-xs">Generated: {new Date().toISOString().split('T')[0]}</div>
          </div>

          {achievementsData.map((achievement, i) => (
            <div key={i} className="mb-4">
              <div className="text-yellow-400 font-semibold mb-1">
                {achievement.category}:
              </div>
              <div className="bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2">
                {achievement.items.map((item, j) => (
                  <div key={j} className="text-gray-300 py-0.5">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 pt-2 border-t border-gray-700">
            <div className="text-green-400 text-xs">
              ✓ Report generated successfully. Total categories: {achievementsData.length}
            </div>
          </div>
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
        { title: "MENTORING", desc: ["실질적이고 actionable(실행 가능한) 피드백 제공", "팀원 개개인의 강점을 살리고 부족한 점을 보완하도록 돕는 멘토"] },
        { title: "HUMAN_CARE", desc: ["업무 외적으로도 동료의 상황을 세심하게 살핌", "단순한 팀워크를 넘어 \"함께 일하고 싶은 팀 분위기\"를 만들어냄"] }
      ];

      return (
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
          <div className="mb-4">
            <div className="text-cyan-400 font-semibold">Recommendation Report</div>
            <div className="text-gray-400 text-xs">Subject: 서광원 | Evaluator: 후배 개발자</div>
          </div>

          <div className="mb-6">
            <div className="text-white font-semibold mb-2">Executive Summary:</div>
            <div className="bg-gray-950 p-3 border-l-2 border-cyan-500">
              <div className="text-gray-300 leading-relaxed">
                서광원 님은 제가 경험한 동료 중 최고의 커뮤니케이터이자 협업형 리더입니다.<br/>
                수많은 동료들과 함께했지만, 커뮤니케이션과 협업 역량에서 서광원 님만큼 뛰어난 분은 없었습니다.<br/><br/>
                선배님은 단순히 의견을 맞추는 수준을 넘어서, 이해관계가 다른 사람들까지 빠르게 한 방향으로 모아내는 힘이 있었습니다.
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-white font-semibold mb-2">Core Competencies:</div>
          </div>

          {strengthsData.map((strength, i) => (
            <div key={i} className="mb-4">
              <div className="text-green-400 font-semibold mb-1">
                {strength.title}:
              </div>
              <div className="bg-gray-950 p-3 border-l-2 border-green-500 ml-2">
                {strength.desc.map((desc, j) => (
                  <div key={j} className="text-gray-300 py-0.5">
                    • {desc}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-6 pt-2 border-t border-gray-700">
            <div className="text-green-400 text-xs">
              ✓ Recommendation: STRONGLY POSITIVE | Confidence: HIGH
            </div>
          </div>
        </div>
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
        <div className="font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4">
          <div className="mb-4">
            <div className="text-cyan-400 font-semibold">Personal Message</div>
            <div className="text-gray-400 text-xs">From: 후배 | To: 광원님</div>
          </div>

          <div className="space-y-4">
            {messages.map((message, i) => (
              <div key={i} className="flex">
                <div className="text-yellow-400 mr-3 font-mono text-xs mt-1">
                  [{(i + 1).toString().padStart(2, '0')}]
                </div>
                <div className="text-gray-300 leading-relaxed flex-1">
                  {message}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-2 border-t border-gray-700">
            <div className="text-center">
              <div className="text-magenta-400 text-xs">
                ◆ 언제나 응원하고 있습니다 ◆
              </div>
            </div>
          </div>
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