
import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';

export default function TerminalWindow(props) {
  return (
    <div className="relative w-full max-w-[1024px] h-screen md:h-[600px] bg-gray-950 border-0 md:border border-gray-700 rounded-none md:rounded-lg shadow-2xl flex flex-col text-sm font-mono">
      <div className="flex items-center bg-gray-900 px-3 py-2 border-b border-gray-700 rounded-t-none md:rounded-t-lg">
        <div className="flex space-x-2 mr-3">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-xs text-cyan-400 font-mono truncate">seo-gwangwon@referral-cli ~ %</span>
      </div>

      <TerminalOutput {...props} />
      <TerminalInput {...props} />
    </div>
  );
}
