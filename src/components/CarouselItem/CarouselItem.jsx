import './CarouselItem.css'

export default function CarouselItem({name}) {
    return (
        <div className='carouselItem'>
            <span>{name}</span>
        </div>
    )
}

