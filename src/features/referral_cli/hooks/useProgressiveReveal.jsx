import { useState, useEffect } from 'react';

// 타이핑 효과를 위한 커스텀 훅
export const useTypingEffect = (text, speed = 50, startDelay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;
    
    setDisplayText('');
    setIsComplete(false);
    
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        
        if (index >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
};

// 순차적 공개 효과를 위한 커스텀 훅
export const useProgressiveReveal = (items, delay = 200, startDelay = 0) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!items || items.length === 0) return;
    
    setVisibleCount(0);
    setIsComplete(false);
    
    const timer = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setVisibleCount(count);
        
        if (count >= items.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, delay);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [items, delay, startDelay]);

  return { visibleCount, isComplete };
};

// 스트림 타이핑 효과 (한 줄씩 순차적으로 타이핑)
export const useStreamTyping = (lines, lineDelay = 300, typingSpeed = 30) => {
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
        }
      }
    };
    
    typeNextChar();
  }, [lines, lineDelay, typingSpeed]);

  return { completedLines, currentText, currentLineIndex, isComplete };
};