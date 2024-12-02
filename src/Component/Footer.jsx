import React from "react"

const Footer = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <img src="logo.svg" alt="" />
            </div>
            <div>
                <b>2023 © DSA revision</b>
            </div>
            <div className="flex justify-between items-center gap-7">
            <div className="rounded-full  hover:bg-amber-300">
                    <div className="mt-2 ml-2 mb-2 mr-2">
                    <a href="https://x.com/Khawar_Ahemad">
                        <img src="icon-twitter.svg" alt="" />
                    </a>
                    </div>
                </div>
                <div className="rounded-full  hover:bg-amber-300">
                    <div className="mt-2 ml-2 mb-2 mr-2">
                    <a href="#">
                        <img src="icon-youtube.svg" alt="" />
                    </a>
                    </div>
                </div>
                <div className="rounded-full  hover:bg-amber-300">
                    <div className="mt-2 ml-2 mb-2 mr-2">
                    <a href="#">
                        <img src="icon-linkedin.svg" alt="" />
                    </a>
                    </div>
                </div>
                <div className="rounded-full  hover:bg-amber-300">
                    <div className="mt-2 ml-2 mb-2 mr-2">
                    <a href="#">
                        <img src="icon-instagram.svg" alt="" />
                    </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Footer