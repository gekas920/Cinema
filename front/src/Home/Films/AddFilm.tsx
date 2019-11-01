import React from "react";
import './AddFilm.sass'
import * as Interfaces from "../HomeNamespaces";
import {Done} from "@material-ui/icons";
import {LinearProgress} from "@material-ui/core";
import {Error} from "@material-ui/icons";
import BasicRequests from "../../Requests/Requests";


interface IProps {}



class AddFilm extends React.Component<IProps,Interfaces.TableRow>{
    constructor(props:IProps){
        super(props);
        this.state = {
            title:'',
            description:'',
            genres:'',
            actors:'',
            link:'',
            createdBy:'',
            tenant:'',
            done:false,
            send:false,
            error:false
        }
    }

    handleChange = (name: string) => (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, [name]: event.target.value})
    };


    inpFunc = (correctLabel:string,key:string)=>{
        return(
            <div className="group-create">
                <input className='create-input' onChange={this.handleChange(key)} required/>
                <span className="bar-create"></span>
                <label className='create-label'>{correctLabel}</label>
            </div>
        )
    };

    sendData = ()=>{
      this.setState({
          send:true
      });
       let body = {
           title:this.state.title,
           description:this.state.description,
           genres:this.state.genres,
           actors:this.state.actors,
           link:this.state.link,
           createdBy:this.state.createdBy,
           tenant: this.state.tenant
       };
        BasicRequests.securedCreate('/createFilm',body)
            .then((result)=>{
                if(result)
                    if(result.data === 'done')
                        this.setState({
                            done:true
                        });
                    if(result.data === 'error')
                        this.setState({
                            error:true
                        })
            })
    };

    returnButton = ()=>{
        if(!this.state.send && !this.state.done)
            return(
                <button className='add-button' onClick={this.sendData}>
                   Add
                </button>
            );
        if(this.state.send && !this.state.done && !this.state.error)
            return (
                <button className='add-button' onClick={this.sendData} disabled>
                    Wait...
                </button>
            );
        if(this.state.done)
            return (
                <button className='add-button' onClick={this.sendData} disabled>
                    <Done className='add-done'/> Done
                </button>
            );
        if(this.state.error)
            return (
                <button className='add-button' onClick={this.sendData} disabled>
                    <Error className='add-err'/> Error
                </button>
            )
    };

    render(){
        return(
            <div className='create-content'>
                <h1>Add new film</h1>
                {this.inpFunc('Title','title')}
                {this.inpFunc('Description','description')}
                {this.inpFunc('Actors','actors')}
                {this.inpFunc('Genres','genres')}
                {this.inpFunc('Link','link')}
                {this.inpFunc('Tenant','tenant')}
                {this.inpFunc('Created By','createdBy')}
                {this.returnButton()}
                {this.state.send && !this.state.done && !this.state.error &&
                    <div>
                        <LinearProgress/>
                        <LinearProgress/>
                    </div>
                }
            </div>
        )
    }
}


export default AddFilm