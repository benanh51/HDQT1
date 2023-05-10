import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              XIN <span className="purple"> TỰ GIỚI THIỆU </span> BẢN THÂN
            </h1>
            <p className="home-about-body">
             Sinh năm 2000, cung Nhân Mã 
              <br />
              <br />Hiện đang làm nô lệ cho tư bản
              <i>
                <b className="purple"> IT </b>
              </i>
              <br />
              <br />
             Đã trải qua một vài mối tình &nbsp;
              <i>
                <b className="purple">cụ thể là 6 tháng và 3 năm </b> 
                
              </i>
              <br />
              <br />
             Lí do quen Hồng Phúc: Vô tri, <b className="purple"> vẫn là vô tri nhưng màu tím</b> 
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Liên hệ</h1>
            <p>
             Có   <span className="purple">ảnh dìm của HP </span>gửi qua đây giúp anh
            </p>
            <ul className="home-about-social-links">
              
              
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ducc.anhh.112"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/duc.anh.188/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
