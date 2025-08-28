import { useTerminal } from './hooks/useTerminal';
import StarryBackground from './components/StarryBackground';
import TerminalWindow from './components/TerminalWindow';
import { loadFonts } from './utils/fonts';
import ConfettiBoom from 'react-confetti-boom';

loadFonts();

export default function ReferralCLI() {
  const terminalProps = useTerminal();

  return (
    <div className="relative min-h-screen text-[#d0cde1] font-mono flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient -z-20"></div>
      <StarryBackground />
      <TerminalWindow {...terminalProps} />
      {terminalProps.showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <ConfettiBoom 
            particleCount={80} 
            duration={3000}
            particleSize={20}
            colors={['#ffd700', '#ffb347', '#ff69b4', '#87ceeb', '#98fb98']}
          />
        </div>
      )}
    </div>
  );
}
