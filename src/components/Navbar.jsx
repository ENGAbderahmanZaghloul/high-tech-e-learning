import { Navbar as NavbarBS, Container, Nav, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
// import bgImg from "../assets/LandingPage/blue_bg.png"
import '../App.css'
import './cssFile/navbar.css'
export default function Navbar() {

    // const [age, setAge] =useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    return (
        <>


            <NavbarBS sticky="top" className="Navbar" dir="rtl">
                <Container className="navContainer">
                    <Row className="w-100 align-items-center">
                        <Col xs={12} md={3} className="text-center text-md-end">
                            <h1 style={{ color: "white" }}>
                                High T<span style={{ color: "rgb(255 193 7)" }}>e</span>ch
                            </h1>
                        </Col>

                        {/* العمود الثاني: الروابط والقوائم المنسدلة */}
                        <Col xs={12} md={6} className="d-flex justify-content-center">
                            <Nav className="nav-links d-flex justify-content-between align-items-center" style={{ gap: "5px" }}>
                                <Nav.Link style={{ color: "white", width: "max-content" }} to="من نحن ؟" as={NavLink}>
                                    من نحن ؟
                                </Nav.Link>
                                <FormControl className="select" variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel style={{ color: "white" }} id="demo-simple-select-standard-label">
                                        الدورات التدريبية
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"

                                        id="demo-simple-select-standard"
                                        label="الدورات التدريبية"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel style={{ color: "white" }} id="demo-simple-select-standard-label">
                                        الخدمات للشركات
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        label="الخدمات للشركات"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Nav>
                        </Col>

                        <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-end">
                            <div className="d-flex align-items-center login-div" style={{ gap: "5px" }}>
                                <SearchIcon
                                    style={{
                                        fontSize: "15px",
                                        width: "30px",
                                        height: "30px",
                                        padding: "5px",
                                        backgroundColor: "#e0e0e0",
                                        borderRadius: "50%",
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: "15px",
                                        width: "30px",
                                        height: "30px",
                                        padding: "5px",
                                        backgroundColor: "#e0e0e0",
                                        borderRadius: "50%",
                                    }}
                                >
                                    EN
                                </span>
                                <Button variant="text" className="loginBtn">
                                    تسجيل الدخول
                                </Button>
                                <Button variant="contained" className="bg-warning">
                                    انشاء حساب
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </NavbarBS>
        </>
    )
}

// style={{ fontSize: "15px", width: "30px", height: "30px", padding: "5px", backgroundColor: "#e0e0e0", borderRadius: "50%" }}