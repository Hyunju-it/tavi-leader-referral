import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import ConfettiBoom from 'react-confetti-boom';
import { commands as COMMANDS } from '../constants/commands.jsx';
import { devCommands } from '../constants/devCommands';
import { secretCommands } from '../constants/secretCommands.jsx';
import { availableFonts } from '../utils/fonts';
import TypingEffect from '../components/TypingEffect';

const allCommands = { ...COMMANDS, ...devCommands, ...secretCommands };
const commandList = Object.keys(allCommands);

export const useTerminal = () => {
  const [lines, setLines] = useState([
    <div className="space-y-6 py-6">
      <div className="text-center">
        <pre className="text-cyan-400 font-mono text-sm md:text-base leading-tight">
{`████████╗ █████╗ ██╗   ██╗██╗
╚══██╔══╝██╔══██╗██║   ██║██║
   ██║   ███████║██║   ██║██║
   ██║   ██╔══██║╚██╗ ██╔╝██║
   ██║   ██║  ██║ ╚████╔╝ ██║
   ╚═╝   ╚═╝  ╚═╝  ╚═══╝  ╚═╝`}
        </pre>
        <div className="text-gray-400 text-sm mt-2">
          Seo Gwang-won Professional Reference System v1.0
        </div>
      </div>
      
      <div className="bg-gray-900 border-l-2 border-cyan-500 px-4 py-3 mx-2 md:mx-4">
        <div className="text-green-400 font-semibold mb-2">System Status: ONLINE</div>
        <div className="text-gray-300 text-sm space-y-1">
          <div>• Available commands: {Object.keys(allCommands).length - Object.keys(devCommands).length}</div>
          <div>• Reference data: LOADED</div>
          <div>• Career timeline: 20xx.xx - 2025.08</div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-yellow-400 text-sm">
          Type 'help' to see all available commands
        </div>
        <div className="text-gray-500 text-xs mt-1">
          Press Tab for autocomplete
        </div>
      </div>
    </div>
  ]);
  const [input, setInput] = useState('');
  const [typedOutput, setTypedOutput] = useState(null);
  const [font, setFont] = useState('Standard');
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentCommand, setCurrentCommand] = useState(null);

  const handleCommand = useCallback((cmd) => {
    const [command, ...args] = cmd.split(' ');
    const normalizedCmd = command.normalize("NFC");

    // Trigger background effects for the command
    setCurrentCommand(normalizedCmd);
    setTimeout(() => setCurrentCommand(null), 100); // Reset after brief moment

    if (normalizedCmd === 'font') {
      const newFont = args[0];
      if (availableFonts.includes(newFont)) {
        setFont(newFont);
        setLines([`$ ${cmd}`, `Font changed to ${newFont}`]);
      } else {
        setLines([`$ ${cmd}`, `Font not found: ${newFont}`]);
      }
      return;
    }

    const commandObj = allCommands[normalizedCmd];
    let output;

    if (commandObj) {
      if (typeof commandObj.execute === 'function') {
        output = commandObj.execute(...args);
      } else {
        output = commandObj;
      }

      // epilogue 명령어 실행 시 콘페티 효과 트리거
      if (normalizedCmd === 'epilogue') {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // 3초 후 콘페티 종료
      }
    } else {
      output = `Command not found: ${normalizedCmd}`;
    }

    if (output === "__ABOUT__") {
      const aboutElement = (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <motion.div
              className="text-2xl font-bold text-[#93c5fd] mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🗺️ 함께한 성장의 여정
            </motion.div>
            <div className="text-purple-300">각 단계마다 남긴 발자취들...</div>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-purple-500/30 via-blue-500/50 to-pink-500/30 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
            />
            
            <div className="flex justify-between items-center px-8">
              {aboutData.map((stage, i) => (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center z-10"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.8 + i * 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/80 via-blue-500/80 to-pink-500/80 flex items-center justify-center mb-4 shadow-lg"
                    animate={{ 
                      boxShadow: [
                        "0 4px 20px rgba(147, 197, 253, 0.3)",
                        "0 8px 30px rgba(147, 197, 253, 0.6)", 
                        "0 4px 20px rgba(147, 197, 253, 0.3)"
                      ]
                    }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{ 
                        y: [0, -3, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2, 
                        delay: i * 0.5 
                      }}
                    >
                      {stage.icon}
                    </motion.span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + i * 0.3 }}
                    className="text-center"
                  >
                    <div className="text-[#93c5fd] font-bold text-sm mb-1">{stage.text}</div>
                    <motion.div
                      className="w-2 h-2 mx-auto rounded-full bg-yellow-400"
                      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      );
      setLines([`$ ${cmd}`, aboutElement]);
      return;
    }

    if (output === "__IMPACT__") {
      const impactData = [
        "🚀 프로젝트 런칭 6회 → 신규 채널 확장, 매출 성장 견인",
        "⚡ 성능 최적화 8건 → SQL/트래픽 튜닝으로 응답속도 최대 90% 단축", 
        "🤖 자동화·최적화 10건 → 운영 리소스 절감, 오류·재작업 방지",
        "💡 신규 기능 개발 7건 → Kakao·Tripbtoz 연동 등 서비스 확장",
        "🛠️ 프로세스 개선 12건 → 마감/취소/정산 로직 강화, 운영 효율화",
        "🔍 품질 향상 9건 → 고객/파트너 피드백 반영, 오류 예방 및 안정성 확보",
        "🌍 외부 협업 성과 6건 → 신화월드·롯데·Accor 등 주요 파트너 신뢰 제고",
        "💡 아이디어 제안 다수 → TES/TAVI UI 개선, 운영 편의성 강화",
      ];

      const impactElement = (
        <div className="flex flex-col items-start py-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-bold text-[#93c5fd] mb-6"
          >
            💫 조직에 남긴 흔적들
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-sm text-gray-400 mb-4"
          >
            Loading impact records...
          </motion.div>

          <div className="flex flex-col space-y-2 w-full">
            {impactData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.6 + i * 0.3,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="flex items-start"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.8 + i * 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-lg mr-3"
                >
                  {item.split(' ')[0]}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 + i * 0.3 }}
                  className="text-[#d0cde1] flex-1"
                >
                  {item.substring(item.indexOf(' ') + 1)}
                </motion.span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + impactData.length * 0.3 + 0.5 }}
            className="text-xs text-gray-500 mt-6 pt-4 border-t border-gray-700"
          >
            ✓ Impact analysis complete. Total contributions: {impactData.length} major areas
          </motion.div>
        </div>
      );
      setLines([`$ ${cmd}`, impactElement]);
      return;
    }

    setLines([`$ ${cmd}`, output]);
  }, [setFont, setLines]);

  const handleTabCompletion = useCallback(() => {
    const currentInput = input.trim();
    if (!currentInput) return;

    const matchingCommands = commandList.filter((c) => c.startsWith(currentInput));

    if (matchingCommands.length === 1) {
      setInput(matchingCommands[0]);
    } else if (matchingCommands.length > 1) {
      setLines((prev) => [...prev, `$ ${currentInput}`, matchingCommands.join('  ')]);
    }
  }, [input, setLines]);

  const onKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      if (cmd) handleCommand(cmd);
      setInput("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
    }
  }, [input, handleCommand, handleTabCompletion]);

  return {
    lines,
    input,
    typedOutput,
    font,
    setLines,
    setInput,
    setTypedOutput,
    onKeyDown,
    showConfetti,
    currentCommand,
  };
};