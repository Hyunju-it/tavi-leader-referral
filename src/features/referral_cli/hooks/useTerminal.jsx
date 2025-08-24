
import { useState, useCallback } from 'react';
import { commands as COMMANDS } from '../constants/commands';
import { devCommands } from '../constants/devCommands';
import { availableFonts } from '../utils/fonts';
import { motion } from 'framer-motion';

const allCommands = { ...COMMANDS, ...devCommands };

export const useTerminal = () => {
  const [lines, setLines] = useState(['> Welcome to TAVI Web CLI ✨']);
  const [input, setInput] = useState('');
  const [typedOutput, setTypedOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [font, setFont] = useState('Standard');

  const handleCommand = useCallback((cmd) => {
    const [command, ...args] = cmd.split(' ');
    const normalizedCmd = command.normalize("NFC");

    if (normalizedCmd === 'font') {
      const newFont = args[0];
      if (availableFonts.includes(newFont)) {
        setFont(newFont);
        setLines((prev) => [...prev, `> ${cmd}`, `Font changed to ${newFont}`]);
      } else {
        setLines((prev) => [...prev, `> ${cmd}`, `Font not found: ${newFont}`]);
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

    if (output === "__CLEAR__") {
      setLines(['> Console cleared']);
      return;
    }

    if (output === "__LOADING__") {
      setLines((prev) => [...prev, `> ${cmd}`]);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setLines((prev) => [...prev, "✔ Finished loading universe ✨"]);
      }, 3000);
      return;
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
      setLines((prev) => [...prev, `> ${cmd}`, journeyElement]);
      return;
    }

    if (normalizedCmd === "hi") {
      setLines((prev) => [...prev, `> ${cmd}`]);
      setTypedOutput(COMMANDS["hi"]);
      return;
    }

    setLines((prev) => [...prev, `> ${cmd}`, output]);
  }, []);

  const onKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      if (cmd) handleCommand(cmd);
      setInput("");
    }
  }, [input, handleCommand]);

  return {
    lines,
    input,
    loading,
    typedOutput,
    font,
    setLines,
    setInput,
    setTypedOutput,
    onKeyDown,
  };
};
