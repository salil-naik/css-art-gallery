import { artsDB } from "../../firebase";

import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { useDoubleTap } from "use-double-tap";

export function Credit(props) {
  const creditsRef = useRef(), pulsingHeart = useRef();
  const [index, setIndex] = useState(null);
  const [numOfLikes, setNumOfLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  
  const pulseHeart = () => {
    pulsingHeart.current.classList.remove(style.playPulse);
    void pulsingHeart.current.offsetWidth;
    pulsingHeart.current.classList.add(style.playPulse);
  }

  const likeAndUnlikeArt = () => { 
    if(!liked){
      pulseHeart();
      artsDB.child(index).child("likes").child(window.ip_address).set(1);
    }
    else
      artsDB.child(index).child("likes").child(window.ip_address).set(null);
  }

  const bind = useDoubleTap(() => {
    pulseHeart();
    if(!liked)
    likeAndUnlikeArt();
  });

  useEffect(() => {
    creditsRef.current.parentElement.addEventListener("mouseover", (e) => {
      creditsRef.current.classList.add(style.hover);
    });

    creditsRef.current.parentElement.addEventListener("mouseleave", (e) => {
      creditsRef.current.classList.remove(style.hover);
    });
    // Hiding and showing Credits on hover
    setIndex(
      creditsRef.current.parentElement.parentElement.getAttribute("index")
    );
  }, []);

  useEffect(() => {
    if (process.env.REACT_APP_FIREBASE_API_KEY && index) {
      const updater = setInterval(update, 500);
      function update() {
        if (window.ip_address) {
          artsDB
            .child(index)
            .child("likes")
            .on("value", (snap) => {
              const results = snap.val();
              if (results) {
                setNumOfLikes(Object.keys(results).length);
                setLiked(results.hasOwnProperty(window.ip_address));
              } else {
                setNumOfLikes(0);
                setLiked(false);
              }
            });
          clearInterval(updater);
        }
      }
    }
  }, [index]);

  return (
    <>

    {process.env.REACT_APP_FIREBASE_API_KEY && <div {...bind} className={style.likeOverlay}>
      <div  className={style.likeHeart} ref={pulsingHeart}>
        <MdFavorite />
      </div>
    </div>}

    <div className={style.credits} ref={creditsRef}>
      <div className={style.credit}>
        <p>
          {props.data["art-name"]}<span>&nbsp;by&nbsp;</span>
          <a href={props.data["gh-link"]} target="_blank" rel="noreferrer">
            {props.data.name}
          </a>
        </p>
      </div>
      {process.env.REACT_APP_FIREBASE_API_KEY && <div
        onClick={likeAndUnlikeArt}
        className={`${style.likes} ${liked ? style.highlighted : ""}`}
      >
        <span>
          {liked ? (
            <MdFavorite className={style.likeIcon} />
          ) : (
            <MdFavoriteBorder className={style.likeIcon} />
          )}
        </span>
        <span className={style.likesNum}>
          {numOfLikes} {numOfLikes > 1 ? "likes" : "like"}
        </span>
      </div>}
    </div>
    </>
  );
}
