import React from 'react'

export default function Title(props) {
    return (
        <div className="row">
            <div className="col-10 text-center mx-auto text-title my-2">
                <h1 className="text-blue">{props.text}</h1>
            </div>
        </div>
    )
}
