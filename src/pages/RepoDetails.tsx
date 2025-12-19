import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { DetailField } from "../components/DetailField";

export function RepoDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.repo) {
    navigate("/profile");
    return null;
  }

  const { repo } = state;

  return (
    <div className="h-screen flex flex-col bg-[#F0F2F5] font-montserrat overflow-hidden">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4 md:p-6">
        <section className="bg-white rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-50 w-full max-w-[1100px] h-full max-h-[90%] flex flex-col gap-6 overflow-hidden">
          
          <h1 className="text-2xl md:text-[28px] font-bold text-[#303030] flex-shrink-0">
            Especificações
          </h1>

          <div className="w-full max-w-[650px] mx-auto bg-white rounded-[24px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col overflow-hidden">
            
            <div className="flex justify-between items-center p-5 border-b border-gray-100 flex-shrink-0">
              <h2 className="font-bold text-lg text-[#303030] truncate">{repo.name}</h2>
              <button 
                onClick={() => navigate(-1)} 
                className="text-gray-300 hover:text-red-500 transition-colors text-xl font-light"
              >
                ✕
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-3 overflow-y-auto">
              <DetailField label="Link" value={repo.html_url} isLink />
              <DetailField label="Privacidade" value={repo.visibility === 'public' ? 'Público' : 'Privado'} />
              <DetailField label="Linguagem" value={repo.language || "Não detectada"} />
              <DetailField label="Descrição" value={repo.description || "Sem descrição disponível."} isLongText />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}