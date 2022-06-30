import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTicket, fetchTickets } from '../../store/ticket'
import './Order.css';
import { NavLink, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { restoreUser } from '../../store/session';

const Order = () => {
    const dispatch = useDispatch();
    const userId = useParams().userId;
    const sessionUser = useSelector(state => state.session.user);
    const tickets = useSelector(state => state.ticket.entries);

    useEffect(() => {
        restoreUser()
        dispatch(fetchTickets(userId))
    }, [dispatch])

    const handleClick = (event, id) => {
        console.log('delete this ticket?', id)
        dispatch(deleteTicket(id))
    }

    return (
        <div className='my_orders'>
            <h2>My Orders</h2>
            {Object.values(tickets).map((ele) => (
                <div className='single_ticket'>
                    <div className='single_ticket_time'>
                        <p>{ele.Event.time.slice(0, 10)}</p>
                    </div>
                    <div className='single_ticket_title_location'>
                        <p id="single_ticket_title">{ele.Event.title}</p>
                        <p id="single_ticket_location">{ele.Event.location}</p>
                    </div>
                    <div className='single_ticket_edit_delete'>
                        <p>{ele.id}</p>
                        <NavLink to={`/${userId}/orders/${ele.id}/edit`}>
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

}

export default Order;