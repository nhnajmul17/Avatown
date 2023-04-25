import React from 'react';
import avatar from '../../Assets/images/Avatar Pictures/VRC image A(F).png'


const AvatarCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='' src={avatar} alt="Avatar" /></figure>
            <h1 className='p-2 font-medium'>Avatar Name "Avatown" nice Origibal avatar of avatown</h1>
            <div className='flex flex-row justify-between p-2'>
                <div className="rating rating-xs items-center">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <span className='font-medium text-sm text-gray-600'>4.7 & 100Likes</span>
                </div>
                <div className="badge badge-secondary">NEW</div>
            </div>
            <div className="avatar placeholder p-2 items-center">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <img src={avatar} alt='avatar' />
                </div>
                <p className='mx-2 font-medium text-xs  text-gray-600'>Jhon Doe</p>
            </div>
            <div className="card-title p-2">
                <p className='text-xl'><span className='text-xs font-bold'>$ </span>50.00</p>
            </div>
            <div className='flex flex-row justify-between p-2'>
                <div>
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, voluptatem?</h2>
                </div>
                <div className="badge badge-secondary">NEW</div>
            </div>
        </div>
    );
};

export default AvatarCard;