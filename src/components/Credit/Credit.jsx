import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

export function Credit(props) {
  const creditsRef = useRef();

  useEffect(() => {
    creditsRef.current.parentElement.addEventListener("mouseover", (e) => {
      creditsRef.current.classList.add(style.hover);
    });
    
    creditsRef.current.parentElement.addEventListener("mouseleave", (e) => {
      creditsRef.current.classList.remove(style.hover);
    });
  }, []);

  return (
    <div className={style.credits} ref={creditsRef}>
      <div className={style.credit}>
      {props.data["art-name"]} by{" "}
      <a href={props.data["gh-link"]} target="_blank" rel="noreferrer">
        {props.data.name}
      </a>
      </div>
    </div>
  );
}
