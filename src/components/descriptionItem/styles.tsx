import styled from 'styled-components';

export const Container = styled.span`
  flex: 50%;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size.small};
  margin-top: 8px;
  position: relative;
`;

export const DescriptionType = styled.span`
  font-family: ${(props) => props.theme.font};
  font-weight: bold;
  font-size: ${(props) => props.theme.size.small};
`;

export const DescriptionValue = styled.span`
  font-size: ${(props) => props.theme.size.small};
  font-family: ${(props) => props.theme.font};
`;

export const TooltipContainer = styled.div`
  visibility: hidden;
  display: none;
`;

export const DescriptionValueContainer = styled.div`
  ${DescriptionValue}:hover ~ ${TooltipContainer} {
    visibility: visible;
    display: flex;
    position: absolute;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.size.small};
    background-color: ${(props) => props.theme.colors.cyan};
    width: 100%;
    padding: 10px 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.cyanDarker};
    z-index: 9999;
  }
`;
