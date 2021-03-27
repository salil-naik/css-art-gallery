import style from "./style.module.css";

function ComponentName() {
  return (
    <div className={`${style.container} container`}>
      {/* do not edit the className above*/}

      {/* your art blocks will come here */}
      <div className={style.logoContainer}>
          <div className={style.ring}></div>
          <div className={`${style.ring} ${style.two}`}></div>
          <div className={`${style.ring} ${style.three}`}></div>
          <div className={style.circle}></div>
      </div>

      {/* only edit the name and github link below */}
      <div className="credits">
        Art by <a href="https://github.com/salil-naik" target="_blank">Salil Naik</a>
      </div>
     </div>
  );
}

export default ComponentName;
