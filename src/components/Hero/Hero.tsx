import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <section className="bg-transparent dark:text-gray-100">
            <div className="flex justify-center items-center flex-col md:flex-row py-20">

                <div className="flex justify-center items-center flex-col py-10 px-5">
                    <h1 className="text-5xl font-bold leadi sm:text-xl">Claim with your</h1>
                    <h1 className="text-5xl font-bold leadi sm:text-2xl">Moca NFT</h1>
                    <span className='text-center'>
                        Use your Moca NFT(s)* to claim a Moca  ID  <br />and get extra  Moca holder benefits!
                    </span><br />
                    <button className="btn btn-warning rounded-full border border-black mx-2">
                        Claim With Moca!
                    </button>
                    <br />
                    <span className='text-green-400'>*Your Moca must be staked for  the entire previous weekly staking period</span>
                </div>

                <div className="flex justify-center items-center flex-col py-10 px-5">
                    <h1 className="text-5xl font-bold leadi sm:text-xl">Claim with your</h1>
                    <h1 className="text-5xl font-bold leadi sm:text-2xl">Moca NFT</h1>
                    <span className='text-center'>
                        Use your Moca NFT(s)* to claim a Moca ID <br /> and get extra Moca holder benefits!
                    </span><br />
                    <button className="btn btn-warning rounded-full border border-black mx-2">
                        Claim With Moca!
                    </button>
                    <br />
                    <span className='text-green-400'>*Your Moca must be staked for the entire previous weekly staking period</span>
                </div>

            </div>
        </section>
    )
}

export default Hero