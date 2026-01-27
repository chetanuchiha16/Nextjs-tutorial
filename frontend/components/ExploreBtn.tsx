"use client"

import Image from "next/image";

function ExploreBtn() {
    return (
        <button
            id="explore-btn"
            type='button'
            className="mt-7 mx-auto"
            onClick={() => console.log("explore button clicked")}>
            <a href="#events">
                Explore events
                <Image src={"./icons/arrow-down.svg"} alt={"arrow-down"} width={25} height={24}/>
            </a>
        </button>
    )
}

export default ExploreBtn
