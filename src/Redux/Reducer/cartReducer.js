import { getData } from '../Action/index';

const initial = { cartData: getData(), total: 0 }
function cartReducer(state = initial, action) {
  switch (action.type) {
    case 'total':
      let totalPrice = state.cartData.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0)

      return { ...state, total: totalPrice }
    case 'addToCart':
      let { count, singleData: { thumbnail, price, title, id, stock } } = action.payload;
      let sameProd = state.cartData.find((item) => {
        return item.id == id
      })

      if (sameProd) {
        let uniqueArr = state.cartData.map((item) => {
          if (item.id == sameProd.id) {
            let finalCount = item.count + count
            let newData = item.stock > finalCount ? finalCount : item.stock
            return { ...item, count: newData }
          }
          else {
            return { ...item }
          }
        })
        return { ...state, cartData: uniqueArr }
      }

      else {
        let obj = {
          thumbnail, title, price, count, id, stock
        }
        return { ...state, cartData: [...state.cartData, obj] }
      }

    default:
      return state;
  }
}

export default cartReducer;