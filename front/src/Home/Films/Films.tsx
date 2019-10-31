import React from 'react';
import MaterialTable from 'material-table';
import Dialog from '@material-ui/core/Dialog';
import * as Interfaces from '../HomeNamespaces'
import BasicRequests from "../../Requests/Requests";
import AddFilm from "./AddFilm";





class Films extends React.Component<Interfaces.FilmTableProps,Interfaces.FilmTableState>{
    constructor(props:Interfaces.FilmTableProps){
        super(props);
        this.state = {
            columns:[
                {title:'Title',field:'title'},
                {title:'Actors',field:'actors'},
                {title:'Description',field:'description'},
                {title:'Genres',field:'genres'}
            ],
            current:{
                title:'',
                actors:'',
                description:'',
                genres:'',
            },
            data:[
                {title:'Joker',actors:'Joakin Phoenix',description:'aljdasjd;ladj;al',genres:'123123421'}
            ],
            open:false
        }
    }

    tableData = ()=>{
      BasicRequests.securedGet('/films');
    };

    createNew = ()=>{
      this.setState({
          open:true
      })
    };

    rowClick = (event:any,rowData:any)=>{
      this.setState({
          open:true,
          current:rowData
      })
    };

    handleClose = ()=>{
      this.setState({
          open:false
      })
    };

    render(){
        return(
            <div className='film-content'>
            <MaterialTable
                style={{width:'70%'}}
                title="My equipment"
                columns={this.state.columns}
                data={this.state.data}
                onRowClick={this.rowClick}
            />
            <div className='create-new' onClick={this.createNew}>Create equip</div>
                <Dialog open={this.state.open} onClose={this.handleClose}><AddFilm/></Dialog>
            </div>
        )
    }
}


export default Films