let initialValue = { sortedData: [] }
function sortReducer(state = initialValue, action) {
    switch (action.type) {
        case 'default':
            return { ...state, sortedData: action.payload }
        case "searching":
            let searchdata = [...action.payload.x]
            let a = action.payload.value.trim()
            let updated = searchdata.filter((e) => {
                return e.title.toUpperCase().includes(a.toUpperCase())
            })
            return { ...state, sortedData: updated }

        case "sorting":
            let data = [...action.payload.x]
            let value = action.payload.value;
            function sortingValue(a, b) {
                if (value === "h-l") {
                    return a.price - b.price;
                }
                if (value === "l-h") {
                    return b.price - a.price;
                }
                if (value === "a-z") {
                    return a.title
                        .trim()
                        .toUpperCase()
                        .localeCompare(b.title.trim().toUpperCase());
                }
                if (value === "z-a") {
                    return b.title
                        .trim()
                        .toUpperCase()
                        .localeCompare(a.title.trim().toUpperCase());
                }
            }
            let newData = data.sort(sortingValue);
            return { ...state, sortedData: newData }

        case 'category':
            let data1 = [...action.payload.x]
            let value1 = action.payload.value;
            let filtered = data1.filter((item) => {
                if (value1 === 'all') {
                    return item;
                }
                else if (value1 === item.category) {
                    return item;
                }
            })
            return { ...state ,sortedData:filtered}

        default:
            return state;
    }
}

export default sortReducer;