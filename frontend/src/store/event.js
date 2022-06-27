import { csrfFetch } from './csrf';

const LOAD_EVENTS = 'events/loadEvents';
const ADD_EVENT = 'events/addEvent';

//action creators
export const loadEvents = (events) => {
    return {
        type: LOAD_EVENTS,
        events: events
    };
};

export const addEvent = (event) => {
    return {
        type: ADD_EVENT,
        event: event
    }
}

//thunk
export const fetchEvents = () => async (dispatch) => {
    const response = await fetch('/api/events');
    const articles = await response.json();
    dispatch(loadEvents(articles));
};

export const writeEvent = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/events', {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    dispatch(addEvent(data));
    return response;
}

//reducer
const initialState = { entries: {}, isLoading: true };

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS:
            const newState = {...state, entries: {...state.entries}}
            action.events.forEach(event => {
                newState.entries[event.id] = event
            })
            return newState;
        case ADD_EVENT:
            const newState_add = {...state, entries: {...state.entries}}
            newState_add.entries[action.event.id] = action.event
            return newState_add;
        default: 
            return state;
    }
};

export default eventReducer;

