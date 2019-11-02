import React from 'react'
import * as Interfaces from "../HomeNamespaces";





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
            link:this.props.link
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

    render(){
        return(
            <div>

            </div>
        )
    }
}