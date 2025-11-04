import React from "react";

import Col from "../Col";
import Container from "../Container";
import Row from "../Row";
import Typography from "../Typography";

import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Col>
            <div className="header-wrapper">
              <Typography as="subtitle1" className="header-slogan">
                Welcome back,
              </Typography>
              <Typography as="body2">Admin User</Typography>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
