import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function HarshitSnowman() {
  let data = {
    name: "Harshit Pandey",
    "gh-link": "https://github.com/HarshitPandey251",
    "art-name": "Snow Man",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
        
            <div className={style.head}>
                <div className={style.eye1}></div>
                <div className={style.eye2}></div>
                <div className={style.nose}></div>
                <div className={style.mouth}>
                </div>
                <div className={style.hat}>
                    <div className={style.hatTop}></div>
                </div>  
            </div>
            <div className={style.body}>
                <div className={style.buttons}>
                    <div className={style.btn1}></div>
                    <div className={style.btn2}></div>
                    <div className={style.btn3}></div>
                </div>     
                <div className={style.stick1}></div>
                <div className={style.stick2}></div>
                <div className={style.middle}></div>   
            </div>             
      </div>
      
      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default HarshitSnowman;
