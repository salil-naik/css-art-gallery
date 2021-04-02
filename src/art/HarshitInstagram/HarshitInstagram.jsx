import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function HarshitInstagram() {
  let data = {
    name: "Harshit Pandey",
    "gh-link": "https://github.com/HarshitPandey251",
    "art-name": "Instagram Logo",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
        <div className={style.instagram}>
        <div className={style.square}></div>
        </div>
        
      </div>

      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default HarshitInstagram;
