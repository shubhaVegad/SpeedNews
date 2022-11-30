import React from 'react'

export default function Wave() {
    return (
        <>
            <div className='wvdiv' style={{textAlign:'center'}}>

                <div id="container">

                    <svg viewBox="0 0 500 500"
                        preserveAspectRatio="xMinYMin meet">

                        <path d="M0, 100 C150, 200 350,
                        0 500, 100 L500, 00 L0, 0 Z"
                            style={{stroke:'none', fill:'dodgerblue'}}>
                        </path>
                    </svg>
                </div>
            </div>
        </>
    )
}
