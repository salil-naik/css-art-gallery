import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function AntraCaptainShield() {
  let data = {
    name: "Antra",
    "gh-link": "https://github.com/mis-coder",
    "art-name": "Captain America Shield",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.outerRedCircle}>
       <div className={style.whiteCircle}>
         <div className={style.innerRedCircle}>
           <div className={style.blueCircle}>
             <div className={style.star}></div>
           </div>
         </div>
       </div>
    </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default AntraCaptainShield;
