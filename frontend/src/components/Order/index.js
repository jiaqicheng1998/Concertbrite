import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTicket, fetchTickets } from '../../store/ticket'
import './Order.css';
import { NavLink } from 'react-router-dom';
import { restoreUser } from '../../store/session';
import WrongPlace from '../WrongPlace';

const Order = ({ isLoaded }) => {
    const dispatch = useDispatch();
    const userId = useParams().userId;
    const sessionUser = useSelector(state => state.session.user);
    const tickets = useSelector(state => state.ticket.entries);

    useEffect(() => {
        restoreUser()
        dispatch(fetchTickets(userId))
    }, [dispatch, userId])

    const handleClick = (event, id) => {
        dispatch(removeTicket(id))
    }

    return (
        isLoaded && sessionUser ? (
            <div className='my_orders'>
                <h2>My Orders</h2>
                {Object.values(tickets).map((ele) => (
                    <div className='single_ticket' key={ele.id}>
                        <div className='single_ticket_time'>
                            <p>{ele.Event?.time.slice(0, 10)}</p>
                        </div>
                        <div className='single_ticket_title_location'>
                            <p id="single_ticket_title">{ele.Event?.title}</p>
                            <p id="single_ticket_location">{ele.Event?.location}</p>
                        </div>
                        <div className='single_ticket_edit_delete'>
                            <NavLink to={`/events/${ele.Event?.id}/orders/${ele.id}/edit`}>
                                <span id="edit_ticket_span">
                                    <i id="edit_event" className="fa-solid fa-pen-to-square" />
                                </span>
                            </NavLink>
                            <span id="delete_ticket_span" onClick={event => handleClick(event, ele.id)}>
                                <i id="delete_event" className="fa-solid fa-trash-can" />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        )
        :
        (<WrongPlace />)
    )
}

export default Order;