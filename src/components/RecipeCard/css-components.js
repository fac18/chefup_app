import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: ${props => props.height || "10rem"};
  width: 100%;
  align: center;
`;

export { ImageContainer };
