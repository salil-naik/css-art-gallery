import style from "./style.module.css";


// Replace ComponentName with YourName followed by ArtName.
// For example, SalilReactLogo or SalilNaikReactLogo

function SalilDroplets() {
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.artContainer}>
        <div className={style.circle}></div>
      </div>



      {/* ONLY edit the name and github link below */}
      <div className="credits">
        Art by <a href="https://github.com/salil-naik" target="_blank">Salil Naik</a>
      </div>
     </div>
  );
}

export default SalilDroplets;
