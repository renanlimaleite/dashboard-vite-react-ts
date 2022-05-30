import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #cee5d0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav ul {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 8px;
    }

    a {
      font-size: 1.6rem;
    }
  }
`;
