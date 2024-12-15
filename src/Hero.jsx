import React from 'react'
import Header from './Header'
import "./App.css"

function Hero() {
    return (
        <div className="min-h-screen bg-black text-white bar">
            <Header></Header>
            <section className="container py-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 pl-24 pt-20 ">
                        <p className="text-red-500 text-lg">Join the Akatsuki - Embrace the Power of the Red Cloud</p>
                        <h1 className="text-7xl font-bold leading-tight">
                            An Elite Organization of Shinobi
                        </h1>
                        <button className="border text-lg border-red-500 px-14 py-3 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                            Join Us
                        </button>
                    </div>
                    <div className="h-[500px]">
                        <img
                            src="/hro.png"
                            alt="Akatsuki members"
                            className="object-contain "
                        />

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Hero
