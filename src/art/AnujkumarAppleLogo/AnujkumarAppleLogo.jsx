import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";


const AnujkumarAppleLogo = () =>{
    let Data = {
        name:"Anujkumar",
        "gh-link": "https://github.com/anuj-kumary",
        "art-name": "Apple Logo",
    };

    return(
        <>
            <div className={`${style.container} container `}>
                <div className={style.logo}></div>

             <Credit data={Data} />
            </div>
        </>
    )
}

export default AnujkumarAppleLogo;