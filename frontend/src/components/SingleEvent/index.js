import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../store/event';
import './SingleEvent.css';

const SingleEvent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvents());
    }, []);

    const events = useSelector(state => state.event.entries);
    const eventId = useParams().id;
    const event = events[eventId];

    return (
        <div className='single_event'>
            <div className='event_container'>
                <div className='img_container_single' style={{ backgroundImage: `url(${event?.img_url})` }}>
                </div>
                <div className='info_container_single'>
                    <h2>{event?.title}</h2>
                    <p id='time_single'>{event?.time.slice(0, 10)}</p>
                    <p id='location_single'>{event?.location}</p>
                    <button>Get Tickets</button>
                </div>
            </div>
            <div className='detailed_info'>
                <div className='detailed_info_main'>
                    <p>{event?.description}</p>
                    <h2>About this event</h2>
                    <p>
                        NOTE: Tickets will only be available online through Eventbrite.
                        No tickets will be sold at the door. Please purchase your tickets in advance.
                        Children under 5 are admitted for free.
                    </p>
                    <p>
                        Discover the world's most advanced holographic experience with your friends
                        and family in the heart of San Francisco, in the same building as the Verse:
                        Art of the Future exhibit. Are you looking for a little magic with your
                        special someone, an engaging adventure and fun for the whole family, or the
                        next hit content for your TikTok feed?

                        The Unreal Garden is a space of possibilities filled with magical flora, fauna
                        and artworks, a space to be transformed by your presence and energy. A space
                        where everyone has their own unique experience. The experience uses the
                        Microsoft HoloLens 2, a powerful mixed reality headset that allows you to see
                        your surroundings and fellow guests, while cool augmented creatures, plant
                        life and art come to life around you.

                        We are located in the historic San Francisco Mint, presented by NPU Events and powered by Enklu.

                        For more information, visit www.theunrealgarden.com
                    </p>
                    <img src='https://dbkpop.com/wp-content/uploads/2018/04/GI-DLE_Dumdi_Dumdi_Members.jpg' />
                    <h2> Public Transit:</h2>
                    <p>
                        Take CalTrain or SamTrans to the Hillsdale or Hayward Park Stations for a short walk to Fairgrounds. The Hillsdale CalTrain station is located across the street from the Event Center. Entry to the Event Center is 2701 S. Delaware (closest to 28th Ave.). The Hayward Park CalTrain station is about a ten-minute walk to the Delaware St. entry. Uber and Lyft can also accommodate you at the Hillsdale Train Station and 101 Franklin Parkway, for less congested pickup and drop-off.

                        IF YOU DRIVE:

                        Free parking: Franklin Templeton at 900 Yates Way (Saratoga Drive/Yates Way) on Saturday and Sunday – PARKING IS LIMITED.

                        Both the Hillsdale and Hayward Park Caltrain stations have low-cost parking and are located within walking distance of the San Mateo Event Center. PARKING IS LIMITED. Onsite parking at the Event Center is $15 per vehicle at the Event Center Main Entrance at 1346 Saratoga Drive - no in/outs provided. PARKING IS LIMITED
                    </p>
                </div>
                <div className='detailed_info_rest'>
                    <div className='detailed_info_rest_unit'>
                        <div className='detailed_info_rest_icon'>
                            <i className="fa-solid fa-calendar-days" />
                        </div>
                        <div className='detailed_info_rest_text'>
                            <h2>Date and time</h2>
                            <p>{event?.time.slice(0, 10)}</p>
                        </div>
                    </div>
                    <div className='detailed_info_rest_unit'>
                        <div className='detailed_info_rest_icon'>
                            <i className="fa-solid fa-location-dot" />
                        </div>
                        <div className='detailed_info_rest_text'>
                            <h2>Location</h2>
                            <p>{event?.location}</p>
                        </div>
                    </div>
                    <div className='detailed_info_rest_unit'>
                        <div className='detailed_info_rest_icon'>
                            <i className="fa-solid fa-rectangle-xmark" />
                        </div>
                        <div className='detailed_info_rest_text'>
                            <h2>Cancelation Policy</h2>
                            <p>Cancelation up to 7 days before event</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent;