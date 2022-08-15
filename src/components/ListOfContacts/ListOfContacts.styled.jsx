import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const List = styled.ul`
  list-style-type: style none;
  padding-left: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${p => p.theme.mp(2, 1)};
  border: 1px solid #000000;
  border-radius: 5px;

  /* :hover .number {
    display: flex;
  } */
`;

export const Name = styled.p`
  position: relative;
  display: 'flex';
  margin: ${p => p.theme.mp(0, 0, 0, 1)};

  ::after {
    content: 'tel: ';
    position: absolute;
    /* bottom: 0; */
    right: -35px;
  }
`;

export const Number = styled.p`
  display: flex;
  margin: 0 0 0 40px;
`;