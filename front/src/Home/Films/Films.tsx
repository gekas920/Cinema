import React from 'react';
import MaterialTable from 'material-table';
import Dialog from '@material-ui/core/Dialog';
import * as Interfaces from '../HomeNamespaces'
import BasicRequests from "../../Requests/Requests";
import AddFilm from "./AddFilm";
import FilmData from "./FilmData";





class Films extends React.Component<Interfaces.FilmTableProps,Interfaces.FilmTableState>{
    constructor(props:Interfaces.FilmTableProps){
        super(props);
        this.state = {
            columns:[
                {title:'Title',field:'title'},
                {title:'Actors',field:'actors'},
                {title:'Genres',field:'genres'},
                {title:'Tenant',field:'tenant'},
                {title:'Created By',field:'createdBy'}
            ],
            current:{
                title:'',
                actors:'',
                description:'',
                genres:'',
                link:'',
                secondLink:'',
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
      });
    };

    handleClose = ()=>{
      this.setState({
          open:false,
          openRow:false
      });
        BasicRequests.securedGet('/films')
            .then(result=>{
                if(result){
                    this.setState({
                        data:result.data
                    })
                }
            })
    };

    render(){
        let arr = window.innerHeight < 720 ? [5] : [5,7,20];
        return(
            <div className='film-content'>
            <MaterialTable
                options={{
                    pageSizeOptions:arr
                }}
                style={{width:'70%'}}
                title="My equipment"
                columns={this.state.columns}
                data={this.state.data}
                onRowClick={this.rowClick}
            />
            <div className='create-new' onClick={this.createNew}>Add film</div>
                <Dialog open={this.state.open} onClose={this.handleClose}><AddFilm/></Dialog>
                <Dialog open={this.state.openRow} onClose = {this.handleClose}>
                    <FilmData {...this.state.current}/>
                </Dialog>
            </div>
        )
    }
}


export default Films