import React from 'react';
import avatar from '../../Assets/images/Avatar Pictures/VRC image A(F).png'
import { AiFillHeart } from 'react-icons/ai'
import { FiShare, FiCopy } from 'react-icons/fi'
// https://i.ibb.co/khbWg3S/VRC-image-O-F.png

const AvatarCard = ({ wishlist, setWishlist, item }) => {

    const { avatarName, picture, _id, rating, likes, price, sellerName } = item

    const handleWishlist = (itemId) => {
        if (wishlist.includes(itemId)) {
            setWishlist(wishlist.filter((id) => id !== itemId));
        } else {
            setWishlist([...wishlist, itemId]);
        }
    };
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='' src={picture} alt="Avatar" /></figure>
            <h1 className='p-2 font-medium'>Avatar Name "Avatown" nice Origibal avatar of avatown</h1>
            <div className='flex flex-row justify-between p-2'>
                <div className="rating rating-xs items-center">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <span className='font-medium text-sm text-gray-600'>{rating} & {likes}Likes</span>
                </div>
                <div ><AiFillHeart onClick={() => handleWishlist(_id)} className="text-lg cursor-pointer" color={wishlist.includes(_id) ? "red" : ""} /></div>
            </div>
            <div className="avatar placeholder p-2 items-center">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <img src={avatar} alt='avatar' />
                </div>
                <p className='mx-2 font-medium text-xs  text-gray-600'>{sellerName}</p>
            </div>
            <div className="card-title p-2">
                <p className='text-xl'><span className='text-xs font-bold'>$ </span>{price}</p>

            </div>
            <span className='p-2 text-sm font-medium'> PC Only</span>
            <div className='flex flex-row justify-between p-2'>

                <span className='text-xs font-medium'>Auto upload Service ready. you can use this avatar within 24 hours.</span>

                <div className="cursor-pointer dropdown dropdown-top dropdown-end">
                    <label tabIndex={0} className="cursor-pointer">
                        <FiShare />
                    </label>

                    <div tabIndex={0} className="mt-3 w-28 card card-compact dropdown-content bg-base-100 shadow">
                        <div className='flex flex-row justify-center tooltip' data-tip="copied"><FiCopy /> <span className='mx-2 text-xs '> Copy link</span></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AvatarCard;