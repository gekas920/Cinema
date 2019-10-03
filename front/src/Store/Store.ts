
interface Act {
    type:string
}

class Reducers {
    public Reduce(state={},action:Act){
        return state
    }
}


const AllReducers = new Reducers();

export default AllReducers