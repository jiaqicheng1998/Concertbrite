import { csrfFetch } from './csrf';

const LOAD_EVENTS = 'events/loadEvents';
const ADD_EVENT = 'events/addEvent';
const PUT_EVENT = 'events/putEvent'

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

export const putEvent = (event) => {
    return {
        type: PUT_EVENT,
        event: event
    }
}

//thunk
export const fetchEvents = () => async (dispatch) => {
    const response = await fetch('/api/events');
    const events = await response.json();
    dispatch(loadEvents(events));
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

export const updateEvent = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    dispatch(putEvent(data));
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
            const newState_add = {...state, entries: {...state.entries}};
            newState_add.entries[action.event.id] = action.event;
            return newState_add;
        case PUT_EVENT:
            const newState_put = {...state, entries: {...state.entries}};
            newState_put.entries[action.event.id] = action.event;
            return newState_put;
        default: 
            return state;
    }
};

export default eventReducer;

