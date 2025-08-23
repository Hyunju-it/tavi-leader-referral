import { useEffect } from 'react';
import figlet from 'figlet';
import { useTerminal } from './hooks/useTerminal';
import StarryBackground from './components/StarryBackground';
import TerminalWindow from './components/TerminalWindow';

export default function ReferralCLI() {
  const terminalProps = useTerminal();

  useEffect(() => {
    figlet.text("TAVI", { font: "Standard" }, (err, data) => {
      if (!err && data) {
        terminalProps.setLines((prev) => [
          "> Welcome to Gemini Web CLI ✨",
          data,
          ...prev.slice(1),
        ]);
      }
    });
  }, [terminalProps.setLines]);

  return (
    <div className="relative min-h-screen text-[#d0cde1] font-mono flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient -z-20"></div>
      <StarryBackground />
      <TerminalWindow {...terminalProps} />
    </div>
  );
}