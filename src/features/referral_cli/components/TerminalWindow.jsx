
import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';

export default function TerminalWindow(props) {
  return (
    <div className="relative w-[900px] max-w-full h-[520px] bg-[#1e1e1e]/95 border border-[#444] rounded-lg shadow-2xl flex flex-col backdrop-blur-sm">
      <div className="flex items-center bg-[#2b2b2b] px-3 py-2 border-b border-[#444] rounded-t-lg">
        <div className="flex space-x-2 mr-3">
          <span className="w-3 h-3 bg-[#ff5f56] rounded-full"></span>
          <span className="w-3 h-3 bg-[#ffbd2e] rounded-full"></span>
          <span className="w-3 h-3 bg-[#27c93f] rounded-full"></span>
        </div>
        <span className="text-xs text-gray-300">Terminal — TAVI</span>
      </div>

      <TerminalOutput {...props} />
      <TerminalInput {...props} />
    </div>
  );
}
