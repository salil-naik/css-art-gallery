import React from 'react'
import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function KratiMitraSignal() {
    let data = {
        name: "Krati Mitra",
        "gh-link": "https://github.com/kratimitra",
        "art-name": "Signal Logo",
      };
    return (
        <div className={`${style.container} container`}>
            <div className={style.wrapper}>
                <div className={style.outer}>
                    <div className={style.inner}>
                      <div className={style.uppertriangle}></div>
                    	<div className={style.triangle}></div>
                    	<div className={style.outertriangle}>
                    	</div>
                     </div>
                    
                    
                </div>
            </div>
            <Credit data={data}/>
        </div>
    )
}

export default KratiMitraSignal
