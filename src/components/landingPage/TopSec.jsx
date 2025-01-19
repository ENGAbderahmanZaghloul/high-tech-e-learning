import "../cssFile/topSec.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Button from '@mui/material/Button';
import avatar1 from "../imgs/hero_girl.png"
import avatar2 from "../imgs/hero_guy_1.png"
import avatar3 from "../imgs/hero_guy_2.png"
import img1 from "../imgs/code_box.png"
import img2 from "../imgs/color_box.png"

import { NavLink } from "react-router-dom";

export default function TopSec() {
    return (
        <div className="TopBody">
            <img src={avatar1} alt="avatar" className="ava1" />
            <img src={avatar2} alt="avatar" className="ava2" />
            <img src={avatar3} alt="avatar" className="ava3" />
            <img src={img1} alt="avatar" className="img1" />
            <img src={img2} alt="avatar" className="img2" />

            <div className="topbody-info">
                <h2>!ابدأ الرحلة صح</h2>
                <p>ابدأ تعلم مع +200 فديو مقدمة من افضل المدربين في مختلف المجالات  او ابدا مشروعك مع حدمات High Tech المميزة</p>
            </div>
            <div className="btn-group">
                <div className="vid-icon">
                    <p style={{ color: "#000", fontSize: "17px", margin: "auto" }}>  مشاهدة فديو  <PlayCircleFilledIcon style={{ color: "rgb(255 193 7)" }} /></p>
                </div>

                <Button variant="contained" className="bg-success">
                    <NavLink to='courses' style={{ textDecoration: "none", color: "white" }}>                    ابدأ تعلم</NavLink>
                </Button>
                <Button variant="contained" className="bg-warning">
                    ابدأ مشروعك
                </Button>
            </div>
        </div>
    )

}