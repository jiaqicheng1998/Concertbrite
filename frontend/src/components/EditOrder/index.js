import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateTicket } from '../../store/ticket';
import { useParams } from 'react-router-dom';
import './EditOrder.css'

const EditOrder = () => {
    const dispatch = useDispatch();
    const eventId = useParams().eventId;
    const events = useSelector(state => state.event.entries)
    const event = events[eventId]
    const ticketId = useParams().ticketId;
    const tickets = useSelector(state => state.ticket.entries);
    const ticket = tickets[ticketId];
    const [phone, setPhone] = useState("");
    const [parking, setParking] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const ticketInfo = {
            user_id: ticket.user_id,
            event_id: ticket.event_id,
            phone: phone,
            need_parking: parking
        }

        return dispatch(updateTicket(ticketInfo, ticketId)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors)
                }
            }
        )
    }

    return (
        <div className='edit_ticket'>
            {errors?.map((error, idx) => (
                <li key={idx}>{error}</li>
            ))}
            <div className='edit_ticket_content'>
                <div className='edit_ticket_left'>
                    <div className='edit_ticket_left_text'>
                        <h2>{event.title}</h2>
                        <h2>{event.location}</h2>
                        <span>{event.time.slice(0, 10)}</span>
                    </div>
                    <div className='image_container_ticket' style={{ backgroundImage: `url(${event.img_url})` }}></div>
                </div>
                <div className='edit_ticket_right'>
                    <form onSubmit={handleSubmit}>
                        <label>phone</label>
                        <input
                            id="edit_phone"
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
                        <button id="edit_ticket_button" type='submit'>Edit Ticket</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default EditOrder;