import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function FalguniYouTube() {
    let data = {
        name: "Falguni",
        "gh-link": "https://github.com/Fpj-11",
        "art-name": "YouTube logo",
    };
    return (
        <div className={`${style.container} container`}>
          {/* DO NOT edit the line above*/}
    
          {/* your art blocks will come here */}
          <div id={style.YouTube}>
              <div className={style.YTlogo}></div>
          </div>
    
          {/* do not edit the line below */}
          <Credit data={data} />
        </div>
      );

}

export default FalguniYouTube;