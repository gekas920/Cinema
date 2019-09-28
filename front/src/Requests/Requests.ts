import axios, {AxiosPromise} from 'axios'

let instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:1000,
    headers:{
        'Authorization':''
    }
});



class Requests{
    private api:string = '';
    public create(url:string,body:object):AxiosPromise<any>{
        return instance.post(url,body);
    }

    public update(url:string,body:object):AxiosPromise<any>{
        return instance.put(url,body)
    }

    public get(url:string):AxiosPromise<any>{
        return instance.get(url)
    }

    public delete(url:string):AxiosPromise<any>{
        return instance.delete(url)
    }
}

const BasicRequests = new Requests();

export default BasicRequests
