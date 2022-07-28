import {useEffect,useRef,useState} from 'react'
import {useSearchParams} from 'react-router-dom'

function MovieDetailPage(props){
const [mvs, Setmvs] = useState({})
//lets fix useEffect since its calling our function body twice
//const a = useRef(true)
const y = useState('')

const [searchParams] = useSearchParams();

useEffect(()=>{

     
       //you can put it back
          console.log('Logging the params')
          console.log(searchParams)
      }
     )
    

      const fetchMovies = (imdbID) =>{
      const surl=`http://www.omdbapi.com/?i=${imdbID}&apikey=3c14442f`

        fetch(surl)
        .then(response =>response.json())
        .then(result=>{
            Setmvs(result)
        })
}
 
 
 

return(
    
 <>{mvs.Title}</>
  
)

}

export default MovieDetailPage