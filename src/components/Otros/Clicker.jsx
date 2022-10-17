import React from 'react';
import { useState } from 'react';
import './Otros.css';

function Clicker(props) {
    const [clicks,setClicks] = useState(0)

    return (
        <button onClick={()=>setClicks(clicks+1)} className='clicker'>{clicks} Clicks</button>
    );
}

export default Clicker;