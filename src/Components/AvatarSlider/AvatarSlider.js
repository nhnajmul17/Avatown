import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


const AvatarSlider = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [avatars, setAvatars] = useState([]);
    useEffect(() => {
        fetch('/avatar.json')
            .then(res => res.json())
            .then(data => setAvatars(data))
    }, [])
    return (
        <div className='p-5 my-5'>
            <h3 className='text-4xl text-center font-bold'>Related Avatars</h3>
            <Slider {...settings}>
                {
                    avatars.map(avatar => <Link to={`/avatardetails/${avatar._id}`}><div className='text-center'>
                        <img className='p-5 rounded-circle' src={avatar.picture} alt="" />
                        <h1 className='font-bold'>{avatar.avatarName}</h1>
                        <p className='text-sm'>Rating: {avatar.rating}</p>
                        <p className='text-sm font-bold'>Price: <span className='text-green-500'>${avatar.price}</span></p>
                    </div></Link>
                    )
                }

            </Slider>

        </div>
    );
};

export default AvatarSlider;