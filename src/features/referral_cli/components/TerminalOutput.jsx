
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

export default function TerminalOutput({ lines, typedOutput, setLines, setTypedOutput }) {
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines, typedOutput]);

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
    <div ref={outputRef} className="flex-1 overflow-y-auto px-4 py-3 text-[#e5e7eb] bg-[#1e1e1e]/95">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {typeof line === 'string' ? (
            <span style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>{line}</span>
          ) : (
            line
          )}
        </motion.div>
      ))}
      {typedOutput && <div id="typed-output" className="text-[#93c5fd] font-semibold"></div>}
    </div>
  );
}
