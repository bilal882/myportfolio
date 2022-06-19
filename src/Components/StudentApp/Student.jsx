import React from 'react'
import { useState } from 'react';

export default function Student() {
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [students, setStudents] = useState({
        name: 'Bilal',
        roll: 1234,
    });
    function nameHandler(e) {
        setName(e.target.value)
        console.log(name);
    }
    function rollHandler(e) {
        setRoll(e.target.value)
        console.log(roll);
    }
    function submitHandler() {
        let std = {
            name: name,
            roll: roll,
        }
    }
    return (
        <>
            {
                students.map((student, index) => {
                    <h1>Name. {student} - Roll No. {index.roll}</h1>
                })
            }
            <input type="text" onChange={nameHandler} className='input m-2' />
            <input type="number" onChange={rollHandler} className='input m-2' />
            {/* <button className='btn btn-danger' onClick={submitHandler}>Submit</button> */}
        </>
    )
}
