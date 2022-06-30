import { csrfFetch } from './csrf';

const LOAD_TICKETS = 'tickets/loadTickets';
const ADD_TICKET = 'tickets/addTicket';
const PUT_TICKET = 'tickets/putTicket';
const DELETE_TICKET = 'tickets/deleteTicket';

//action creators
export const loadTickets = (tickets) => {
    return {
        type: LOAD_TICKETS,
        tickets: tickets
    };
};

export const addTicket = (ticket) => {
    return {
        type: ADD_TICKET,
        ticket: ticket
    }
}

export const putTicket = (ticket) => {
    return {
        type: PUT_TICKET,
        ticket: ticket
    }
}

export const deleteTicket = (id) => {
    return {
        type: DELETE_TICKET,
        id: id
    }
}

//thunk
export const fetchTickets = (userId) => async (dispatch) => {
    const response = await fetch(`api/tickets/${userId}/orders`);
    const tickets = await response.json();
    dispatch(loadTickets(tickets));
}

export const writeTicket = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/tickets', {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    dispatch(addTicket(data));
    return response;
}

export const updateTicket = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/tickets/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    dispatch(putTicket(data));
    return response;
}

export const removeTicket = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/tickets/${id}`, {
        method: 'DELETE'
    })

    const message = await response.json();
    dispatch(deleteTicket(id));
    return message;
}

//reducer
const initialState = { entries: {}, isLoading: true };

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TICKETS:
            const newState = {...state, entries: {...state.entries}}
            action.tickets.forEach(ticket => {
                newState.entries[ticket.id] = ticket
            })
            return newState;
        case ADD_TICKET:
            const newState_add = {...state, entries: {...state.entries}};
            newState_add.entries[action.ticket.id] = action.ticket;
            return newState_add;
        case PUT_TICKET:
            const newState_put = {...state, entries: {...state.entries}};
            newState_put.entries[action.ticket.id] = action.ticket;
            return newState_put;
        case DELETE_TICKET:
            const entries_to_delete = {...state.entries};
            delete entries_to_delete[action.id];
            return {...state, entries: entries_to_delete};
        default:
            return state;
    }
};

export default ticketReducer;