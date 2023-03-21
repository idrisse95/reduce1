import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ajout, enregistrer } from './redux';

export const Formulaire = () => {


    const nom = useRef()
    const prenom = useRef()
    const age = useRef()

    const dispatch = useDispatch();

    const info = useSelector((state) => state.todoForm)
    console.log(info);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(enregistrer(nom.current.value))
        dispatch(enregistrer(prenom.current.value))
        dispatch(enregistrer(age.current.value))




    }
    //     useEffect(()=> {
    // setText('')
    //     }, text)

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>


                    <input type="text" ref={nom} placeholder='nom?' id='nom' />
                    <input type="text" ref={prenom} placeholder='prenom?' id='prenom' />
                    <input type="number" ref={age} placeholder='age?' id='age' />

                    <button onClick={() => dispatch(enregistrer())} >S'enregistrer</button>


                </label>
            </form>


            <div className='flex flex-col'>
            {info.value.map((info, id) => (
                <span key={id}>{info}</span>
            ))}
        </div>

            <div>

            </div>


        </div>
    )
}