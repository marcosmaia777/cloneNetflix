const API_key = "0f6a83f11a91546238670f135807443b";
const API_BASE = "https://api.themoviedb.org/3";

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: []
            },
            {
                slug: "trending",
                title: "Recomendados",
                items: []
            },
            {
                slug: "to rated",
                title: "Em alta",
                items: []
            },

            {
                slug: "Action",
                title: "Ação",
                items: []
            },

            {
                slug: "Comedy",
                title: "Comédia",
                items: []
            },

            {
                slug: "Horror",
                title: "Terror",
                items: []
            },

            {
                slug: "Romance",
                title: "Romance",
                items: []
            },

            {
                slug: "Documentary",
                title: "Documentário",
                items: []
            }
            
        ]
    }
}
