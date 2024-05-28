import * as React from 'react'
import '../styles/style.scss'

function Falling({height}: {height: number}) {
    return <div className='window'>
        <div className='ground'>
            <hr className='ground-line'></hr>
            <div className='ball-to-ground' style={{height: height + 'px', maxHeight: '300%'}}>
                <div className='ball'></div>
            </div>
        </div>
    </div>
}

export default Falling