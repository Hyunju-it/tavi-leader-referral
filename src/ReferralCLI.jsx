import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import figlet from "figlet";

export default function ReferralCLI() {
  const [lines, setLines] = useState(["> Welcome to Gemini Web CLI ✨"]);
  const [input, setInput] = useState("");
  const [typedOutput, setTypedOutput] = useState(null);
  const outputRef = useRef(null);
  const canvasRef = useRef(null);

  const commands = {
    help: "Available commands: [help, about, stars, clear, hi, love, journey, legacy, impact, mentor, quote, thankyou, leader, recommend, epilogue, thanks, sorry, tmi, farewell]",
    about: "This is a fake CLI running inside your browser 🌌",
    stars: "✨✨✨ Look at the galaxy shine ✨✨✨",
    hi: "🙏 Thank you for being here. Your presence is appreciated!",
    journey: "__JOURNEY__",
    clear: "__CLEAR__",
    legacy: "__LEGACY__",
    impact: "__IMPACT__",
    mentor: "__MENTOR__",
    quote: "__QUOTE__",
    thankyou: "__THANKYOU__",
    leader: "__LEADER__",
    recommend: "__RECOMMEND__",
    epilogue: "__EPILOGUE__",
    thanks: "__THANKS__",
    sorry: "__SORRY__",
    tmi: "__TMI__",
    farewell: "__FAREWELL__",
  };

  const handleCommand = (cmd) => {
    const normalizedCmd = cmd.normalize("NFC");
    const output = commands[normalizedCmd] || `Command not found: ${normalizedCmd}`;

    if (output === "__CLEAR__") {
      setLines(["> Console cleared"]);
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

      setLines((prev) => [
        ...prev,
        `> ${normalizedCmd}`,
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
        </div>,
      ]);
      return;
    }

    setLines((prev) => [...prev, `> ${normalizedCmd}`, output]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      if (cmd) handleCommand(cmd);
      setInput("");
    }
  };

  useEffect(() => {
    if (typedOutput) {
      const el = document.getElementById("typed-output");
      if (el) {
        const typed = new Typed(el, {
          strings: [typedOutput],
          typeSpeed: 50,
          showCursor: true,
          cursorChar: "_",
          onComplete: () => {
            setLines((prev) => [...prev, typedOutput]);
            setTypedOutput(null);
          },
        });
        return () => typed.destroy();
      }
    }
  }, [typedOutput]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines, typedOutput]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: numStars }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });
      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    figlet.text("TAVI", { font: "Standard" }, (err, data) => {
      if (!err && data) {
        setLines((prev) => ["> Welcome to Gemini Web CLI ✨", data, ...prev.slice(1)]);
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen text-[#d0cde1] font-mono flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient -z-20"></div>

      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      <div className="relative w-[900px] max-w-full h-[520px] bg-[#1e1e1e]/95 border border-[#444] rounded-lg shadow-2xl flex flex-col backdrop-blur-sm">
        <div className="flex items-center bg-[#2b2b2b] px-3 py-2 border-b border-[#444] rounded-t-lg">
          <div className="flex space-x-2 mr-3">
            <span className="w-3 h-3 bg-[#ff5f56] rounded-full"></span>
            <span className="w-3 h-3 bg-[#ffbd2e] rounded-full"></span>
            <span className="w-3 h-3 bg-[#27c93f] rounded-full"></span>
          </div>
          <span className="text-xs text-gray-300">Terminal — gemini</span>
        </div>

        <div ref={outputRef} className="flex-1 overflow-y-auto px-4 py-3 text-[#e5e7eb] bg-[#1e1e1e]/95">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {line}
            </motion.div>
          ))}

          {typedOutput && <div id="typed-output" className="text-[#93c5fd] font-semibold"></div>}
        </div>

        <div className="flex items-center bg-[#1e1e1e]/95 px-4 py-3 border-t border-[#444] text-[#93c5fd] rounded-b-lg">
          <span className="mr-2">&gt;</span>
          <input
            autoFocus
            className="bg-transparent text-[#93c5fd] outline-none flex-1 pl-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
