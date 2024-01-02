import axios from "axios";

//api fetching
async function FetchHandler(dispatch, value) {
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

//single product api fetch
async function singleFetch(dispatch, id) {
    let url = `https://dummyjson.com/products/${id}`
    try {
        let res = await axios.get(url)
        let data = await res.data;
        dispatch({ type: 'single', payload: data })
    }
    catch (err) {
        console.log('err fetching data', err);
    }
}

//input search filter 
function searchHandler(e, x) {
    let { value } = e.target;
    return { type: 'searching', payload: { value, x } }
}

//sorting filter
function sortHandler(e, x) {
    let { value } = e.target;
    return { type: 'sorting', payload: { value, x } }
}

//category filter
function filterHandler(e, x) {
    let { value } = e.target;
    return { type: 'category', payload: { value, x } }
}

//adding items to cart 
function addToCart(singleData, count) {
    return { type: 'addToCart', payload: { singleData, count } }
}

//removing item from cart
function removeHandler(id){
    return {type:'remove',payload:id}
}

//local storage for getting items
function getData(){
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
   }

export { FetchHandler, searchHandler, sortHandler,  filterHandler, singleFetch, addToCart , getData, removeHandler};
