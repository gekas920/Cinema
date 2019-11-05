import React from 'react'
import * as Interfaces from "../HomeNamespaces";
import {Done, Error, Lock,Mail,Delete} from "@material-ui/icons";
import BasicRequests from "../../Requests/Requests";
import {LinearProgress} from "@material-ui/core";




class FilmData extends React.Component<Interfaces.TableRow,Interfaces.TableRow>{

    constructor(props:Interfaces.TableRow){
        super(props);
        this.state = {
            title:this.props.title,
            actors:this.props.actors,
            genres:this.props.genres,
            tenant:this.props.tenant,
            description:this.props.description,
            createdBy:this.props.createdBy,
            link:this.props.link,
            secondLink:this.props.secondLink,
            done:false,
            send:false,
            error:false,
            changes:false,
            doneErr:false
        }
    }

    handleChange = (name: string) => (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, [name]: event.target.value,changes:true})
    };

    inpFunc = (correctLabel:string,key:string,value:string)=>{
        return(
            <div className="group-create">
                <input className='create-input'
                       onChange={this.handleChange(key)}
                       required value = {value}
                       disabled={key === 'title'}
                />
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
        BasicRequests.securedUpdate('/updateInfo',body)
            .then(result=>{
                if(result)
                    if(result.data === 'done')
                        this.setState({
                            done:true,
                            changes:false
                        });
                    if(result.data === 'error')
                        this.setState({
                            error:true,
                            changes:false
                        });
            })
    };

    returnButton = ()=>{
        if(!this.state.send && !this.state.done && !this.state.changes)
            return(
                <button className='add-button' disabled>
                    <Lock/>
                </button>
            );
        if(this.state.changes){
            return (
                <button className='add-button' onClick={this.sendData}>
                    <Mail/>
                </button>
            )
        }
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
    
    deleteFilm = ()=>{
        BasicRequests.securedDelete(`/deleteFilm/${this.state.title}`)
            .then(result=>{
                if(result.data === 'done'){
                    this.setState({
                        doneErr:true
                    })
                }
            })
    };

    render(){
        return(
            <div className='create-content'>
                <h1>Film Info</h1>
                <p>Change only if it needed</p>
                {this.inpFunc('Title','title',this.state.title)}
                {this.inpFunc('Description','description',this.state.description)}
                {this.inpFunc('Actors','actors',this.state.actors)}
                {this.inpFunc('Genres','genres',this.state.genres)}
                {this.inpFunc('Link','link',this.state.link)}
                {this.inpFunc('Second link','secondLink',this.state.secondLink)}
                {this.inpFunc('Tenant','tenant',this.state.tenant)}
                {this.inpFunc('Created By','createdBy',this.state.createdBy)}
                {this.returnButton()}
                <button className='add-button delete' disabled={this.state.doneErr} onClick={this.deleteFilm}>
                    <Delete/>
                </button>
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

export default FilmData