const initialstate = [];
const todoReducer = (state = initialstate, action) => {

    switch (action.type) {

        case 'add_todo':
            return [...state, action.payload];
        case 'edit_todo': 
            const _state = state.slice();
            const old = _state[action.payload];
            _state[action.payload] = {text:old.text, status: old.status === 'active' ? 'completed' : 'active'}
            return _state;
        case 'delete_todo':
            const state1=state.slice();
            state1.splice(action.payload,1);         
            return state1;
        case 'showAll':
            const state2=state.slice();

            return state2;
        case 'showActive':
            const state3=state.slice();
            state3.splice(2,3);
            return state3;
        default:
            return state;
    }
}

export default todoReducer;