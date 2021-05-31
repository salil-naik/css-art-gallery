import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function MobasherahFalakMoon() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Mobasherah Falak",
    "gh-link": "https://github.com/Mobasherah12",
    "art-name": "Moon",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.blocks}></div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default MobasherahFalakMoon;
