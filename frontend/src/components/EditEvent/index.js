import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateEvent } from '../../store/event';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import WrongPlace from '../WrongPlace';

const EditEvent = ({ isLoaded }) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const eventId = useParams().id;
    const events = useSelector(state => state.event.entries)
    const sessionUser = useSelector(state => state.session.user);
    const currentEvent = events[eventId];
    const [title, setTitle] = useState(currentEvent?.title);
    const [description, setDescription] = useState(currentEvent?.description);
    const [img_url, setImg_url] = useState(currentEvent?.img_url);
    const [img_url_two, setImg_url_two] = useState(currentEvent?.img_url_two);
    const [location, setLocation] = useState(currentEvent?.location);
    const [time, setTime] = useState(currentEvent?.time.slice(0,10));
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const newEvent = {
            title,
            description,
            img_url,
            img_url_two,
            location,
            time
        }

        const toUpdateEvent = async () => {
            let res = await dispatch(updateEvent(newEvent, eventId)).catch( //store it in variable
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) {
                        setErrors(data.errors)
                    }
                }
            )

            if (res) {
                history.push("/")
            }
        }

        await toUpdateEvent();
    }

    return (
        isLoaded && sessionUser ? (
            <div className='form-container'>
                <form onSubmit={handleSubmit} id="new_event_form">
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <h2>Basic Info</h2>
                    <p>
                        Name your event and tell event-goers why they
                        should come. Add details that highlight what
                        makes it unique.
                    </p>
                    <div className='input_unit'>
                        <label>Title:</label>
                        <input
                            type='text'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            name='title'
                            placeholder='Be clear and descriptive.'
                        />
                    </div>
                    <div className='input_unit'>
                        <label>
                            Description:
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            name='description'
                            rows='8'
                            placeholder='What makes it unique?'
                        ></textarea>
                    </div>

                    <h2>Time and Location</h2>
                    <p>Help people in the area discover your event and let attendees know where and when to show up.</p>
                    <div className='input_unit'>
                        <label>
                            Location:
                        </label>
                        <input
                            type='text'
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            name='location'
                            placeholder='Example: Fox Center, Oakland, CA'
                        />
                    </div>
                    <div className='input_unit'>
                        <label>
                            Time:
                        </label>
                        <input
                            type='text'
                            onChange={(e) => setTime(e.target.value)}
                            value={time}
                            name='time'
                            placeholder='YYYY-MM-DD'
                        />
                    </div>

                    <h2>Add Images</h2>
                    <div className='input_unit'>
                        <label>
                            First image:
                        </label>
                        <input
                            type='text'
                            onChange={(e) => setImg_url(e.target.value)}
                            value={img_url}
                            name="img_url"
                        />
                    </div>
                    <div className='input_unit'>
                        <label>Second image:</label>
                        <input
                            type='text'
                            onChange={(e) => setImg_url_two(e.target.value)}
                            value={img_url_two}
                            name='img_url_two'
                        />
                    </div>
                    <button type='submit' id="submit_new_event">Submit</button>
                </form>
            </div>
        )
        :
        (<WrongPlace />)
    )
};

export default EditEvent;