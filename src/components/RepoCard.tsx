import { GitHubRepo } from "../services/api";

interface RepoCardProps {
  repo: GitHubRepo;
  onViewDetails: () => void;
}

export function RepoCard({ repo, onViewDetails }: RepoCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
      <div className="p-5 border-b border-[#E8F1FA]">
        <h3 className="font-bold text-[#303030] truncate">{repo.name}</h3>
      </div>
      
      <div className="p-5 flex flex-col gap-4">
        <div className="bg-[#F9F9F9] p-3 rounded-xl border border-gray-50">
          <label className="text-[9px] text-gray-400 uppercase font-black block mb-1">Link</label>
          <span className="text-[11px] text-blue-600 truncate block">
            {repo.html_url.replace("https://", "")}
          </span>
        </div>

        <div className="bg-[#F9F9F9] p-3 rounded-xl border border-gray-50">
          <label className="text-[9px] text-gray-400 uppercase font-black block mb-1">Descrição</label>
          <p className="text-[11px] text-gray-500 line-clamp-2 italic leading-snug">
            {repo.description || "Sem descrição disponível."}
          </p>
        </div>

        <button 
          onClick={onViewDetails}
          className="text-[11px] font-bold text-gray-400 hover:text-blue-600 self-end transition-colors mt-2"
        >
          Ver detalhes →
        </button>
      </div>
    </div>
  );
}