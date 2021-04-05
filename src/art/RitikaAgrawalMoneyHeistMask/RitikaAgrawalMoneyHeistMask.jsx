import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function RitikaAgrawalMoneyHeistMask() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Ritika Agrawal",
    "gh-link": "https://github.com/Ritika-Agrawal811",
    "art-name": "Money Heist Mask",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
       
      <div className={style.mask}></div>

      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default RitikaAgrawalMoneyHeistMask;
