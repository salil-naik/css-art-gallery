import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function TarunGitLogo() {
  let data = {
    name: "Tarun Singh",
    "gh-link": "https://github.com/tarunsingh7379",
    "art-name": "Git Logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
       <div className={style.logo}>
         <div className={style.line1}></div>
         <div className={style.line2}></div>
       </div>
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default TarunGitLogo;
