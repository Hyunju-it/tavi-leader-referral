import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { commands as COMMANDS } from '../constants/commands';
import { devCommands } from '../constants/devCommands';
import { availableFonts } from '../utils/fonts';

const allCommands = { ...COMMANDS, ...devCommands };
const commandList = Object.keys(allCommands);

export const useTerminal = () => {
  const [lines, setLines] = useState(['> Welcome to Seo Gwang-won Referral Web CLI ✨']);
  const [input, setInput] = useState('');
  const [typedOutput, setTypedOutput] = useState(null);
  const [font, setFont] = useState('Standard');

  const handleCommand = useCallback((cmd) => {
    const [command, ...args] = cmd.split(' ');
    const normalizedCmd = command.normalize("NFC");

    if (normalizedCmd === 'font') {
      const newFont = args[0];
      if (availableFonts.includes(newFont)) {
        setFont(newFont);
        setLines([`> ${cmd}`, `Font changed to ${newFont}`]);
      } else {
        setLines([`> ${cmd}`, `Font not found: ${newFont}`]);
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
    } else {
      output = `Command not found: ${normalizedCmd}`;
    }

    if (output === "__JOURNEY__") {
      const journeyData = [
        "🎯 혁신/개선",
        "🎯 자동화/최적화",
        "🎯 신규 기능 런칭",
        "🎯 프로세스/품질 개선",
        "🎯 외부 임팩트/고객 피드백",
      ];

      const journeyElement = (
        <div className="flex flex-col items-start py-6 w-full">
          <span className="text-lg font-bold text-[#93c5fd] mb-6">🚀 여정 타임라인</span>
          <div className="relative w-full flex items-center">
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2 }}
            />
            <div className="flex justify-between w-full">
              {journeyData.map((stage, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center w-1/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.6 }}
                >
                  <motion.span
                    className="text-yellow-400 text-2xl mb-2"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                  >
                    ★
                  </motion.span>
                  <span className="text-[#93c5fd] font-semibold text-sm text-center">{stage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );
      setLines([`> ${cmd}`, journeyElement]);
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
          <span className="text-lg font-bold text-[#93c5fd] mb-6">✨ Impact Timeline</span>
          <div className="flex flex-col space-y-4">
            {impactData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center"
              >
                <span className="text-lg">{item.split(' ')[0]}</span>
                <span className="ml-4 text-[#d0cde1]">{item.substring(item.indexOf(' ') + 1)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      );
      setLines([`> ${cmd}`, impactElement]);
      return;
    }

    setLines([`> ${cmd}`, output]);
  }, [setFont, setLines]);

  const handleTabCompletion = useCallback(() => {
    const currentInput = input.trim();
    if (!currentInput) return;

    const matchingCommands = commandList.filter((c) => c.startsWith(currentInput));

    if (matchingCommands.length === 1) {
      setInput(matchingCommands[0]);
    } else if (matchingCommands.length > 1) {
      setLines((prev) => [...prev, `> ${currentInput}`, matchingCommands.join('  ')]);
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
  };
};