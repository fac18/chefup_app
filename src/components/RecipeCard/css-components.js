import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 150px;
  width: 100%;
`;

export { ImageContainer };
