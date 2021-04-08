import { artsDB } from "../../firebase";

import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export function Credit(props) {
  const creditsRef = useRef();
  const artCaptionRef = useRef();
  const [index, setIndex] = useState(null);
  const [numOfLikes, setNumOfLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const likeAndUnlikeArt = () => {
    if (liked)
      artsDB.child(index).child("likes").child(window.ip_address).set(null);
    else artsDB.child(index).child("likes").child(window.ip_address).set(1);
  };

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
    if (index) {
      // do {
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
      // } while(!window.ip_address);
    }
  }, [index]);

  return (
    <div className={style.credits} ref={creditsRef}>
      <div className={style.credit} ref={artCaptionRef}>
        <p>
          {props.data["art-name"]} <span>&nbsp;by&nbsp;</span>
          <a href={props.data["gh-link"]} target="_blank" rel="noreferrer">
            {props.data.name}
          </a>
        </p>
      </div>
      <div
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
      </div>
    </div>
  );
}
