import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";


function AbhijnaYajiInstagramLogo() {

  let data = {
    name: "AbhijnaYaji",
    "gh-link": "https://github.com/Yaji16",
    "art-name": "InstagramLogo",
  };
  return (
    <div className={`${style.container} container`}>

      <div class="container">
        <div class="OuterSquareIn">
          <div class="OuterSquareIn">

            <div class="InnerSquare">
              <div class="InnerSquareIn">

              </div>
            </div>
          </div>
        </div>
        <div class="circle">

        </div>
      </div>

      <Credit data={data} />
    </div>
  );
}

export default AbhijnaYajiInstagramLogo;
