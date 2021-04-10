import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function AadityaTwitter() {
    let data = {
      name: "Aaditya Paithane",
      "gh-link": "https://github.com/aadityamp01",
      "art-name": "Twitter Logo",
    };

    return (
        <div className={`${style.container} container`}>
          {/* do not edit the className above*/}
    
          {/* your art blocks will come here */}

          <div className={style.tbird}></div>

          {/* do not edit line below */}
          <Credit data={data} />
        </div>
      );

}


export default AadityaTwitter;
