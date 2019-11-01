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
                {title:'Genres',field:'genres'},
                {title:'Link',field:'link'},
                {title:'Tenant',field:'tenant'},
                {title:'Created By',field:'createdBy'}
            ],
            current:{
                title:'',
                actors:'',
                description:'',
                genres:'',
                link:'',
                createdBy:'',
                tenant:''
            },
            data:[],
            open:false,
            openRow:false
        }
    }

    componentDidMount(): void {
        BasicRequests.securedGet('/films')
            .then(result=>{
                if(result){
                    this.setState({
                        data:result.data
                    })
                }
            })
    }

    createNew = ()=>{
      this.setState({
          open:true
      })
    };

    rowClick = (event:any,rowData:any)=>{
      this.setState({
          openRow:true,
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
                options={{
                    pageSizeOptions:[5,7,10]
                }}
                style={{width:'70%'}}
                title="My equipment"
                columns={this.state.columns}
                data={this.state.data}
                onRowClick={this.rowClick}
            />
            <div className='create-new' onClick={this.createNew}>Add film</div>
                <Dialog open={this.state.open} onClose={this.handleClose}><AddFilm/></Dialog>
            </div>
        )
    }
}


export default Films