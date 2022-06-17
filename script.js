const API_KEY = '2b9232cca6ff90149ef2ef7839b42e69'

const movieGrid = document.querySelector('#movies-grid')
const modal = document.querySelector("#inner-modal")
const loadButton = document.querySelector("#load-more-movies-btn")
const search = document.querySelector("#search-input")
const closeSearch = document.querySelector("#close-search-btn")

let page = 1
let query = null

async function getMovies(page) {
    let movies = (await (await fetch(`https://api.themoviedb.org/3/${query ? 'search/movie' : 'movie/now_playing'}?api_key=${API_KEY}&language=en-US&page=${page}${query ? `&query=${query}` : '' }`)).json()).results
    let inject = ""

    for (let m of movies){
        let id = m.id
        let image = m.poster_path
        let name = m.title

        let starInject = ""
        let vote = Math.round(m.vote_average) / 2
        let halfStar = vote % 1 == 0.5
        
        for (let i = 0; i < Math.floor(vote); i++){
            starInject += `<i class="fas fa-star"></i>`
        }

        if (halfStar) starInject += `<i class="fas fa-star-half"></i>`

        inject +=
        `
        <div class="movie-card column is-3">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img class="movie-poster" src="https://image.tmdb.org/t/p/original/${image}" alt="Placeholder image">
                    </figure>
                </div>

                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="movie-title title is-4">${name}</p>
                            <div class="movie-votes subtitle is-6">
                                ${starInject}
                            </div>
                        </div>
                    </div>
                
                    <div class="content align-items-end">
                        <a class="button is-link js-modal-trigger" data-target="modal-popup" href="javascript:getOverview(${id})">See Info</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    movieGrid.innerHTML += inject
}

async function getOverview(id) {
    let movie = await (await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)).json()
    let video = (await (await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)).json()).results.find(x => x.site == 'YouTube')?.key

    modal.innerHTML = 
    `
    <div>
        <iframe width="600" height="400" src="https://www.youtube.com/embed/${video}" frameborder="0" allowfullscreen crossorigin></iframe>                
    </div>
    <div>
        <p><b>Overview: </b>${movie.overview}</p>
        <br>
        <p><b>Runtime: </b>${movie.runtime}</p>
        <p><b>Release Date: </b>${movie.release_date}</p>
        <p><b>Genres: </b>${movie.genres.map(x => x.name).join(', ')}</p>
    </div>
    `
}

async function searchMovies(q){
    movieGrid.innerHTML = ""
    page = 1
    query = q
    search.value = ""

    await getMovies(page++)
}

loadButton.addEventListener('click', () => {
    getMovies(page++)
}) 

search.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchMovies(event.target.value)
    }
})

closeSearch.addEventListener("click", () => searchMovies(''))

document.addEventListener('DOMContentLoaded', () => {   
    getMovies(page++).then(x => {
        /* The following code has been adapted from Bulma CSS to make popups work */ 

        // Functions to open and close a modal
        function openModal($el) {
            $el.classList.add('is-active');
        }
        
        function closeModal($el) {
            $el.classList.remove('is-active');
        }
        
        function closeAllModals() {
            (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
            });
        }
        
        // Add a click event on buttons to open a specific modal
        (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
            const modal = $trigger.dataset.target;
            const $target = document.getElementById(modal);
        
            $trigger.addEventListener('click', () => {
            openModal($target);
            });
        });
        
        // Add a click event on various child elements to close the parent modal
        (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
            const $target = $close.closest('.modal');
        
            $close.addEventListener('click', () => {
            closeModal($target);
            });
        });
        
        // Add a keyboard event to close all modals
        document.addEventListener('keydown', (event) => {
            const e = event || window.event;
        
            if (e.keyCode === 27) { // Escape key
            closeAllModals();
            }
        });
    })
})