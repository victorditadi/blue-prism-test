import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const HeaderTitle = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size.large};
`;
export const HeaderMenu = styled.div``;
