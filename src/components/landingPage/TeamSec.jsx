import "../cssFile/teamSec.css"
import { Container, Row, Col } from "react-bootstrap"
import front from "../imgs/abd_ulrahman.png";
import ui from "../imgs/john.png";
import flutter from "../imgs/angelious.png";
import data from "../imgs/christeen.png";
import security from "../imgs/mina.png";


export default function TeamSec() {
    return (
        <div className="d-flex justify-content-center align-items-center m-auto  " style={{ marginBottom: "90px !important" }} dir="rtl">
            <Container>
                <h2 style={{ margin: "30px auto", color: "#0d47a1", textAlign: "center" }}>   تعرف علي مدربينا  </h2>
                <Row className="dev-row">
                    <Col >
                        <div className="dev-info">
                            <img src={ui} />
                            <h6>جون محسن</h6>
                            <p> مصمم ui /ux</p>
                        </div>
                    </Col>
                    <Col >
                        <div className="dev-info">
                            <img src={flutter} />
                            <h6>انجيليوس رزق</h6>
                            <p>مبرمج flutter </p>
                        </div>
                    </Col>
                    <Col >
                        <div className="dev-info">
                            <img src={front} />
                            <h6>عبدالرحمن زغلول</h6>
                            <p>مبرمج front-end</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="dev-info">
                            <img src={data} />
                            <h6>كريستين عماد</h6>
                            <p>محللة اداء</p>
                        </div>
                    </Col>
                    <Col >
                        <div className="dev-info">
                            <img src={security} />
                            <h6>مينا عماد</h6>
                            <p>الامن السيبراني</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}