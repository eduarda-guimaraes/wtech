interface RepoModalProps {
  repo: any;
  onClose: () => void;
}

export function RepoModal({ repo, onClose }: RepoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[650px] rounded-[32px] shadow-2xl relative border-2 border-[#0095FF]">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="font-bold text-lg text-[#303030]">{repo.name}</h2>
          <button onClick={onClose} className="text-gray-300 hover:text-red-500 transition-colors text-xl font-light">✕</button>
        </div>

        <div className="p-8 space-y-4">
          <Field label="Link" value={repo.html_url} isLink />
          <Field label="Privacidade" value={repo.visibility === 'public' ? 'Público' : 'Privado'} />
          <Field label="Linguagem" value={repo.language || "Não detectada"} />
          <Field label="Descrição" value={repo.description || "Sem descrição."} isLongText />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, isLink, isLongText }: any) {
  return (
    <div className="bg-[#F9F9F9] p-4 rounded-2xl border border-gray-50">
      <label className="text-[10px] text-gray-400 uppercase font-black block mb-1">{label}</label>
      {isLink ? (
        <a href={value} target="_blank" rel="noreferrer" className="text-xs text-blue-600 font-bold underline break-all">{value}</a>
      ) : (
        <p className={`text-xs text-gray-700 ${isLongText ? 'leading-relaxed italic' : 'font-bold'}`}>{value}</p>
      )}
    </div>
  );
}