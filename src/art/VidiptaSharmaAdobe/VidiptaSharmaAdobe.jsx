import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";
 

function VidiptaSharmaAdobe() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Vidipta Sharma",
    "gh-link": "https://www.github.com/Vidipta",
    "art-name": "Adobe Logo",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div id ={style.adobe}> 
		<div className={style.adobe1}></div>
		<div className={style.adobe2}></div>
		<div className={style.adobe3}></div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default VidiptaSharmaAdobe;
