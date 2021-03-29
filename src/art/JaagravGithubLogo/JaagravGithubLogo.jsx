import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function JaagravGithubLogo() {
  let data = {
    name: "Jaagrav",
    "gh-link": "https://github.com/Jaagrav",
    "art-name": "Github Logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.backgroundCircle}>

        <div className={style.head}>
          <div className={style.leftEar}></div>
          <div className={style.rightEar}></div>
        </div>
        <div className={style.body}>
          <svg className={style.tail} width="58" height="37" viewBox="0 0 58 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.1628 10.8642C30.4901 19.4505 37.0925 26.7648 58 21.0406V35.4052C56.8996 35.1932 54.6988 36.3051 47.2711 36.9411C39.8435 37.5771 30.215 32.966 24.1628 27.7188C18.1106 22.4716 17.8355 17.2244 12.3336 10.8642C6.83157 4.504 2.70507 6.73008 0.779377 5.77605C-1.14632 4.82202 0.229179 -0.584164 7.93196 0.0518579C15.6347 0.687879 17.8355 2.27793 24.1628 10.8642Z" fill="#2D333B"/>
          </svg>
        </div>

        
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default JaagravGithubLogo;
