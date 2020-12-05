import styled from "styled-components/macro";
//Container, Title, List, User, Picture, Name

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;
export const Title = styled.h1`
  width: 100%;
  color: #ffffff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
  user-select: none;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  object-fit: contain;
  border: 3px solid #000000;
  cursor: pointer;
  user-select: none;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  user-select: none;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid #ffffff;
  }

  &:hover > ${Name} {
    color: #ffffff;
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0px;
  }
`;
