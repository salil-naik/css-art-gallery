import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function AparnaGoyalReddit() {
    let data = {
        name: "Aparna Goyal",
        "gh-link": "https://github.com/GeekyGoyal",
        "art-name": "Reddit Logo",
    };
    return (
      <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
       <div className={style.logo}>
         <div className={style.face}>
         <div className={style.lefteye}></div>
         <div className={style.righteye}></div>
         <div className={style.smile}>
             <div className={style.round1}></div>
             <div className={style.round2}></div>
         </div>
         </div>
         <div className={style.leftear}></div>
         <div className={style.rightear}></div>
         <div className={style.head1}></div>
         <div className={style.head2}></div>
       </div>
       
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default AparnaGoyalReddit;
