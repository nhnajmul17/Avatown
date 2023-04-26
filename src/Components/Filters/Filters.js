import React from 'react';


const Filters = () => {
    return (
        <div>
            <div>
                <p className='font-bold'>Category</p>
                <ul className='ml-2'>
                    <li>Full avatar</li>
                    <li>Others</li>
                </ul>
            </div>

            <div>
                <p className='font-bold'>Content</p>
                <ul className='ml-2'>
                    <li> <input type="checkbox" name="" id="" /> VRChat(Quest)</li>
                    <li> <input type="checkbox" name="" id="" /> VRChat(PCVR)</li>
                    <li> <input type="checkbox" name="" id="" /> Others</li>
                </ul>
            </div>
            <div>
                <p className='font-bold'>Price</p>
                <ul className='ml-2'>
                    <li> <input type="checkbox" name="" id="" /> Under $10</li>
                    <li> <input type="checkbox" name="" id="" /> $10 to $20</li>
                    <li> <input type="checkbox" name="" id="" /> $20 to $30</li>
                    <li> <input type="checkbox" name="" id="" /> $30 to $40</li>
                    <li> <input type="checkbox" name="" id="" /> $40 to $50</li>
                    <li> <input type="checkbox" name="" id="" /> $50 & above</li>

                </ul>
            </div>
            <div>
                <p className='font-bold'>Polygon Amount</p>
                <ul className='ml-2'>
                    <li> <input type="checkbox" name="" id="" /> Under $100</li>
                    <li> <input type="checkbox" name="" id="" /> $100 to $200</li>
                    <li> <input type="checkbox" name="" id="" /> $200 to $300</li>
                    <li> <input type="checkbox" name="" id="" /> $300 to $400</li>
                    <li> <input type="checkbox" name="" id="" /> $400 to $500</li>
                    <li> <input type="checkbox" name="" id="" /> $500 & above</li>

                </ul>
            </div>
            <div>
                <p className='font-bold'>Auto Upload Support</p>
                <ul className='ml-2'>
                    <li><input type="checkbox" name="" id="" /> Supported</li>
                    <li><input type="checkbox" name="" id="" /> Unsupported</li>
                </ul>
            </div>
        </div >
    );
};

export default Filters;