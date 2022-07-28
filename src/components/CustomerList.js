import {useContext} from 'react'
import TradersContext from './TradersContext'
function CustomerList(props){

    const {list_of_traders, list_of_traders2} = useContext(TradersContext)

  //  const trader_list = props.traders

         const trader_list2 = list_of_traders2.map((trader)=>{
            return(
           <a className="nav-items nav-link ml-5">{trader}</a>  
            )
        }

)
         const trader_list = list_of_traders.map((trader)=>{
            return(
           <a className="nav-items nav-link ml-5">{trader}</a>  
            )
        }

)

return(
    
    <div>
        <h5 className="mt-5">Customer Component</h5>
        {trader_list2}
        {trader_list}
    </div>
  )
}
export default CustomerList;