import {csrfFetch} from './csrf';

const LOAD_LIKES = 'likes/loadLikes'
const POST_LIKE = 'likes/postLike';
const DELETE_LIKE = 'likes/deleteLike';

export const loadLikes = (likes) => {
    return {
        type: LOAD_LIKES,
        likes: likes
    }
}

export const postLike = (like) => {
    return {
        type: POST_LIKE,
        like: like
    }
}

export const deleteLike = (like) => {
    return {
        type: DELETE_LIKE,
        like: like
    }
}

//thunk
export const loadLikesThunk = () => async (dispatch) => {
    const response = await fetch('/api/eventlikes');
    const likes = await response.json();
    console.log(likes)
    dispatch(loadLikes(likes))
}

export const postLikeThunk = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/eventlikes/${id}/likes`, {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    dispatch(postLike(data));
    return response;
}

export const deleteLikeThunk = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/eventlikes/${id}/likes`, {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    dispatch(postLike(data));
    return response;
}

const initialState = { entries: {}, isLoading: true };

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LIKES:
            const newState = {...state, entries: {...state.entries}}
            console.log(action.likes)
            action.likes.forEach(like => {
                newState.entries[like.id] = like
            })
            return newState;
        case POST_LIKE:
            const newState_post = {...state, entries: {...state.entries}};
            newState_post.entries[action.like.id] = action.like;
            return newState_post;
        case DELETE_LIKE:
            const entries_to_delete = {...state.entries}
            delete entries_to_delete[action.like.id]
            return {...state, entries: entries_to_delete}
        default:
            return state
    }
}

export default likeReducer;