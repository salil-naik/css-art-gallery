import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function ShridharAarogyaSetu() {
  let data = {
    name: "Shridhar Kamat",
    "gh-link": "https://github.com/Shridhar-dev/",
    "art-name": "Aarogya Setu logo",
  };

  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}    
        
        <div className={style.main}>
            <div className={style.heartmid}></div>
            <div className={style.tick}></div>
        </div>
      {/* do not edit line below */}
      <Credit data={data} />
    </div>
  );
}

export default ShridharAarogyaSetu;
