export interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  visibility: string;
}

const BASE_URL = "https://api.github.com/users";

export const api = {
  async getUserData(username: string): Promise<{ user: GitHubUser; repos: GitHubRepo[] }> {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    };

    const userRes = await fetch(`${BASE_URL}/${username}`, { headers });

    if (userRes.status === 404) throw new Error("Usuário não encontrado");
    if (userRes.status === 403) throw new Error("Limite de buscas atingido. Tente novamente mais tarde.");
    if (!userRes.ok) throw new Error("Erro na conexão com o GitHub");

    const user = await userRes.json();

    const reposRes = await fetch(`${BASE_URL}/${username}/repos?sort=updated`, { headers });
    const repos = reposRes.ok ? await reposRes.json() : [];

    return { user, repos };
  }
};