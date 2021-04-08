import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function SalilNaikTile() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Salil Naik",
    "gh-link": "https://github.com/salil-naik",
    "art-name": "Tiles",
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

export default SalilNaikTile;
