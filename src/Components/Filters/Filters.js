import React from 'react';


const Filters = ({ Filters, setFilters, gender, setGender }) => {

    const handleFilters = (item) => {
        if (Filters.includes(item) && (item === 'Full avatar')) {
            // setFilters(Filters.filter((id) => id !== item));
            setGender([])
            setFilters([])

        }
        else if (Filters.includes(item)) {
            setFilters(Filters.filter((id) => id !== item));
        }
        else if (item === "Male") {
            const newfilter = Filters.filter((id) => id !== "Female");
            setFilters([...newfilter, item])
        }
        else if (item === "Female") {
            const newfilter = Filters.filter((id) => id !== "Male");
            setFilters([...newfilter, item])
        }
        else {
            setFilters([...Filters, item]);
        }
    };

    const handleGender = (gen) => {
        handleFilters(gen)
        if (gender.includes(gen)) {

            setGender(gender.filter((data) => data !== gen));
        }
        else {
            setGender([gen]);
        }
    }
    return (
        <div>
            <div>
                <p className='font-bold'>Category</p>
                <ul className='ml-2'>
                    {/* <div tabIndex={0} className="collapse"> */}
                    <li className='cursor-pointer' onClick={() => handleFilters("Full avatar")} >
                        Full avatar
                    </li>
                    {/* <div className="collapse-content"> */}
                    <li className={`${Filters.includes("Full avatar") ? "" : "hidden"} font-bold cursor-pointer`} onClick={() => handleFilters("Human Based")}>Human Based</li>
                    <li className={`${Filters.includes("Human Based") ? "" : "hidden"} text-sm font-medium cursor-pointer`} onClick={() => handleGender("Male")}>Male</li>
                    <li className={`${Filters.includes("Human Based") ? "" : "hidden"} text-sm font-medium cursor-pointer`} onClick={() => handleGender("Female")}>Female</li>
                    <li className={`${Filters.includes("Full avatar") ? "" : "hidden"} font-bold`} >Robot Based</li>
                    {/* </div>
                    </div> */}
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