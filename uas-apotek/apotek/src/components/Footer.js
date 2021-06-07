import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import React from "react";

import styled from 'styled-components';

const Footer = () => {
    return (
        <Box>
            <h6 style={{
                color: "white",
                textAlign: "center",
                marginTop: "40px"
            }}>
                ⒸCopyright 2021. Apotek Tenpoles. <a href="https://b-bella99.github.io/" className="text-white">Bella Setyowati</a>.
        </h6>
        </Box>
    );
};

export const Box = styled.div`
  padding: 20px 20px;
  background: #007BFF;
  position: relative;
  bottom: 0;
  width: 100%;   
  @media (max-width: 1000px) {
    padding: 10px 10px;
  }
`;
export default Footer;