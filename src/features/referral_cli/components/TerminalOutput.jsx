
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

export default function TerminalOutput({ lines, typedOutput, setLines, setTypedOutput }) {
  const outputRef = useRef(null);
  const [lineKeys, setLineKeys] = useState([]);

  // 라인이 추가될 때마다 새로운 key 생성
  useEffect(() => {
    if (lines.length > lineKeys.length) {
      const newKeys = [];
      for (let i = lineKeys.length; i < lines.length; i++) {
        newKeys.push(`line-${Date.now()}-${i}-${Math.random()}`);
      }
      setLineKeys(prev => [...prev, ...newKeys]);
    }
  }, [lines.length, lineKeys.length]);

  // 스크롤 자동 추적 해제

  useEffect(() => {
    if (typedOutput) {
      const el = document.getElementById('typed-output');
      if (el) {
        const typed = new Typed(el, {
          strings: [typedOutput],
          typeSpeed: 50,
          showCursor: true,
          cursorChar: '_',
          onComplete: () => {
            setLines((prev) => [...prev, typedOutput]);
            setTypedOutput(null);
          },
        });
        return () => typed.destroy();
      }
    }
  }, [typedOutput, setLines, setTypedOutput]);

  return (
    <div ref={outputRef} className="flex-1 overflow-y-auto px-3 md:px-4 py-3 text-gray-300 bg-gray-950 font-mono">
      {lines.map((line, i) => {
        const isInputLine = typeof line === 'string' && line.startsWith('$ ');
        // 각 라인에 고유하고 안정적인 key 사용
        const lineKey = lineKeys[i] || `fallback-${i}`;
        return (
          <motion.div
            key={lineKey}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            {isInputLine ? (
              <div className="ml-2 md:ml-4">
                <div className="border-l-2 border-cyan-500 bg-gray-900 px-3 py-2 mb-3">
                  <span className="text-cyan-400">{line.replace('$ ', '$ ')}</span>
                </div>
              </div>
            ) : typeof line === 'string' ? (
              <span className="md:ml-4" style={{ whiteSpace: 'pre-wrap' }}>{line}</span>
            ) : (
              line
            )}
          </motion.div>
        );
      })}
      {typedOutput && <div id="typed-output" className="text-cyan-400 font-mono"></div>}
    </div>
  );
}
