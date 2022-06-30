import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../../store/ticket'
import './Order.css';
import { NavLink, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { restoreUser } from '../../store/session';

const Order = () => {
    const dispatch = useDispatch();
    const userId = useParams().userId;
    const sessionUser = useSelector(state => state.session.user);
    const tickets = useSelector(state => state.ticket.entries);
    const Events_tickets = Object.values(tickets).map((ticket) => ticket.Event)
    useEffect(() => {
        restoreUser()
        dispatch(fetchTickets(userId))
    }, [])

    return (
        <div className='my_orders'>
            <h2>My Orders</h2>
            {Events_tickets.map((ele) => (
                <div className='single_ticket'>
                    <div className='single_ticket_time'>
                        <p>{ele.time.slice(0, 10)}</p>
                    </div>
                    <div className='single_ticket_title_location'>
                        <p id="single_ticket_title">{ele.title}</p>
                        <p id="single_ticket_location">{ele.location}</p>
                    </div>
                    <div className='single_ticket_edit_delete'>
                        <span id="edit_ticket_span">
                            <i id="edit_event" className="fa-solid fa-pen-to-square" />
                        </span>
                        <span id="delete_ticket_span">
                            <i id="delete_event" className="fa-solid fa-trash-can" />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Order;