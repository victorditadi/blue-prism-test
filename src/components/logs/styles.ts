import styled from 'styled-components';

export const Container = styled.div`
  height: 70vh;
  position: relative;
  margin: 0 5vw 0 5vw;
  width: 100%;
`;

export const ScrollableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 100%;
  overflow: auto;
  overflow-y: scroll;
  :after {
    content: '';
    width: 29.5vw;
  }
`;

export const LogSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vw;
`;
export const LogSectionTitle = styled.span`
  font-family: ${(props) => props.theme.font};
  font-weight: bold;
  font-size: ${(props) => props.theme.size.medium};
`;
export const LogSectionButton = styled.button`
  height: 50px;
  width: 10vw;
  border-radius: 30px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size.small};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.cyan}; ;
`;
