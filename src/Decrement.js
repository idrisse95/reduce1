import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from './redux';

export const Decrement = () => {

    const butt = useSelector((state) => state.todo)

    const dispatch = useDispatch();

    return (
        <div>
        

            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}
