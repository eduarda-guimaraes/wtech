import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ProfileInfo } from "../components/ProfileInfo";
import { RepoCard } from "../components/RepoCard";
import { Loading } from "../components/Loading";

export function Profile() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isDetailLoading, setIsDetailLoading] = useState(false);

  useEffect(() => {
    if (!state) navigate("/");
  }, [state, navigate]);

  if (!state) return null;

  const { user, repos } = state;

  const handleViewDetails = (repo: any) => {
    setIsDetailLoading(true);
    setTimeout(() => {
      navigate("/details", { state: { repo } });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-montserrat pb-20">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-6 mt-10 space-y-10">
        {isDetailLoading ? (
          <section className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-50 h-[500px] flex items-center justify-center">
             <Loading />
          </section>
        ) : (
          <>
            <ProfileInfo user={user} />

            <section className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-[#303030]">Repositórios</h2>
                <span className="text-xs text-gray-400 font-bold">
                  Exibindo {repos.length} repositórios
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.map((repo: any) => (
                  <RepoCard 
                    key={repo.id} 
                    repo={repo} 
                    onViewDetails={() => handleViewDetails(repo)} 
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}