let apikey = "API_KEY_HERE"; // Replace with your actual OMDB API key
let input = document.querySelector("#input");
let btn = document.querySelector("#button");

async function getdata(inp)
{
    let url = `${apikey}&t=${inp}`;
    let link = await fetch(url);
    let data = await link.json();
    return data;
}

function display(data)
{

    let img = document.querySelector(".image");
    let info = document.querySelector(".minfo");
    img.innerHTML = ""; 
    info.innerHTML = "";


    let image = document.createElement("img");
    image.setAttribute("src",data.Poster);
    image.classList.add("movie-image");
    img.append(image);

    
    let title = document.createElement("h2");
    title.textContent="Title : "+data.Title;
    info.append(title);

    let language = document.createElement("h2");
    language.textContent="Language : "+data.Language;
    info.append(language);


    let year = document.createElement("h2");
    year.textContent="Year : "+data.Year;
    info.append(year);

    let director = document.createElement("h2");
    director.textContent="Director : "+data.Director;
    info.append(director);

    let Actors = document.createElement("h2");
    Actors.textContent="Actors : "+data.Actors;
    info.append(Actors);

    let Plot = document.createElement("h2");
    Plot.textContent="Plot : "+data.Plot;
    info.append(Plot);


    let rating = document.createElement("h2");
    rating.textContent="Rating : "+data.imdbRating;
    info.append(rating);
    info.classList.add("place");
    
}
async function information(){
    let inp=input.value;
    if(inp === "")
    {
        alert("input is empty");
        return;
    }
    let data = await getdata(inp);
    if (data.Response === "False") {
        alert("Movie not found!");
        return;
    }
    input.value = "";
    display(data);
}
btn.addEventListener("click",information);