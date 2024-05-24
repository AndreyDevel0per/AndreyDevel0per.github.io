import './Event.css'
import eventImg from '../../img/events/event1.webp'

export default function Event() {
    return(
        <div className='event'>
            <div className="event__img">
                <img src={eventImg} alt="" />
            </div>
            <div className="event__text">
                <div className="event__category">
                    Music
                </div>
                <div className="event__header">
                    <h2>
                        Someone
                    </h2>
                </div>
                <div className="event__place">
                    Somewhere
                </div>
                <div className="event__time">
                    7:00
                </div>
            </div>
        </div>
    )
}