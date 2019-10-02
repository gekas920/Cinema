namespace ExpressNamespace {
    export interface User {
        login:string,
        password:string,
        email?:string,
        date?:Date,
        firstName?:string,
        secondName?:string,
        _id?:string
    }
}

export default ExpressNamespace