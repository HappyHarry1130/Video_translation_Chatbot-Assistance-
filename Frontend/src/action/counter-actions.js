const increment=()=>{
    return{
        type:'increment',
    }
}
const decrement = () =>{
    return{
        type:'decrement',
    }
}

export {increment, decrement};