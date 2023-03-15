import React from 'react'
import { Link } from 'react-router-dom'
import arrowRight from "../../../../assets/images/about/arrow-right.svg"

import "./councilHero.scss"

const CouncilHero = ({title,description,pagePath}) => {
  return (
    <section className='council-hero'>
        <div className="council-hero__container container">
            <div className="council-hero__inner">
                <h2 className="council-hero__title">{title}</h2>

                <p className="council-hero__desc">
                    {description}
                </p>

                <nav className='council-hero__breadcrumb_nav' aria-label="breadcrumb">
                    <ul className="council-hero__breadcrumb">
                        <li className="council-hero__breadcrumb_item">
                            <Link className='council-hero__breadcrumb_link' to="/">Asosiy sahifa</Link>
                            <img src={arrowRight} alt="breadcrumb line" />
                        </li>
                         
                        <li className="council-hero__breadcrumb_item breadcrumb_item_active" aria-current="page">{pagePath}</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}

export default CouncilHero