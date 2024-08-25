import React, { useState } from "react"
import NavBar from "./NavBar"
import { albumsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import { songsData } from "../assets/assets"
import SongItem from "./SongItem"

const DisplayHome = () => { 
    return (
        <>
            
            <NavBar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2x1">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item,index)=>(<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2x1">Today's biggets hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item,index)=>(<SongItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
                </div>
            </div>
        </>

    )
}

export default DisplayHome