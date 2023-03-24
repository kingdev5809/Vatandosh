import React, { useEffect, useState } from 'react'
import './InformationServicesSlider.scss'
import data from '../mock'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BsFillCalendarMinusFill } from 'react-icons/bs'

export const InformationServicesSlider = () => {
    const [img, setImg] = useState(1)

    const handleRight = () => {
        if (img === 3)
            setImg(prev => prev = 1)
        else
            setImg(prev => ++prev)
    }

    const handleLeft = () => {
        if (img === 1)
            setImg(prev => prev = 3)
        else
            setImg(prev => --prev)
    }

    let slideInterval

    const autoPlay = () => {
        slideInterval = setInterval(handleRight, 8000)
    }

    useEffect(() => {
        autoPlay()
        return () => clearInterval(slideInterval)
    }, [img])

    return (
        <div className='main-hero'>
            {data.map(card => (
                <div
                    className={`main-hero-slider ${card.id === img ? 'active' : ''}`}
                    key={card.id}
                    style={{
                        backgroundImage: `url(${card.img})`,
                    }}>
                    <h2>{card.title}</h2>
                    <div className={`navigation-line ${card.id === img ? 'active' : ''}`} />
                    <div className='main-hero-slider-bottom'>
                        <div className='main-hero-slider-bottomCalendar'>
                            <span><BsFillCalendarMinusFill /></span>
                            <p>{card.data}</p>
                        </div>
                        <div className='main-hero-slider-bottomBtns'>
                            <button onClick={handleLeft}><AiOutlineLeft size={18} /> </button>
                            <button onClick={handleRight}><AiOutlineRight size={18} /> </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}