namespace ExpressNamespace {
    export interface User {
        login:string,
        password:string,
        email:string,
        date:Date,
        firstName:string,
        secondName:string,
        admin:boolean,
        _id:string
    }

    export interface UserData {
        date:Date,
        firstName:string,
        secondName:string,
        email:string,
        admin:boolean
    }
    
    export interface FilmInfo {
        title:string,
        description:string,
        actors:string,
        genres:string,
        link:string,
        secondLink:string,
        createdBy:string,
        tenant:string
    }
}

export default ExpressNamespace