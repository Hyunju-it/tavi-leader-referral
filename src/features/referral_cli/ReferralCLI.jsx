import { useTerminal } from './hooks/useTerminal';
import StarryBackground from './components/StarryBackground';
import TerminalWindow from './components/TerminalWindow';
import FigletBanner from './components/FigletBanner';
import { loadFonts } from './utils/fonts';

loadFonts();

export default function ReferralCLI() {
  const terminalProps = useTerminal();

  return (
    <div className="relative min-h-screen text-[#d0cde1] font-mono flex items-center justify-center overflow-hidden">
      <FigletBanner font={terminalProps.font} setLines={terminalProps.setLines} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient -z-20"></div>
      <StarryBackground />
      <TerminalWindow {...terminalProps} />
    </div>
  );
}
