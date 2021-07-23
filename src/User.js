import React from 'react'

export default function User({details}) {
    
    return (
        <div>
            <p>name: {details.name}</p>
            <p>email: {details.email}</p>
            <p>password: {details.password}</p>
        </div>
    )
}