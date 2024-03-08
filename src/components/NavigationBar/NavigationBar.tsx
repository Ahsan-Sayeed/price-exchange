import React from 'react'

type Props = {}

const NavigationBar = (props: Props) => {
    return (
        <div>
            <div className="navbar bg-base-100 text-black" style={{backgroundColor:"rgb(0,209,255)"}}>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Mocaverse</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-warning rounded-full border border-black">
                       Visit mocana
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar
