import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ lines, typingSpeed = 30, lineDelay = 500, onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [completedLines, setCompletedLines] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!lines || lines.length === 0) return;
    
    setCurrentLineIndex(0);
    setCurrentText('');
    setCompletedLines([]);
    setIsComplete(false);
    
    let lineIndex = 0;
    let charIndex = 0;
    
    const typeNextChar = () => {
      if (lineIndex >= lines.length) {
        setIsComplete(true);
        onComplete?.();
        return;
      }
      
      const currentLine = lines[lineIndex];
      
      if (charIndex < currentLine.length) {
        setCurrentText(currentLine.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        // 현재 줄 완성, 다음 줄로 이동
        setCompletedLines(prev => [...prev, currentLine]);
        setCurrentText('');
        charIndex = 0;
        lineIndex++;
        setCurrentLineIndex(lineIndex);
        
        if (lineIndex < lines.length) {
          setTimeout(typeNextChar, lineDelay);
        } else {
          setIsComplete(true);
          onComplete?.();
        }
      }
    };
    
    typeNextChar();
  }, [lines, typingSpeed, lineDelay, onComplete]);

  return (
    <div className="font-mono">
      {completedLines.map((line, i) => (
        <div key={i} className="text-gray-300 mb-1">
          {line}
        </div>
      ))}
      {currentText && (
        <div className="text-gray-300 mb-1">
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-cyan-400"
          >
            ▋
          </motion.span>
        </div>
      )}
    </div>
  );
};

export default TypingEffect;