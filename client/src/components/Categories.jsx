import styled from "styled-components";
import { categories } from "./data";
import CategoryItem from "./CategoryItem";
import { mobile } from "./responsive";

const Container = styled.div`
  //flex: 1;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.title}
          img={item.img}
          cat={item.cat}
        />
        //<CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
