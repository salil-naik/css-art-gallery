import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

import {MdFavoriteBorder, MdFavorite} from "react-icons/md";

export function Credit(props) {
  const creditsRef = useRef();
  const [noOfLikes, setNoOfLikes] = useState(79)
  const [liked, setLiked] = useState(false);
  
  const likeArt = () => {
    setLiked(!liked)
  }

  useEffect(() => {
    creditsRef.current.parentElement.addEventListener("mouseover", (e) => {
      creditsRef.current.classList.add(style.hover);
    });
    
    creditsRef.current.parentElement.addEventListener("mouseleave", (e) => {
      creditsRef.current.classList.remove(style.hover);
    });
    // Hiding and showing Credits on hover
  }, [creditsRef]);

  return (
    <div className={style.credits} ref={creditsRef}>
      <div className={style.credit}>
        {props.data["art-name"]} by{" "}
        <a className={style.highlighted} href={props.data["gh-link"]} target="_blank" rel="noreferrer">
          {props.data.name}
        </a>
      </div>
      <div onClick={likeArt} className={`${style.likes} ${liked ? style.highlighted : ""}`}>
        <span className={style.likesNum}>{noOfLikes}</span>
        {liked && <MdFavorite className={style.likeIcon}/>}
        {!liked && <MdFavoriteBorder className={style.likeIcon}/>}
      </div>
    </div>
  );
}
