import "../cssFile/opinionSec.css";
import { Container, Row, Col } from "react-bootstrap";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import testimonial1 from "../imgs/vector_girl.png";
import testimonial2 from "../imgs/vector_guy-2.png";
import testimonial3 from "../imgs/vector_guy_1.png";





export default function OpinionSec() {
    return (
        // <>
        //     <h2 style={{ margin: "30px auto", color: "#0d47a1",textAlign:"center" }}> بعض اراء المتدربين  </h2>
        // </>
        <div className="d-flex justify-content-center align-items-center m-auto" dir="rtl">
            <Container>
                <Row className="d-flex justify-content-between align-items-center m-auto mb-5">
                    <Col xs={12}>
                        <h2 style={{ margin: "30px auto", color: "#0d47a1", textAlign: "center" }}> بعض اراء المتدربين  </h2>
                    </Col>
                    <Col xs={12}>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                nextEl: 'button-next',
                                prevEl: 'button-prev',
                            }}
                            // navigation={{
                            //     nextEl: 'swiper-button-next',
                            //     prevEl: 'swiper-button-prev',
                            // }}
                            pagination={{ clickable: true }}
                            loop={true}
                        >

                            <SwiperSlide>
                                <div className="testimonial-card bg-success">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src={testimonial1} alt="Testimonial 1" />
                                            <div className="card-info">
                                                <h6>  شهد احمد محمد</h6>
                                                <p>كورس الجرافيك ديزاين</p>
                                            </div>
                                        </div>
                                        <p style={{ maxWidthwidth: "80%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ad ea obcaecati amet optio aliquid dignissimos natus? Atque et numquam possimus aut repellat corporis? Accusantium nam quam perspiciatis exercitationem pariatur!</p>
                                        <div style={{ color: "#ffd600" }} className="d-flex justify-content-betwen align-itemes-center card-star">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-card bg-success">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src={testimonial2} alt="Testimonial 1" />
                                            <div className="card-info">
                                                <h6>اسم المتدرب 1</h6>
                                                <p>كورس الجرافيك ديزاين</p>
                                            </div>
                                        </div>
                                        <p style={{ maxWidthwidth: "80%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ad ea obcaecati amet optio aliquid dignissimos natus? Atque et numquam possimus aut repellat corporis? Accusantium nam quam perspiciatis exercitationem pariatur!</p>
                                        <div style={{ color: "#ffd600" }} className="d-flex justify-content-betwen align-itemes-center card-star">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-card bg-success">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src={testimonial3} alt="Testimonial 1" />
                                            <div className="card-info">
                                                <h6>اسم المتدرب 1</h6>
                                                <p>كورس الجرافيك ديزاين</p>
                                            </div>
                                        </div>
                                        <p style={{ maxWidthwidth: "80%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ad ea obcaecati amet optio aliquid dignissimos natus? Atque et numquam possimus aut repellat corporis? Accusantium nam quam perspiciatis exercitationem pariatur!</p>
                                        <div style={{ color: "#ffd600" }} className="d-flex justify-content-betwen align-itemes-center card-star">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <div className="d-flex justify-content-between align-items-center mt-3 arrowBtns">
                                <Button variant="contained" className="button-next" >
                                    <ArrowForwardIcon />
                                </Button>
                                <Button variant="contained" className="button-prev">
                                    <ArrowBackIcon />
                                </Button>
                            </div>
                        </Swiper>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}