import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% * (1 / 4) - 20px);
  height: calc(100%);
  border: 1px solid ${(props) => props.theme.colors.cyanDarker};
  margin-bottom: 1vw;
  padding: 1vw;
  background-color: ${(props) => props.theme.colors.cyan};
`;

export const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
  text-align: center;
`;
