import {
  Facebook,
  Instagram,
  LocationOn,
  MailOutline,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RuebySoft</Logo>
        <Desc>
          RuebySoft Nigeria offers deals and discounts and never ceases to form
          campaigns all year around, all for the satisfaction and joy of our
          customers.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Male attires</ListItem>
          <ListItem>Women attire</ListItem>
          <ListItem>Hand bags</ListItem>
          <ListItem>Sneakers</ListItem>
          <ListItem>Wristwatches</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn />
          No.374, Riverpark Estate, Airport road, Abuja.
        </ContactItem>
        <Phone />
        <ContactItem>+234-8149-4930-000</ContactItem>
        <MailOutline />
        <ContactItem>ruebysoft@ecommerce.com</ContactItem>
        <Payment src="httpljdljdklfjld.png" />
      </Right>
    </Container>
  );
};

export default Footer;
