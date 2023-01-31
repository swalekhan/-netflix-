const API_KEY = "68461d01ed982443a856aaad582e5318";

const userrequests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/ movie/top_rated?api_key=${API_KEY}&languages=en - US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default userrequests
        // / discover / movie ? api_key = $ { API_KEY } & with_genres = 28` ,