import { GitHubUser } from "../services/api";

export function ProfileInfo({ user }: { user: GitHubUser }) {
  return (
    <section className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-50">
      <h1 className="text-2xl font-bold text-[#303030] mb-8">Informações do Perfil</h1>
      
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 border border-gray-100 rounded-[24px] max-w-[650px]">
        <img 
          src={user.avatar_url} 
          alt={user.login} 
          className="w-28 h-28 rounded-2xl object-cover shadow-md"
        />
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block mb-1">Nome</span>
            <strong className="text-xl text-[#303030] leading-tight">{user.name || user.login}</strong>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block mb-1">Bio</span>
            <p className="text-sm text-gray-500 italic leading-relaxed">
              {user.bio || "Este usuário ainda não definiu uma bio."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}