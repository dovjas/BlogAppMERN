import React from 'react'
import { images } from "../constants"

const Header = () => {
  return (
    <section>
        <header className="container mx-auto px-5 flex justify-between items-center">
            <div>
                {/* <img src={images.Logo} alt="Logo"/> */}
            </div>
            <div className="flex gap-x-9 py-5 items-center">
                <ul className="flex gap-x-5 font-semibold">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Blogs</a></li>
                    <li><a href="/">Pages</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">FAQ</a></li>
                </ul>
                <button className="border-2 border-yellow-500 px-4 py-2 rounded-full">Sign In</button>
            </div>
        </header>
    </section>
  )
}

export default Header