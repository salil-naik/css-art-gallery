import style from "./style.module.css";

function SalilFigma() {
  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.stackV}>
        <div className={style.semiLeft}></div>
        <div className={style.stackH}>
          <div className={style.semiLeftSecond}></div>
          <div className={style.circle}></div>
        </div>
        <div className={style.stackH}>
          <div className={style.green}></div>
        </div>
      </div>

      {/* only edit the name and github link below */}
      <div className="credits">
        Art by <a href="https://github.com/salil-naik" target="_blank">Salil Naik</a>
      </div>
    </div>
  );
}

export default SalilFigma;
