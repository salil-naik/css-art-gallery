import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo
// component name, file name and folder name should be same. 

function AnujkumarYadavSmokingCup() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Anujkumar Yadav",
    "gh-link": "https://github.com/anuj-kumary",
    "art-name": "Smoking Cup",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
      <div className="wrapper">
            <div className={style.cup}>
              <span className={style.handle}></span>
              <span className={style.smoke}></span>
              <h3>Eat <br />
              Sleep <br />
              <span className={style.code}>Code</span> <br />
              Repeat</h3>
            </div>
          </div>
        </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default AnujkumarYadavSmokingCup;
