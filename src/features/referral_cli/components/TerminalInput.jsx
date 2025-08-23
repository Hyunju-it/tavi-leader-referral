
export default function TerminalInput({ input, setInput, onKeyDown }) {
  return (
    <div className="flex items-center bg-[#1e1e1e]/95 px-4 py-3 border-t border-[#444] text-[#93c5fd] rounded-b-lg">
      <span className="mr-2">&gt;</span>
      <input
        autoFocus
        className="bg-transparent text-[#93c5fd] outline-none flex-1 pl-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
