import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
  flex-direction: column;
  width: 20vw;
  margin-top: 1vw;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vw;
`;
export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1vw 1vw 0 1vw;
`;

export const ScheduleName = styled.span`
  margin-left: 1vw;
  font-family: 'Roboto', sans-serif;
  font-size: 1vw;
`;
export const DescriptionType = styled.span`
  font-family: ${(props) => props.theme.font};
  font-weight: bold;
  font-size: ${(props) => props.theme.size.small};
`;

export const DescriptionValue = styled.span``;

export const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
`;
export const DescriptionContainer = styled.span`
  flex: 50%;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size.small};
  margin-top: 8px;
`;

export const TwoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1vw;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonRetire = styled.button<{ isRetired?: boolean }>`
  height: 50px;
  width: 50%;
  border-radius: 30px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size.small};

  background-color: ${(props) => (props.isRetired ? '#34eb5c' : '#eb4034')};
`;
