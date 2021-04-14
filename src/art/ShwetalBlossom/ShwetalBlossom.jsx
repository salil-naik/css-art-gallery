import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function ShwetalBlossom() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Shwetal Soni",
    "gh-link": "https://github.com/shwetalsoni",
    "art-name": "Blossom",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div className={style.blossom}>
            <div className={style.leaf}>
                <div className={style.leftleaf}></div>
                <div className={style.rightleaf}></div>
            </div>
            <div className={style.leaf}>
                <div className={style.secondleftleaf}></div>
                <div className={style.secondrightleaf}></div>
            </div>
        </div> 
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default ShwetalBlossom;
