import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  //background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
`;
const Button = styled.button`
  border-radius: 6px;

  //border: none;
  padding: 10px;
  background-color: white;
  //color: gray;
  cursor: pointer;
  font-weight: 600;
  //margin-bottom: -10px;
`;

const CategoryItem = ({ id, img, title, cat }) => {
  return (
    <Container>
      <Link to={`/products/${cat}`}>
        <Image src={img} />
        <Info>
          <Title>{title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
