import styled from 'styled-components';

export const Container = styled.div`
  height: 40vw;
  width: 100%;
  background-color: ${(props) => props.theme.colors.cyan};
  justify-content: center;
  vertical-align: center;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border-radius: 30px;
`;

export const ErrorText = styled.span`
  font-size: ${(props) => props.theme.size.mediumSmall};
  font-family: ${(props) => props.theme.font};
  margin-top: 1vw;
`;
