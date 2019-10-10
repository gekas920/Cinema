import axios, {AxiosError, AxiosPromise} from 'axios'

let instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:1000,
    headers:{
        'Authorization':''
    }
});

instance.interceptors.response.use((res)=> {
    return res;
},
    (error:AxiosError) => {
    if(error.response){
        if(error.response.status === 401){
            localStorage.clear();
            window.location.href = '/register'
        }
    }
    });


class Requests{
    private api:string = '/secured';
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

    public securedGet(url:string):AxiosPromise<any>{
        return instance.get(this.api+url,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
    }
}

const BasicRequests = new Requests();

export default BasicRequests
