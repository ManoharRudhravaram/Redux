import axios from "axios";

async function FetchHandler(dispatch, value) {
    console.log(value);
    let { first } = value;
    let url = `https://dummyjson.com/products?skip=${first}&limit=${10}`
    try {
        let res = await axios.get(url)
        let data = await res.data.products;
        dispatch({ type: 'fetch', payload: data })
        dispatch({ type: 'default', payload: data })
    }
    catch (err) {
        console.log('err fetching data', err);
    }
}

function searchHandler(e, x) {
    let { value } = e.target;
    return { type: 'searching', payload: { value, x } }
}

function CatHandler(e,x){
    let { value } = e.target;
    return {type:'filter',payload:{value,x}}
}

function sortHandler(e, x) {
    let { value } = e.target;
    return { type: 'sorting', payload: { value, x } }
}

function filterHandler(e,x){
    let {value}=e.target;
    return {type:'category',payload:{value,x}}
}
export { FetchHandler, searchHandler, sortHandler ,CatHandler, filterHandler};
