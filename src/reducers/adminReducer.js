import {
    types
} from "../actions/types";

const initialState = {
    stats : {
        postsByDay:[],
        downvotePosts: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_STATS:        
            return{
                ...state,
                stats: action.payload.stats
            }
        default:
            return state;
    }
}