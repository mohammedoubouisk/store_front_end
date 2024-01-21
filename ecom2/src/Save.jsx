import React from 'react'
import './Save.css'
import { CiBookmarkRemove } from "react-icons/ci";
import unsavePic from "./images/unsave.jpg"

export const Save = ({ saves, setsaves }) => {
    const unsave=(iditem)=>{
        const filt = saves.filter(itm => itm.id !== iditem)
        setsaves(filt)
    }

    return (
        <>
            <div className='itemss'>
                {
                    Object.keys(saves).length !==0 ? (
                        saves.map(item => (
                        <>
                            <div className="saves">
                                <img src={item.image} alt="" />

                                <h3>{item.title}</h3>
                                <h5>{item.category}</h5>
                                <p className='price' style={{color:"#df0000", fontWeight:"bold"}}>{item.price}$</p>
                                <button onClick={()=>unsave(item.id)}>
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">                                           
                                            <div className="icon">
                                            <CiBookmarkRemove/>
                                            </div>
                                        </div>
                                    </div>
                                    <span>UnSave</span>
                                </button>

                            </div>
                        </>
                    ))
                    ):
                    <img src={unsavePic} alt='picture' style={{width:"500px",marginTop:"20px"}}/>
                }
            </div>
        </>
    )
}
