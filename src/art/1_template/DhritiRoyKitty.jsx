import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";


function DhritiRoyKitty() {
  
  let data = {
    name: "Dhriti",
    "gh-link": "https://github.com/Dhriti-Roy/css-art-gallery",
    "art-name": "kitty",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div>
        <div> <style className="block"></style></div>
      </div>

      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default DhritiRoyKitty;
