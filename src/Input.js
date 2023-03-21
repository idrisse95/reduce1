import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ajout, retire } from './redux';

export const Ajout = () => {


    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input id='val' type="number" placeholder='nbr a ajouter?' />

                    <button onClick={() => dispatch(ajout())} >Ajout</button>

                    <input id='valr' type="number" placeholder='nbr a retirer?' />
                    <button onClick={() => dispatch(retire())} >Retire</button>
                </label>
            </form>
        </div>
    )
}
