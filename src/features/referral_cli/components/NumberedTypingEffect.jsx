import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NumberedTypingEffect = ({ 
  messages, 
  typingSpeed = 30, 
  lineDelay = 800, 
  onComplete,
  numberColor = "text-yellow-400"
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [completedMessages, setCompletedMessages] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!messages || messages.length === 0) return;
    
    setCurrentMessageIndex(0);
    setCurrentText('');
    setCompletedMessages([]);
    setIsComplete(false);
    
    let messageIndex = 0;
    let charIndex = 0;
    
    const typeNextChar = () => {
      if (messageIndex >= messages.length) {
        setIsComplete(true);
        onComplete?.();
        return;
      }
      
      const currentMessage = messages[messageIndex];
      // 빈 줄이거나 특수 메시지인 경우
      if (!currentMessage || !currentMessage.startsWith('[')) {
        setCompletedMessages(prev => [...prev, currentMessage]);
        messageIndex++;
        setCurrentMessageIndex(messageIndex);
        
        if (messageIndex < messages.length) {
          setTimeout(typeNextChar, lineDelay);
        } else {
          setIsComplete(true);
          onComplete?.();
        }
        return;
      }
      
      // [번호] 부분을 찾아서 분리
      const bracketEnd = currentMessage.indexOf('] ');
      if (bracketEnd === -1) {
        // [번호] 형식이 아닌 경우 전체를 타이핑
        if (charIndex < currentMessage.length) {
          setCurrentText(currentMessage.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(typeNextChar, typingSpeed);
        } else {
          setTimeout(() => {
            setCompletedMessages(prev => [...prev, currentMessage]);
            setCurrentText('');
            charIndex = 0;
            messageIndex++;
            setCurrentMessageIndex(messageIndex);
            
            if (messageIndex < messages.length) {
              setTimeout(typeNextChar, lineDelay);
            } else {
              setIsComplete(true);
              onComplete?.();
            }
          }, 50);
        }
        return;
      }
      
      const numberPart = currentMessage.slice(0, bracketEnd + 2); // "[01] " 포함
      const textPart = currentMessage.slice(bracketEnd + 2); // 메시지 부분
      
      if (charIndex < textPart.length) {
        setCurrentText(numberPart + textPart.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        // 현재 메시지 완성, 다음 메시지로 이동
        setTimeout(() => {
          setCompletedMessages(prev => [...prev, currentMessage]);
          setCurrentText('');
          charIndex = 0;
          messageIndex++;
          setCurrentMessageIndex(messageIndex);
          
          if (messageIndex < messages.length) {
            setTimeout(typeNextChar, lineDelay);
          } else {
            setIsComplete(true);
            onComplete?.();
          }
        }, 50); // 약간의 지연으로 깜빡임 방지
      }
    };
    
    typeNextChar();
  }, [messages, typingSpeed, lineDelay, onComplete]);

  const parseMessage = (message) => {
    if (!message) return { number: '', text: message || '' };
    if (!message.startsWith('[')) return { number: '', text: message };
    
    const bracketEnd = message.indexOf('] ');
    if (bracketEnd === -1) return { number: '', text: message };
    
    return {
      number: message.slice(0, bracketEnd + 2), // "[01] " 포함
      text: message.slice(bracketEnd + 2) // 메시지 부분
    };
  };

  return (
    <div className="font-mono space-y-3">
      {completedMessages.map((message, i) => {
        const { number, text } = parseMessage(message);
        return (
          <div key={i} className="flex">
            {number && (
              <div className={`${numberColor} mr-3 font-mono text-xs mt-1 shrink-0`}>
                {number}
              </div>
            )}
            <div className="text-gray-300 leading-relaxed flex-1">
              {text}
            </div>
          </div>
        );
      })}
      {currentText && (
        <div className="flex">
          {(() => {
            const { number, text } = parseMessage(currentText);
            return (
              <>
                {number && (
                  <div className={`${numberColor} mr-3 font-mono text-xs mt-1 shrink-0`}>
                    {number}
                  </div>
                )}
                <div className="text-gray-300 leading-relaxed flex-1">
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    ▋
                  </motion.span>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default NumberedTypingEffect;