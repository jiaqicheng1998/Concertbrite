import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './NewOrder.css'
import { writeTicket } from '../../store/ticket';
import { useParams } from 'react-router-dom';

const NewOrder = () => {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState('');
    const [parking, setParking] = useState(false);
    const [errors, setErrors] = useState([]);
    const eventId = useParams().id;
    const events = useSelector(state => state.event.entries)
    const userId = useSelector(state => state.session.user.id)
    const event = events[eventId]

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const ticketInfo = {
            user_id: userId,
            event_id: Number(eventId),
            phone: phone,
            need_parking: parking
        }
        console.log(ticketInfo)

        return dispatch(writeTicket(ticketInfo)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors)
                }
            }
        )
    }

    const ticket = useSelector(state => state.ticket.entries);

    // if (Object.values(ticket)[0] !== undefined) {
    //     const id = Object.values(ticket)[0].event_id
    //     return (
    //         <Redirect to={`/events/${id}`} />
    //     )
    // }

    return (
        <div className='get_ticket'>
            {errors?.map(error => (
                <li>{error}</li>
            ))}
            <div className='get_ticket_content'>
                <div className='get_ticket_left'>
                    <div className='get_ticket_left_text'>
                        <h2>{event.title}</h2>
                        <p>{event.location}</p>
                        <span>{event.time.slice(0, 10)}</span>
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
}

export default NewOrder;