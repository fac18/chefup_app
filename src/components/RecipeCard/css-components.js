import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: ${props => props.height || "150px"};
  width: 100%;
  max-width: 600px;
  align: center;
`;

export { ImageContainer };
