import './Event.css'
import { Link } from 'react-router-dom'
 
export default function Event({id, img, category, name, place, time}) {
    return(
        <Link to={`/event/${id}`} className='event'>
            <div className="event__img">
                <img src={img} alt="" />
            </div>
            <div className="event__text">
                <div className="event__category">
                    {category}
                </div>
                <div className="event__header">
                    <h2>
                        {name}
                    </h2>
                </div>
                <div className="event__place">
                    {place}
                </div>
                <div className="event__time">
                    {time}
                </div>
            </div>
        </Link>
    )
}