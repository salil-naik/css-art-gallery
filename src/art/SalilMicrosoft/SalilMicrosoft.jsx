import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function SalilMicrosoft() {
  let data = {
    name: "Salil Naik",
    "gh-link": "https://github.com/salil-naik",
    "art-name": "Microsoft logo and wordmark",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
        <div className={style.block}></div>
        <h3 className={style.title}>Microsoft</h3>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default SalilMicrosoft;
