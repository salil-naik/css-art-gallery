import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function HarshitClock() {
  let data = {
    name: "Harshit Pandey",
    "gh-link": "https://github.com/HarshitPandey251",
    "art-name": "Clock",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
         <div className={style.clock}>
            <div className={style.inner}>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
                <div className={style.center}>
                <div className={style.hour}></div>
                <div className={style.min}></div>
                </div>
            </div>
            
         </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default HarshitClock;
