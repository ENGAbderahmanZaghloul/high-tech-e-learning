import "../cssFile/certfSec.css"
import { Container, Row, Col } from "react-bootstrap"
import CreativaImg from '../imgs/Creativa.png'
import itediaImg from '../imgs/itida.png'
// swiper
import { Swiper, SwiperSlide } from "swiper/react"; // استيراد Swiper
import { Navigation } from "swiper/modules"; // خاصية التنقل
import Button from "@mui/material/Button"; // أزرار Material-UI
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import certf1 from "../imgs/cource_img_1.png"
import certf2 from "../imgs/cource_img_2.png"
import certf3 from "../imgs/cource_img_3.png"
import certf4 from "../imgs/cource_img_rounded.png"




export default function CertificatesSec() {
    return (
        <div className="d-flex justify-content-center align-itemes-center m-auto" dir="rtl">
            <Container>
                <Row className=" d-flex justify-content-between align-itemes-center m-auto mb-5">
                    <Col className="certfText" xs={12} md={6} style={{ width: "50%" }}>
                        <h2 className="certfTitle" style={{ margin: "30px auto", color: "#0d47a1" }}> الشهادات التي نمنحها</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores porro ab nam provident necessitatibus commodi, aut, inventore sapiente pariatur maiores earum vitae, culpa dolorum odit? Dolor pariatur provident necessitatibus incidunt.</p>
                        <div>
                            <img style={{ width: "150px", height: "100px" }} src={CreativaImg}></img>
                            <img style={{ width: "150px", height: "80px" }} src={itediaImg}></img>
                        </div>
                    </Col>
                    {/* th swiper */}
                    <Col xs={12} md={6} className="certf-swiper">
                        <Swiper
                            className="swiper"
                            modules={[Navigation]}
                            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }} // أزرار التنقل

                        spaceBetween={10} /* إزالة المسافات بين الصور */
                        slidesPerView={2} /* عرض الصورة النشطة وجزء من الصور الجانبية */
                        centeredSlides={true} /* وضع الصورة النشطة في المنتصف */
                        >
                        {/* الشرائح */}
                        <SwiperSlide>
                            <img src={certf1} alt="Certificate 1" className="certificate-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={certf2} alt="Certificate 2" className="certificate-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={certf3} alt="Certificate 3" className="certificate-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={certf4} alt="Certificate 4" className="certificate-img" />
                        </SwiperSlide>

                        <div className="d-flex justify-content-around align-items-center mt-3 arrowBtn">
                            <Button variant="contained" className="prev-btn" >
                                <ArrowForwardIcon />
                            </Button>
                            <Button variant="contained" className="next-btn">
                                <ArrowBackIcon />
                            </Button>
                        </div>
                    </Swiper>
                </Col>
            </Row>
        </Container>
        </div >
    )
}