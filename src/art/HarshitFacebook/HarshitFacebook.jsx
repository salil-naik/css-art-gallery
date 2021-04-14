import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function HarshitFacebook() {
  let data = {
    name: "Harshit Pandey",
    "gh-link": "https://github.com/HarshitPandey251",
    "art-name": "Facebook",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.wrapper}>
            <div className={style.ftop}> 
                <div className={style.fline}></div>
            </div>
            <div className={style.fbox}></div>
            <div className={style.fbox2}></div>
        </div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default HarshitFacebook;
