searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;
})

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
})

arrowBtn.addEventListener('click', () => {
    if(document.domain != '127.0.0.1'){
        location.hash = '#home';
    }else{
        history.back();
    }
})


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {

    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else{
        homePage();
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}


function homePage(){
    console.log('HOME');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage(){
    console.log('CATEGORIES!')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');


    // ['#category', 'id-name']
    const [ , categoryData] = location.hash.split('='); 
    const [categoryId, categoryName] = categoryData.split('-');

    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);

}

function movieDetailsPage(){
    console.log('MOVIE!')

    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
}

function searchPage(){
    console.log('SEARCH!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    // arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // ['#search', 'robot']    // suponiendo que el usuario busc?? 'robot'
    const [ , query] = location.hash.split('='); 
    getMoviesBySearch(query);


}

function trendsPage(){
    console.log('TRENDS!')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = 'Tendencias'

    getTrendingMovies();
}



