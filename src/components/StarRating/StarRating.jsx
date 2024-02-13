import { FaStar } from 'react-icons/fa'
import Star from '../Star/Star';
import { useState } from 'react';

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5}) {

    const [selectedStars, setSelectedStars] = useState(0);

    return (
       <div className='stars'>
            {createArray(totalStars).map((n, i) => (
                 <Star 
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                 />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
       </div> 
    )
        

}