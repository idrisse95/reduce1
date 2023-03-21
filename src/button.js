import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux';

export const Button = () => {

    const butt = useSelector((state) => state.todo)

    const dispatch = useDispatch();

    return (
        <div>
            {butt}

            <button onClick={() => dispatch(increment())}>
                Incremente
            </button>
        </div>
    )
}
