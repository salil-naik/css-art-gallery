import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function MobasherahFalakBat() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Mobasherah Falak",
    "gh-link": "https://github.com/Mobasherah12",
    "art-name": "Bat",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.blocks}></div>
        <div  className={style.blocks1}></div>
        <div  className={style.blocks2}></div>
        <div  className={style.blocks3}></div>
        <div  className={style.blocks4}></div>
        <div  className={style.blocks5}></div>
        <div  className={style.blocks6}></div>
        <div  className={style.blocks7}></div>
        <div  className={style.blocks8}></div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default MobasherahFalakBat;
