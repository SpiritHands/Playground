import ReceiveMessage from './ReceiveMessage'
import {Component} from 'react'
import {useState} from 'react'

class SendMessage extends Component{
    
    constructor(){
        super()
         this.state={
            inbox:'',
            message:''
         }
    }

    getTxt = event =>{
        this.setState({
            inbox:event.target.value
        })
     }

     setMessage = () =>{
        this.setState({
            message:this.inbox
        })
      }

    render = () =>{

        return(
            
            
           
              <>
                    <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                        <h5>Send Message Component</h5>
                        <h5>Compose</h5>
                            <div className="input-group">
                            <input onChange={this.getTxt} className="" type="text" />
                            </div>
                            <button onClick={this.setMessage}  className="btn mt-2 btn-primary">
                            Send Letter
                        </button>
                        </div>
                        <div className="col-md-6  ">
                         <ReceiveMessage message1={this.message}/>
             
                    </div>
                    </div>
                    </div>
           </>
                )            

    }
     
}
export default SendMessage