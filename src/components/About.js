import React from 'react'

export default function About() {
    return (
        <>
        <div style={{ backgroundColor:'blueviolet' }}>

            <div className="container aboutmain" style={{ marginTop: '5cm', backgroundColor:'blueviolet' }}>
            
                <h1>About us</h1>
                <p>
                    <h3>
                        we are a news platform to provide you best and updated news around the world <br />
                        stay connected to us for more...
                    </h3>
                </p>
                <p>
                <h2>
                    For Query..
                        <br />
                    <h3>
                        query@speednews.com <br />
                        281-365365
                    </h3>
                </h2>
                </p>
                <div className='imgdiv'>
                <img className='imgdivabout' src="https://cdn4.vectorstock.com/i/thumb-large/04/68/speed-icon-vector-28050468.jpg" alt="SPPED NEWS" />
                </div>
                <div className='imgdiv'>
                <h2>speednews.com</h2>
                </div>
            </div>
        </div>
        </>
    )
}
