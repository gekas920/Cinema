import React from 'react';
import MaterialTable from 'material-table';

interface TableRow{
    title:string,
    actors:string,
    description:string,
    genres:string
    // link:string,
    // createdBy:string,
    // tenant:string
}
interface TableHeaders{
    title:string,
    field:string
}
interface IProps {}
interface IState {
    columns:TableHeaders[],
    current:TableRow,
    data:TableRow[]
}

class Films extends React.Component<IProps,IState>{
    constructor(props:IProps){
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
            data:[]
        }
    }

    render(){
        return(
            <div style={{display:'flex',justifyContent:'center'}}>
            <MaterialTable
                style={{width:'70%'}}
                title="My equipment"
                columns={this.state.columns}
                data={this.state.data}
            />
            </div>
        )
    }
}


export default Films