import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
    try {
        const username = 'unpairedelectron';
        const token = process.env.GITHUB_TOKEN;

        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        // Fetch user profile
        const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
        const userData = await userRes.json();

        // Fetch repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, { headers });
        const reposData = await reposRes.json();

        return NextResponse.json({
            profile: {
                name: userData.name,
                avatar: userData.avatar_url,
                bio: userData.bio,
                public_repos: userData.public_repos,
                followers: userData.followers,
            },
            repos: reposData.slice(0, 6).map((repo: any) => ({
                name: repo.name,
                description: repo.description,
                stars: repo.stargazers_count,
                language: repo.language,
                url: repo.html_url,
            })),
        });
    } catch (error) {
        console.error('GitHub API error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch GitHub data' },
            { status: 500 }
        );
    }
}
