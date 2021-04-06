import {artsDB} from "../../firebase";

import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

import {MdFavoriteBorder, MdFavorite} from "react-icons/md";

export function Credit(props) {
  const creditsRef = useRef();
  const [index, setIndex] = useState(null);
  const [noOfLikes, setNoOfLikes] = useState(0)
  const [liked, setLiked] = useState(false);

  const likeAndUnlikeArt = () => {
    if(liked)
      artsDB.child(index).child("likes").child(window.ip_address).set(null);
    else
      artsDB.child(index).child("likes").child(window.ip_address).set(1);
  }

  useEffect(() => {
    creditsRef.current.parentElement.addEventListener("mouseover", (e) => {
      creditsRef.current.classList.add(style.hover);
    });
    
    creditsRef.current.parentElement.addEventListener("mouseleave", (e) => {
      creditsRef.current.classList.remove(style.hover);
    });
    // Hiding and showing Credits on hover
    setIndex(creditsRef.current.parentElement.parentElement.getAttribute("index"));
  }, []);

  useEffect(() => {
    if(index)
      artsDB.child(index).child("likes").on("value", snap => {
        const results = snap.val();
        if(results) {
          setNoOfLikes(Object.keys(results).length);
          setLiked(results.hasOwnProperty(window.ip_address));
        } else {
          setNoOfLikes(0);
          setLiked(false);
        }
      });
  }, [index])

  return (
    <div className={style.credits} ref={creditsRef}>
      <div className={style.credit}>
        {props.data["art-name"]} by{" "}
        <a className={style.highlighted} href={props.data["gh-link"]} target="_blank" rel="noreferrer">
          {props.data.name}
        </a>
      </div>
      <div onClick={likeAndUnlikeArt} className={`${style.likes} ${liked ? style.highlighted : ""}`}>
        <span className={style.likesNum}>{noOfLikes}</span>
        {liked && <MdFavorite className={style.likeIcon}/>}
        {!liked && <MdFavoriteBorder className={style.likeIcon}/>}
      </div>
    </div>
  );
}
