import CustomerList from './CustomerList'
import MovieListPage from './MovieListPage';
import MovieDetailPage from './MovieDetailPage'
import SendMessage from './SendMessage'
import { TradersProvider } from './TradersContext'
import {Component} from 'react'
import {BrowserRouter, Link, Route,Routes} from 'react-router-dom'

class  App extends Component{

   
       //passing data from App component to CustomerList
     
       
       render =() => {
              const list_of_traders = ['John','James','Alex Show']
              const list_of_traders2 = ['teye','paul','silas Show']
              return(
                     <TradersProvider value={{list_of_traders,list_of_traders2}}>
                      <div className="container mt-5">
                     <div className="row"></div>
                     <div>
                    {/*  <h5>App Js Component</h5>
                     <CustomerList />
                     <SendMessage/> */}
                     <BrowserRouter>
                     <Routes>

                     <Route path='/' element={<MovieListPage/>}/>
                     <Route path='/:imdbID' element={<MovieDetailPage/>}/>
                     </Routes>
                     </BrowserRouter>
                     </div>
                     </div>      
                     
                     </TradersProvider>
                     
                   
              )

       }

}
   


export default App;