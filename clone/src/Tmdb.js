const API_KEY = "0f6a83f11a91546238670f135807443b";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE} ${endpoint}`)
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: "Action",
                title: "Ação",
                items: await basicFetch(`discover/movie?with_genres=28&language=pr-BR&api_key=${API_KEY}`)
            },

            {
                slug: "Comedy",
                title: "Comédia",
                items: await basicFetch(`discover/movie?with_genres=35&language=pr-BR&api_key=${API_KEY}`)
            },

            {
                slug: "Horror",
                title: "Terror",
                items: await basicFetch(`discover/movie?with_genres=27&language=pr-BR&api_key=${API_KEY}`)
            },

            {
                slug: "Romance",
                title: "Romance",
                items: await basicFetch(`discover/movie?with_genres=10749&language=pr-BR&api_key=${API_KEY}`)
            },

            {
                slug: "Documentary",
                title: "Documentário",
                items: await basicFetch(`discover/movie?with_genres=28&language=pr-BR&api_key=${API_KEY}`)
            }
            
        ]
    }
}
