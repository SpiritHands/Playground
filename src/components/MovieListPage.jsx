import { useState } from "react"
import { NavLink } from "react-router-dom"

function MovieListPage(){
const [searchTerm, setSearchTerm] = useState('')
const [movies, setMovie] = useState([])
 
const getinput = (e) =>{
    setSearchTerm(e.target.value)
    console.log(searchTerm)
}

    
    const fetchMovies = (searchTerm) =>{
    //const surl=`http://www.omdbapi.com/?apikey=3c14442f&s=${movieName}`
    fetch(`http://www.omdbapi.com/?apikey=3c14442f&s=${searchTerm}`).then(Response =>Response.json()).then(result=>{setMovie(result.Search)
    })

}

//movie item card below
  const movieitems = movies.map(m => {
    return(
         <div  key={m.imdbID} className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <img src={m.Poster} />
                    <p>{m.Title}</p>

                </div>
            <div className="card-footer">
                <NavLink to={`/${m.imdbID}`}>
                <button className="btn btn-primary">View Movie</button>
                </NavLink>
            </div>
            </div>

        </div>

     )
})  

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    Search <input type="text" onChange={getinput}/>
                    <button onClick={()=>fetchMovies(searchTerm)} className="m-5 btn btn-primary">Search Movie</button>
                </div>
        

            </div>
            <div className="row">
                {movieitems}

            </div>

        </div>
        </>
    )
}

 
export default MovieListPage