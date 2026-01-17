interface InfoProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoSection = ({ isOpen, onClose }: InfoProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#2f3134] rounded-xl shadow-2xl border border-gray-700">
        {/* Content */}
        <div className="p-6 space-y-8">
          {/* About Rick and Morty Section */}
          <section>
            <h3 className="text-xl font-bold text-[#6f9283] mb-2 flex items-center gap-2">
              About Rick and Morty
            </h3>
            <div className="text-gray-300 space-y-4 leading-relaxed text-[12px]">
              <p>
                <strong>Rick and Morty</strong> is an American adult animated
                science fiction sitcom regarding the misadventures of cynical
                mad scientist Rick Sanchez and his good-hearted but fretful
                grandson Morty Smith.
              </p>
              <p>
                The show revolves around their interdimensional adventures
                utilizing Rick’s portal gun technology, exploring infinite
                realities, bizarre alien civilizations, and complex
                philosophical themes wrapped in dark humor.
              </p>
            </div>
          </section>

          {/* About Project Section */}
          <section>
            <h3 className="text-xl font-bold text-[#6f9283] mb-2 flex items-center gap-2">
              About This Project
            </h3>
            <div className="text-gray-300 space-y-4 leading-relaxed text-[12px]">
              <p>
                The <strong>Rick and Morty Pro Analytics Dashboard</strong> is a
                professional-grade explorer designed for fans and developers
                alike.
              </p>

              <div className="bg-[#3b3f44] p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400 text-[12px]">
                  <li>
                    <span className="text-blue-400">React 19</span> for
                    high-performance UI
                  </li>
                  <li>
                    <span className="text-blue-500">TypeScript</span> for
                    type-safe capability
                  </li>
                  <li>
                    <span className="text-cyan-400">Tailwind CSS v4</span> for
                    modern styling
                  </li>
                  <li>
                    <span className="text-orange-400">Vite</span> for
                    lightning-fast build times
                  </li>
                </ul>
              </div>

              <p className="text-[12px] italic text-gray-400">
                "Nobody exists on purpose. Nobody belongs anywhere. Everybody's
                gonna die. Come watch TV." — Morty Smith
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700 bg-[#2f3134] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold text-[12px]"
          >
            Close Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
