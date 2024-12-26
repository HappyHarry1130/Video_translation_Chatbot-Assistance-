
const add_todo = payload => {
    return{
        type: 'add_todo',
        payload,
    };
};

const edit_todo = payload => {
    return {
        type: 'edit_todo',
        payload
    }
}

const delete_todo = payload =>{
    return{
        type: 'delete_todo',
        payload
    }
}

const showAll = payload =>{
    return{
        type: 'showAll',
        payload
    }
}

const showActive = payload =>{
    return{
        type: 'showActive',
        payload
    }
}

export {add_todo, edit_todo, delete_todo, showAll,showActive};

