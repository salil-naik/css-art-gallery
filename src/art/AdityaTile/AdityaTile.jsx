import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function AdityaTile() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Aditya Raj",
    "gh-link": "https://github.com/AdityaRaj-ar",
    "art-name": "Tile",
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

export default AdityaTile;
