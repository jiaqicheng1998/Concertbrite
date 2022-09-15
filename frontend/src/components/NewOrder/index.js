import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NewOrder.css'
import { writeTicket } from '../../store/ticket';
import { useParams } from 'react-router-dom';
import { fetchEvents } from '../../store/event';
import { useHistory } from 'react-router-dom';
import WrongPlace from '../WrongPlace';

const NewOrder = (isLoaded) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [phone, setPhone] = useState('');
    const [parking, setParking] = useState(false);
    const [errors, setErrors] = useState([]);
    const eventId = useParams().id;
    const events = useSelector(state => state.event.entries)
    const sessionUser = useSelector(state => state.session.user);
    const tickets = useSelector(state => state.ticket.entries);
    const event = events[eventId];

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const ticketInfo = {
            user_id: sessionUser.id,
            event_id: Number(eventId),
            phone: phone,
            need_parking: parking
        }

        const toCreateTicket = async () => {
            let res = await dispatch(writeTicket(ticketInfo)).catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) {
                        setErrors(data.errors)
                    }
                }
            )

            if (res) {
                history.push(`/${sessionUser.id}/orders`)
            }
        }

        await toCreateTicket();
    }

    return (
        isLoaded && sessionUser && tickets ? (
            <div className='get_ticket'>
                {errors?.map(error => (
                    <li>{error}</li>
                ))}
                <div className='get_ticket_content'>
                    <div className='get_ticket_left'>
                        <div className='get_ticket_left_text'>
                            <h2>{event?.title}</h2>
                            <p>{event?.location}</p>
                            <span>{event?.time.slice(0, 10)}</span>
                        </div>
                        <div className='image_container_ticket' style={{ backgroundImage: `url(${event?.img_url})` }}></div>
                    </div>
                    <div className='get_ticket_right'>
                        <form onSubmit={handleSubmit}>
                            <label>phone</label>
                            <input
                                id="phone"
                                type='text'
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                                name='phone'
                            />
                            <label>Need a parking?</label>
                            <div className='radio_unit'>
                                <input
                                    className='radio_button'
                                    type='radio'
                                    onChange={(e) => { setParking(true) }}
                                    name="need_parking"
                                    value={parking}
                                />
                                <p>yes</p>
                            </div>
                            <div className='radio_unit'>
                                <input
                                    className='radio_button'
                                    type='radio'
                                    onChange={(e) => { setParking(false) }}
                                    name="need_parking"
                                    value={parking}
                                />
                                <p>no</p>
                            </div>
                            <button id="get_ticket_button" type='submit'>Get Ticket</button>
                        </form>
                    </div>
                </div>
            </div>
        )
        :
        (<WrongPlace />)
    )
}

export default NewOrder;