import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AvatarSlider from '../../Components/AvatarSlider/AvatarSlider';

const Item = () => {
    const { id } = useParams()
    const [avatarData, setAvatarData] = useState([])
    useEffect(() => {
        fetch('/avatar.json')
            .then(res => res.json())
            .then(data => {
                setAvatarData(data.filter(item => item._id === id))
            })
    }, [id])
    return (
        <div className='p-5'>
            <div>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li> <Link to='/'>Home   </Link></li>
                        <li>Full avatar</li>
                        <li>Human based</li>
                        <li>{avatarData[0]?.gender}</li>
                    </ul>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col  py-5 card card-side bg-base-100 ">
                <div className='md:place-items-center w-2/4 h-3/4'>
                    <img className='' src={avatarData[0]?.picture} alt="Avatar" />
                </div>
                <div className="px-5">
                    <h2 className="card-title text-4xl">{avatarData[0]?.avatarName}</h2>
                    <p className='text-base'>Created By: <span className='font-medium text-gray-400'>{avatarData[0]?.sellerName}</span></p>
                    <div className="rating rating-xs items-center">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <span className='font-medium text-sm text-gray-600 mx-2'> {avatarData[0]?.rating}
                        </span>
                    </div>
                    <span className='font-medium text-sm text-gray-600 mx-2'> {avatarData[0]?.likes} Likes
                    </span>
                    <p>Auto upload Service ready. you can use this avatar within 24 hours.</p>
                    <p><span className='text-base font-medium'>Gender:</span> {avatarData[0]?.gender}</p>
                    <p className='my-5'><span className='text-base font-medium '>About: </span>{avatarData[0]?.about}</p>

                </div>
                <div className="card border">
                    <div className="card-body">
                        <h2 className="card-title">Buy New: <span className='text-violet-500'>${avatarData[0]?.price}</span></h2>
                        <p>$5.00 Shipping & Import Fees Deposit to Bangladesh Details
                            Delivery <span className='font-bold'>Monday, May 8.</span>  Order within <span className='text-green-600'>10 hrs 50 mins</span>
                        </p>
                        <p className='text-lg font-bold'>In Stock  <select className="select select-bordered select-xs">
                            <option disabled selected>Qty</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select></p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-warning">Buy Now</button>
                            <button className="btn btn-accent">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div><AvatarSlider></AvatarSlider></div>
        </div>
    );
};

export default Item;