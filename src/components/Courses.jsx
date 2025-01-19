import "./cssFile/coursesTraining.css";
import "./cssFile/level.css";
import { Container, Row, Col } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import uiImg from "./imgs/ui.png";
import frontImg from "./imgs/front.png";
import mobileImg from "./imgs/mobile.png";
import backImg from "./imgs/back.png";
import GrapghicImg from "./imgs/graphic.png";
import dataImg from "./imgs/data.png";
import vidImg from "./imgs/video.png";
import designImg from "./imgs/3d.png";
import voiveImg from "./imgs/voice.png";
import englishImg from "./imgs/english.png";
import germanImg from "./imgs/germany.png";
import italyImg from "./imgs/italy.png";

// card imgs
import uiBasic from "../components/imgs/Courses Container/ui_basic.jpg";
import uiImmediate from "../components/imgs/Courses Container/ui_intermediate.jpg";
import mobileIntermediate from "../components/imgs/Courses Container/mobile_intermediate.jpg";
import mobileAdvance from "../components/imgs/Courses Container/mobile_advanced.jpg";
import frontAdvance from "../components/imgs/Courses Container/front_advanced.jpg";
import dataImmediate from "../components/imgs/Courses Container/date_intermediate.jpg";
import dataAdvance from "../components/imgs/Courses Container/data_advanced.jpg";
import secBasic from "../components/imgs/Courses Container/security_basic.jpg";

// avatar
import johnAva from "../components/imgs/john.png";
import angeloAva from "../components/imgs/angelious.png";
import abduAva from "../components/imgs/abd_ulrahman.png";
import CherstinAva from "../components/imgs/christeen.png";
import minaAva from "../components/imgs/mina.png";
// icon
import beginnerIcon from "../components/imgs/Courses Container/basic_level.svg";
import immediateIcon from "../components/imgs/Courses Container/intermediate_level.svg";
import advanceIcon from "../components/imgs/Courses Container/advanced_level.svg";
// hooks
import { useState } from "react";
import DataJson from "../data.json";

export default function Courses() {
  const images = {
    //   background imgs
    uiBasic: uiBasic,
    uiImmediate: uiImmediate,
    mobileIntermediate: mobileIntermediate,
    mobileAdvance: mobileAdvance,
    frontAdvance: frontAdvance,
    dataImmediate: dataImmediate,
    dataAdvance: dataAdvance,
    secBasic: secBasic,
    // avatar imgs
    john: johnAva,
    angelo: angeloAva,
    abdu: abduAva,
    Cherstin: CherstinAva,
    mina: minaAva,
    // icons
    uiIcon: uiImg,
    mobileIcon: mobileImg,
    frontIcon: frontImg,
    dataIcon: dataImg,
    secIcon: backImg,
    // level icon
    beginnerIcon: beginnerIcon,
    immediateIcon: immediateIcon,
    advanceIcon: advanceIcon,
  };

  const [filter, setFilter] = useState("all");
  const filteredCourses =
    filter === "all"
      ? DataJson
      : DataJson.filter((course) => course.level === filter);
  return (
    <>
      <Container dir="rtl">
        <div className="head-icons">
          <HomeIcon />
          <ArrowBackIosIcon
            style={{
              fontSize: "16px",
              position: "relative",
              top: "5px",
              color: "#0d47a1",
            }}
          />
          <p style={{ marginRight: "7px", color: "#0d47a1" }}>ابدأ تعلم</p>
        </div>
        <div className="content">
          <h1
            style={{
              margin: "30px auto",
              color: "#0d47a1",
              textAlign: "center",
            }}
          >
            الدورات التدريبية
          </h1>
          <h6 style={{ fontSize: "16px" }}>المحتوي</h6>
          {/* <div className="content-btns">
                        <Button variant="outlined" className="courseBtn">
                            <img src={uiImg} alt="Ui/UX" />
                            <span>Ui/UX</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={frontImg} alt="Front-end" />
                            <span>Front-end</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={backImg} alt="Back-end" />
                            <span>Back-end</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={mobileImg} alt="Mobile App" />
                            <span>Mobile App</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={GrapghicImg} alt="Graphic Design" />
                            <span>Graphic Design</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={dataImg} alt="Data Analysis" />
                            <span>Data Analysis</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={vidImg} alt="Video Editing" />
                            <span>Video Editing</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={designImg} alt="3D Design" />
                            <span>3D Design</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={voiveImg} alt="Voice Over" />
                            <span>Voice Over</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={englishImg} alt="English" />
                            <span>English</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={germanImg} alt="German" />
                            <span>German</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={italyImg} alt="Italian" />
                            <span>Italian</span>
                        </Button>
                    </div> */}
          <Row className="content-btns d-flex justify-content-between align-items-center ">
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button
                style={{ height: "42px" }}
                variant="outlined"
                className="courseBtn active"
              >
                <span>جميع الوحدات</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={uiImg} alt="Ui/UX" />
                <span>Ui/UX</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={frontImg} alt="Front-end" />
                <span>Front-end</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={backImg} alt="Back-end" />
                <span>Back-end</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={mobileImg} alt="Mobile App" />
                <span>Mobile App</span>
              </Button>
            </Col>

            <Col className="btns-col" xs={6} md={4} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={GrapghicImg} alt="Graphic Design" />
                <span>Graphic Design</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={dataImg} alt="Data Analysis" />
                <span>Data Analysis</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={vidImg} alt="Video Editing" />
                <span>Video Editing</span>
              </Button>
            </Col>

            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={designImg} alt="3D Design" />
                <span>3D Design</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={voiveImg} alt="Voice Over" />
                <span>Voice Over</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={englishImg} alt="English" />
                <span>English</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={germanImg} alt="German" />
                <span>German</span>
              </Button>
            </Col>
            <Col className="btns-col" xs={6} md={3} lg={2}>
              <Button variant="outlined" className="courseBtn">
                <img src={italyImg} alt="Italian" />
                <span>Italian</span>
              </Button>
            </Col>
          </Row>
        </div>

        {/* levels */}
        {/* btns */}
        <h6 style={{ fontSize: "16px" }}>المستوي</h6>
        <Row
          className="content-btns level-btns  d-flex justify-content-between align-items-center "
          style={{ marginTop: "90px", marginBottom: "30px", width: "40%" }}
        >
          <Col className="btns-col" xs={2}>
            <Button
              style={{ height: "42px" }}
              variant="outlined"
              className="courseBtn active"
              onClick={() => setFilter("all")}
            >
              <span> الكل</span>
            </Button>
          </Col>
          <Col className="btns-col" xs={2}>
            <Button
              variant="outlined"
              className="courseBtn"
              onClick={() => setFilter("مبتدئ")}
            >
              <span>المبتدئ</span>
            </Button>
          </Col>
          <Col className="btns-col" xs={2}>
            <Button
              variant="outlined"
              className="courseBtn"
              onClick={() => setFilter("متوسط")}
            >
              {/* <img src={frontImg} alt="Front-end" /> */}
              <span>المتوسط</span>
            </Button>
          </Col>
          <Col className="btns-col" xs={2}>
            <Button
              variant="outlined"
              className="courseBtn"
              onClick={() => setFilter("متقدم")}
            >
              <span>المتقدم</span>
            </Button>
          </Col>
        </Row>

        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img
                src={images[course.img]}
                alt="Background-img"
                className="card-backgound"
              />
              <div className="card-title">
                <img
                  src={images[course.avatar]}
                  alt="avatar-img"
                  className="avatar-img"
                />
                <p style={{ color: "#a19c9c" }}>{course.name} </p>
              </div>
              <div className="card-info">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{course.title}</h3>
                  <img src={images[course.icon]} alt="Ui/UX" />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p style={{ fontSize: "24px" }}>
                    <strong>المستوى:</strong> {course.level}
                  </p>
                  <img src={images[course.levelIcon]} alt="beginnerIcon" />
                </div>
                {/* <ul>
                  {course.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
