import Event from '../Event/Event'
import './Day.css'

export default function Day() {
    return (
        <div className='day'>
            <div className="day__header">
                <h1>Monday, May 20</h1>
            </div>
            <div className="day__container">
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
            </div>
        </div>
    )
}