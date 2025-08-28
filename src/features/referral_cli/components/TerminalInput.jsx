
export default function TerminalInput({ input, setInput, onKeyDown }) {
  return (
    <div className="flex items-center bg-gray-950 px-3 md:px-4 py-3 border-t border-gray-700 font-mono">
      <span className="text-cyan-400 mr-2">$</span>
      <input
        autoFocus
        className="bg-transparent text-gray-300 outline-none flex-1 pl-1 font-mono"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Type a command..."
      />
    </div>
  );
}
