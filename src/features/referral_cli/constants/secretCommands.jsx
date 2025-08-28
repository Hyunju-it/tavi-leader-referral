import { motion } from 'framer-motion';

export const secretCommands = {
  sorry: {
    description: "전하지 못했던 미안함을 조심스레 풀어놓습니다.",
    execute: () => {
      const sorryMessages = [
        "광원님이 저를 믿고 직접 팀으로 데려와 주셨는데, 그 믿음에 걸맞은 모습을 끝내 증명하지 못했습니다.",
        "돌이켜보면, 개발자로 살아온 시간 중 지난 1년은 제게 가장 퍼포먼스가 낮았던 해였습니다.",
        "계속되는 주변의 부정적인 변화에 제대로 적응하지 못했고, 그로 인한 멘탈 저하와 아웃풋의 감소가 큰 스트레스로 다가왔습니다.",
        "자존감은 바닥을 치고, 스스로를 의심하는 시간이 많았으며, 멘탈은 단 한 번도 제대로 붙잡지 못했습니다.",
        "그래서 겁이 많아지고 지나치게 신중해졌으며, 제 분위기 자체가 부정적으로 비쳤을까 가장 미안합니다.",
        "스스로를 믿지 못한 탓에 점점 더 소극적이 되었고, 아무것도 하지 못한 채 흘려보낸 한 해로 남아 지금도 크게 후회됩니다.",
        "원래는 무언가를 파악하고 개선하는 걸 좋아하고 잘하는 편이었는데, '나는 못한다'는 생각이 너무 강해져 버렸습니다.",
        "그 불안과 자기의심 때문에 코드를 작성하는 것도, 도메인을 이해하는 것도 두려움으로 바뀌었고, 결국 미루는 일이 많아졌습니다.",
        "노력은 했지만, '최선이었다'고 자신 있게 말할 수 있는 결과가 없었다는 사실이 더욱 죄송합니다.",
        "현재도 다 이겨내진 못했지만, 지금의 제가 개발자 초기 1~2년에 할 수 있던 것보다 더 많은 것을 못하고있거든요.",
        "사실 믿기지 않겠지만, 저는 창업 경험에서 비롯된 프로덕트 마인드, 프론트와 백엔드를 함께 다루며 초기 기능을 빠르게 만들어 검증하는 능력, 다양한 사람들과 협업하며 개선점을 찾고 시스템을 고도화하는 힘 등 여러 강점을 가진 사람이었습니다.",
        "그러나 지난 1년은 그 어떤 것도 제대로 보여드리지 못한 시기였고, 결국 제 진짜 모습은 드러나지 못한 채 아쉬움만 남았습니다.",
        "그럼에도 불구하고, 광원님 덕분에 저는 가장 오래 남을 배움을 얻었습니다.",
        "\"이 사람처럼 일해야, 같이 일하고 싶고, 함께 성장하는 동료가 될 수 있구나.\"",
        "저는 언젠가 광원님처럼 남들이 함께 일하고 싶어하는, 배려와 신뢰로 팀을 키우는 사람이 되고 싶습니다.",
        "그리고 만약 다시 한 번 함께할 기회가 주어진다면, 그때는 지금의 모든 흔들림을 극복한 제가, 광원님께 다른사람이 왜 입사 당시 제가 꼭 함께 일하고 싶었던 사람이었는지를 반드시 보여드리겠습니다.",
        "광원님, 진심으로 감사합니다. 그리고 죄송합니다."
      ];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 60 }}
            className="text-center mb-12"
          >
            <motion.div
              className="text-3xl font-bold mb-6 text-red-400"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(248, 113, 113, 0.5)",
                  "0 0 20px rgba(248, 113, 113, 0.8)",
                  "0 0 10px rgba(248, 113, 113, 0.5)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              😢 미안함 😢
            </motion.div>
            <motion.div
              className="text-lg text-red-300"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              전하지 못했던 마음을...
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {sorryMessages.map((message, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ 
                  delay: 0.8 + i * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 25
                }}
                className="relative p-6 rounded-xl bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20 border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.01,
                  x: 10,
                  boxShadow: "0 10px 30px rgba(248, 113, 113, 0.1)" 
                }}
              >
                <motion.div
                  className="absolute -left-3 top-4"
                  animate={{ 
                    y: [0, -3, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5,
                    delay: i * 0.2 
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500/60 to-pink-500/60 flex items-center justify-center">
                    <motion.span 
                      className="text-xs"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      💧
                    </motion.span>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="text-[#d0cde1] leading-relaxed text-sm pl-6"
                >
                  {message}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, type: "spring", stiffness: 80 }}
            className="text-center mt-12"
          >
            <motion.div
              className="text-2xl mb-4"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              🙏
            </motion.div>
          </motion.div>
        </motion.div>
      );
    },
  },
  thankyou: {
    description: "진심을 담아 전하는 감사의 말을 꺼내놓습니다.",
    execute: () => {
      const thankYouMessages = [
        "광원님, 제가 늘 신중하다 못해 겁에 질려 주저할 때마다, 누구보다 침착하게 제 옆에 서서 함께 바라봐 주셨습니다.",
        "저 혼자서 모든 걸 감당해야 한다고 착각했을 때도, 광원님은 조용히 균형을 잡아주셨습니다.",
        "그 순간마다 제 마음은 한결 가벼워졌고, 혼자가 아니라는 든든함을 깊이 느낄 수 있었습니다.",
        "저는 광원님을 통해 커뮤니케케이션과 협업이 단순한 기술이 아니라, 팀을 움직이는 원동력이라는 걸 배웠습니다.",
        "리소스를 파악하고, 요구사항을 정리하며, 팀의 역사를 기억하고, 결국 결정을 내리는 그 모든 과정을 책임지는 모습은 제게 큰 울림이었습니다.",
        "그 과정에서 광원님은 단순히 일을 해결한 것이 아니라, 모두가 같은 방향을 바라보도록 만들어주셨습니다.",
        "지금까지 함께한 동료들 중에서도 이런 역량은 광원님이 단연 최고였습니다.",
        "제가 스스로를 탓하며 위축될 때조차, 광원님은 그 책임을 제게만 두지 않으셨습니다.",
        "대신 다시는 같은 문제가 반복되지 않도록 시스템을 고치고 구조를 세우는 방식으로 풀어내셨습니다.",
        "그때 저는 문제를 탓하는 것이 아니라, 더 나은 길을 만드는 태도가 진짜 리더십임을 배웠습니다.",
        "이건 단순히 일하는 방식의 차이가 아니라, 사람을 대하는 태도의 차이라는 걸 몸으로 느꼈습니다.",
        "그리고 사소한 듯 보이지만, 제게는 가장 큰 힘이 된 장면들이 있습니다.",
        "제가 앞에 나서기 어려워한다는 걸 아시고 언제나 먼저 앞을 지켜주신 일들입니다.",
        "그 배려 덕분에 저는 뒤에서 제 역할에 온전히 집중할 수 있었고, 그 작은 보호막 안에서 더 성장할 수 있었습니다.",
        "겉으로 드러나지 않는 배려였지만, 그 순간들이 모여 제 마음을 단단하게 만들어 주었습니다.",
        "결국 제게 오래 남은 배움은 이것 하나입니다.",
        "\"나도 언젠가, 광원님처럼 함께 일하고 싶은 사람, 배려와 신뢰로 팀을 성장시키는 사람이 되어야겠다.\"",
        "제가 어떤 상황에서도 잊지 말아야 할 기준이 되어 주셨습니다.",
        "그 태도를 곁에서 지켜볼 수 있었다는 사실 자체가 제게는 가장 큰 선물이었습니다.",
        "광원님, 진심으로 감사합니다."
      ];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 60 }}
            className="text-center mb-12"
          >
            <motion.div
              className="text-3xl font-bold mb-6 text-green-400"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(34, 197, 94, 0.5)",
                  "0 0 20px rgba(34, 197, 94, 0.8)",
                  "0 0 10px rgba(34, 197, 94, 0.5)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🙏 감사함 🙏
            </motion.div>
            <motion.div
              className="text-lg text-blue-300"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              진심으로 전하고 싶은 마음을...
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {thankYouMessages.map((message, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50, rotateY: -45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ 
                  delay: 0.8 + i * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 25
                }}
                className="relative p-6 rounded-xl bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-green-900/20 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.01,
                  x: -10,
                  boxShadow: "0 10px 30px rgba(96, 165, 250, 0.1)" 
                }}
              >
                <motion.div
                  className="absolute -right-3 top-4"
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5,
                    delay: i * 0.2 
                  }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500/60 to-cyan-500/60 flex items-center justify-center"
                    whileHover={{ scale: 1.3 }}
                  >
                    <span className="text-xs">💙</span>
                  </motion.div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="text-[#d0cde1] leading-relaxed text-sm pr-6"
                >
                  {message}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, type: "spring", stiffness: 80 }}
            className="text-center mt-12"
          >
            <motion.div
              className="text-4xl mb-4"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              💝
            </motion.div>
            <motion.p
              className="text-[#93c5fd] text-lg font-bold"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              마음 깊이 감사드립니다 🌟
            </motion.p>
          </motion.div>
        </motion.div>
      );
    },
  },
};