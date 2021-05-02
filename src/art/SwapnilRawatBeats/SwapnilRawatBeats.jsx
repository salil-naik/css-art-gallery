import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";
 

function SwapnilRawatBeats() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Swapnil Rawat",
    "gh-link": "https://www.github.com/swapnilr17",
    "art-name": "Beats Logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
    <div className={style.container-outer}>
        <div class={style.circlered}>
        <div class={style.circlewhite}></div>
        <div class={style.rect}></div>
        </div>
    </div>
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default VidiptaSharmaAdobe;
