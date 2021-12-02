import styled from 'styled-components';

export const Container = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
  flex-direction: column;
  width: 20vw;
  margin-top: 1vw;
  background-color: ${(props) => (props.isSelected ? props.theme.colors.cyanDarker : 'white')};
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vw;
  text-align: center;
`;
export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1vw 1vw 0 1vw;
`;

export const ScheduleName = styled.span`
  margin-left: 1vw;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size.mediumSmall};
`;

export const ScheduleSelected = styled.span`
  margin-left: 1vw;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size.mediumSmall};
  color: ${(props) => props.theme.colors.orange};
`;

export const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ButtonRetire = styled.button<{ isRetired?: boolean }>`
  height: 50px;
  width: 50%;
  border-radius: 30px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size.small};

  background-color: ${(props) => (props.isRetired ? '#34eb5c' : '#eb4034')};
`;
