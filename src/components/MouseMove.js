import React, { useEffect } from 'react'
import { useMouseMove } from './useMouseMove';
import { useTitle } from './useTitle';

const MouseMove = () => {
    const {x, y} = useMouseMove();
    const { changeTitle } = useTitle();

    useEffect(() =>{
        changeTitle(`X: ${x}, Y: ${y}`);
    }, [x, y]);

    return (
        <div>
            <center>
                <br />
                <h1>X: {x} </h1>
                <h1>Y: {y} </h1>
            </center>
        </div>
    );
}

export default MouseMove;