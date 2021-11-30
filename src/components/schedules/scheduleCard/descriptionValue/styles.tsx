import styled from 'styled-components';

export const ScheduleValue = styled.span`
  font-size: ${(props) => props.theme.size.small};
  font-family: ${(props) => props.theme.font};
`;

export const TooltipContainer = styled.div`
  visibility: hidden;
  display: none;
`;

export const Container = styled.div`
  ${ScheduleValue}:hover + ${TooltipContainer} {
    visibility: visible;
    display: flex;
    position: absolute;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.size.small};
    background-color: ${(props) => props.theme.colors.cyan};
    width: 15vw;
    padding: 10px 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.cyanDarker};
  }
`;
