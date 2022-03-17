//const MDB_API_KEY = process.env.MDB_API_KEY;
const MDB_API_KEY = "750d717aee423aa3221d0ac25396478e";

export const URL = "https://api.themoviedb.org/3";

export const ENDPOINTS = {
	movies: [
		{
			title: "Trending",
			url: `/trending/movie/week?api_key=${MDB_API_KEY}&language=en-US`,
		},
		{
			title: "New release",
			url: `/movie/now_playing?api_key=${MDB_API_KEY}&language=en-US`,
		},
		{
			title: "Action",
			url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=28`,
		},
		{
			title: "Aventure",
			url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=12`,
		},
		{
			title: "Animation",
			url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=16`,
		},
		{
			title: "Comedy",
			url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=35`,
		},
		{
			title: "Documentary",
			url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=99`,
		},
		{
			title: "Horror",
			url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=27`,
		},
		{
			title: "Science Fiction",
			url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=878`,
		},
	],
	series: [
		{
			title: "Action - Aventure",
			url: `/discover/tv?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=10759`,
		},
		{
			title: "Animation",
			url: `/discover/tv?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=16`,
		},
		{
			title: "Comedy",
			url: `/discover/tv?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=35`,
		},
		{
			title: "Crime",
			url: `/discover/tv?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=80`,
		},
		{
			title: "Drama",
			url: `/discover/tv?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=18`,
		},
		{
			title: "Documentary",
			url: `/discover/tv?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=35`,
		},
		{
			title: "Family",
			url: `/discover/tv?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=10751`,
		},
		{
			title: "Sci-Fi - Fantasy",
			url: `/discover/tv?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=10765`,
		},
	],
};

/* 
    trending: {
            title: "Trending",
            url: `/trending/movie/week?api_key=${MDB_API_KEY}&language=en-US`,
        },
        new_release: {
            title: "New Release",
            url: `/movie/now_playing?api_key=${MDB_API_KEY}&language=en-US`,
        },
        popular: {
            title: "Popular",
            url: `/movie/popular?api_key=${MDB_API_KEY}&language=en-US`,
        },
        action_movie: {
            title: "Action",
            url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=28`,
        },
        aventure: {
            title: "Aventure",
            url: `/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=12`,
        },
*/
