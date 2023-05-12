export default function Pitch({ data }) {
  return (
    <div className="pitchdeck w-[80vw] max-w-2xl min-w-[400px] border border-gray-500">
      <div id="deckHead" className="flex justify-between m-3">
        <span className="text-2xl font-mono font-bold">Deck Info</span>
        <button className="bg-blue-600 text-white px-2 min-w-[200px] flex justify-between py-1 items-center">
          <i className="bx bx-download" />
          CosIQ_pitch.pdf
        </button>
      </div>
      <div id="deckBody" className="flex justify-between m-3 h-screen bg-gradient-to-b from-sky-500 via-indigo-700 to-pink-500"></div>
    </div>
  );
}
