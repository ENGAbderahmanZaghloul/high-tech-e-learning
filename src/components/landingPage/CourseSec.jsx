import "../cssFile/courses.css"
import { Container, Row, Col } from "react-bootstrap"
import Button from '@mui/material/Button';
import uiImg from "../imgs/ui.png"
import frontImg from "../imgs/front.png"
import mobileImg from "../imgs/mobile.png"
import backImg from "../imgs/back.png"
import GrapghicImg from "../imgs/graphic.png"
import dataImg from "../imgs/data.png"
import vidImg from "../imgs/video.png"
import designImg from "../imgs/3d.png"
import voiveImg from "../imgs/voice.png"
import englishImg from "../imgs/english.png"
import germanImg from "../imgs/germany.png"
import italyImg from "../imgs/italy.png"

export default function CoursesSection() {
    return (
        <div className="d-flex justify-content-center align-itemes-center flex-column mt-5 mb-5">
            <h1 className="title" style={{ margin: "30px auto", color: "#0d47a1" }}>اكتشف دورات تدريبية مميزة في مختلف المجالات</h1>
            <div className="courses" style={{ margin: "10px auto" }}>
                {/* <Container>
                    <div className="d-flex justify-content-between align-items-center rowItemes">
                        <Button variant="outlined" className="courseBtn">
                            <img src={uiImg} alt="ui/ux" />
                            <span>Ui/UX </span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={frontImg} alt="ui/ux" />
                            <span>front-end</span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={uiImg} alt="ui/ux" />
                            <span>Ui / UX </span>
                        </Button>
                        <Button variant="outlined" className="courseBtn">
                            <img src={uiImg} alt="ui/ux" />
                            <span>Ui / UX </span>
                        </Button>
                    </div>
                </Container> */}
                {/* <Container>
                    <Row className="d-flex justify-content-between align-items-center rowItemes mb-3">
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={uiImg} alt="ui/ux" />
                                <span>Ui/UX </span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={frontImg} alt="ui/ux" />
                                <span>front-end</span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={backImg} alt="ui/ux" />
                                <span>back-end </span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={mobileImg} alt="ui/ux" />
                                <span>mobile app </span>
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ width: "85%", margin: "auto" }} className="d-flex justify-content-between align-items-center rowItemes ">
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={GrapghicImg} alt="ui/ux" />
                                <span>Ui/UX </span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={dataImg} alt="ui/ux" />
                                <span>front-end</span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={vidImg} alt="ui/ux" />
                                <span>Ui / UX </span>
                            </Button>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center rowItemes mb-3">
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={designImg} alt="ui/ux" />
                                <span>3D Design </span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={voiveImg} alt="ui/ux" />
                                <span>Voice over</span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={englishImg} alt="ui/ux" />
                                <span>English </span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={germanImg} alt="ui/ux" />
                                <span>German </span>
                            </Button>
                        </Col>
                        <Col xs={6} md="auto" lg="auto" >
                            <Button variant="outlined" className="courseBtn">
                                <img src={italyImg} alt="ui/ux" />
                                <span>Italy </span>
                            </Button>
                        </Col>
                    </Row>
                </Container> */}
                <Container>
                    {/* الصف الأول */}
                    <Row className="d-flex justify-content-between align-items-center mb-3">
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={uiImg} alt="Ui/UX" />
                                <span>Ui/UX</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={frontImg} alt="Front-end" />
                                <span>Front-end</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={backImg} alt="Back-end" />
                                <span>Back-end</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={mobileImg} alt="Mobile App" />
                                <span>Mobile App</span>
                            </Button>
                        </Col>
                    </Row>
                    {/* الصف الثاني */}
                    <Row className="d-flex justify-content-between align-items-center mb-3">
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={GrapghicImg} alt="Graphic Design" />
                                <span>Graphic Design</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={dataImg} alt="Data Analysis" />
                                <span>Data Analysis</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={vidImg} alt="Video Editing" />
                                <span>Video Editing</span>
                            </Button>
                        </Col>
                    </Row>
                    {/* الصف الثالث */}
                    <Row className="d-flex justify-content-between align-items-center mb-3">
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={designImg} alt="3D Design" />
                                <span>3D Design</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={voiveImg} alt="Voice Over" />
                                <span>Voice Over</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={englishImg} alt="English" />
                                <span>English</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={germanImg} alt="German" />
                                <span>German</span>
                            </Button>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <Button variant="outlined" className="courseBtn">
                                <img src={italyImg} alt="Italian" />
                                <span>Italian</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}