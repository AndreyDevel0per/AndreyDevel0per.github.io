import './EventPage.css'
import { useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function EventPage() {
    const {id} = useParams()

    const [event, setEvent] = useState({})

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        axios.get(`https://78e49fb1217fe058.mokky.dev/events/` + id).then(res => {
            setEvent(res.data)
        })
    }, [])

    return (
        <div className="eventPage">
            <div className="eventPage__header">
                <div className="eventPage__img">
                    <img src={event.img} alt="" />
                </div>
                <div className="eventPage__text">
                    <div className="eventPage__container">
                        <h1>{event.name}</h1>
                        <div className="eventPage__info">
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ullam provident architecto eligendi praesentium? Quibusdam itaque ipsum molestiae blanditiis ullam, vero autem totam rerum harum. Tenetur quam consectetur quidem voluptatum.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="eventPage__line"></div>
            <div className="eventPage__date"></div>
            <div className="eventPage__place"></div>
            <div className="eventPage__buttons"></div>
        </div>
    )
}