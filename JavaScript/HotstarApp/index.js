

let id;
async function searchMovies(){
    try{
    let name = document.getElementById('query').value;
    let url=`https://www.omdbapi.com/?apikey=58918c68&s=${name}`

    let res = await fetch(url);
    // console.log(res);
    let data = await res.json();
    // console.log(data);
        
        appendData(data.Search);
    
    
    }catch(err){
        console.log(err);
    }



}

function appendData(data){
    // console.log(data)
    if(data===undefined){
        return false;
    }
    let movies= document.getElementById('movies');
    movies.innerHTML=null;
    data.forEach(function(el){
        let p = document.createElement('p');
        p.innerText=el.Title
        // console.log(el)
        movies.append(p);
    })
}




// Here we need debouncing
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(func,delay);
}

