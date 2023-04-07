import React from 'react';

import Card from './Card';

import './Rating.css';

import starImg from '../media/icon-star.svg'

const Rating = () => {
    return (
        <Card>
            <div className='star_img_container'>
                <img src={starImg} alt=''/>
            </div>
            <br></br>
            <h2>How did we do?</h2>
            <p className='text'>
                Please let us know how we did with your support request. All feedback is 
                appreciated to help us improve our offering!
            </p>
            <div className='rating'>
                <div className='rating_container'>1</div>
                <div className='rating_container'>2</div>
                <div className='rating_container'>3</div>
                <div className='rating_container'>4</div>
                <div className='rating_container'>5</div>
            </div>
            <button className='submit_btn'>Submit</button>
        </Card>
    )
}

export default Rating;