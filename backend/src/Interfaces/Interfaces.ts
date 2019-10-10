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
}

export default ExpressNamespace