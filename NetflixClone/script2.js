const api = "api_key=3dc6d1eba53d8e3a71fd7ed2d2c416b6";

// base of url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w500";

// requests for movies data
const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

// used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        // every refresh the movie will be change
        const setMovie =
            data.results[
                Math.floor(Math.random() * data.results.length - 1)
            ];

        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage =
            "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    });

    //movies rows


    
    fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data)=>{

        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);



        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posture.className = "row_posters";
        row.appendChild(row_postere);



        data.results.forEach((movie)=>{
            const posture = document.createElement("img");
            posture.className = "row_posterLarge";

            var s = movie.name.replace(/\s+/g,"");

            posture.id = s;
            posture.src = img_url + movie.poster_path;
            row_posture.appendChild(poster);l

        });


    });


    //trending


    
    fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headerow");
        const row = document.createElement("div");
        row.className = "row";


        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Top Rated";
        row.appendChild(title);



        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            posture.className = "row_posterLarge";
            var s2 = movie.id;


            poster.id =s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

    //action

    fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Action Movies";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);
        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_poster";
            var s2 = movie.id;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });

    });

    
fetch(requests.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Comedy Movie";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});

   

    
    fetch(requests.fetchHorrorMovies) // Corrected the typo in fetchHorrorMovie to fetchHorrorMovies
    .then((res) => res.json())
    .then((data)  =>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Herror Movies";
        row.appendChild(title);


        const row_posters = document.createElement("div");
        row.posters.className = "row_posters";
        row.appendChild(row_postures);


        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            postere.className = "row_poster";
            var s2 = movie.id;
            poster.id =s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);

        });
    });
    

    
    
    // fetch(requests.fetchRomanceMovies)
    // .then((res) => res.json())
    // .then((data) => {
    //     const headrow = document.getElementById("headrow");
    //     const row = document.createElement("div");

    //     row.className = "row";
    //     headrow.appendChild(row);
    //     const title = document.createElement("h2");
    //     title.className = "row_title";
    //     title.innerText = "Romance Movies"; // Corrected the typo in title.innerText
    //     row.appendChild(title);

    //     const row_posters = document.createElement("div");
    //     row_posters.className = "row_posters"; // Corrected the typo in className
    //     row.appendChild(row_posters);

    //     const img_url = "YOUR_IMAGE_BASE_URL"; // Replace this with the actual base URL for your images

    //     data.results.forEach((movie) => {
    //         console.log(movie);
    //         const poster = document.createElement("img");
    //         poster.className = "row_poster"; // Corrected the typo in className
    //         var s2 = movie.id;
    //         poster.id = s2; // Corrected the typo in poster.id
    //         poster.src = img_url + movie.backdrop_path;
    //         row_posters.appendChild(poster);
    //     });
    // })
    
    // .catch((error) => {
    //     console.error("Error fetching data:", error);
    // });
    



fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((data)=> {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Documentaries";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row_poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

