import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateTicket } from '../../store/ticket';
import { useParams } from 'react-router-dom';
import './EditOrder.css'
import { fetchEvents } from '../../store/event';
// import { restoreUser } from '../../store/session';
import WrongPlace from '../WrongPlace';

const EditOrder = ({ isLoaded }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const eventId = useParams().eventId;
    const events = useSelector(state => state.event.entries)
    const event = events[eventId]
    const ticketId = useParams().ticketId;
    // const tickets = useSelector(state => state.ticket.entries);
    const [phone, setPhone] = useState("");
    const [parking, setParking] = useState('');
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        // restoreUser()
        dispatch(fetchEvents());
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        // await dispatch(fetchTickets(sessionUser.id));
        // const ticket = tickets[ticketId];

        const ticketInfo = {
            user_id: sessionUser?.id,
            event_id: eventId,
            phone: phone,
            need_parking: parking
        }

        const toEditTicket = async () => {
            let res = await dispatch(updateTicket(ticketInfo,ticketId)).catch(
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

        await toEditTicket();
    }

    return (
        isLoaded && sessionUser ? (
            <div className='edit_ticket'>
                <div className='error-msg'>
                    {errors?.map((error, idx) => (
                        <div key={idx}> ❌ {error}</div>
                    ))}
                </div>
                <div className='edit_ticket_content'>
                    <div className='edit_ticket_left'>
                        <div className='edit_ticket_left_text'>
                            <h2>{event?.title}</h2>
                            <h2>{event?.location}</h2>
                            <span>{event?.time.slice(0, 10)}</span>
                        </div>
                        <div className='image_container_ticket' style={{ backgroundImage: `url(${event?.img_url})` }}></div>
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
                                placeholder='eg.1231231234'
                            />
                            <label>Need a parking?</label>
                            <div className='radio_unit'>
                                <input
                                    className='radio_button'
                                    type='radio'
                                    onChange={(e) => { setParking('need parking') }}
                                    name="need_parking"
                                    value={parking}
                                />
                                <p>yes</p>
                            </div>
                            <div className='radio_unit'>
                                <input
                                    className='radio_button'
                                    type='radio'
                                    onChange={(e) => { setParking('no need') }}
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
        :
        (<WrongPlace />)
    )
}


export default EditOrder;