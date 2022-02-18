import styled from '@emotion/styled';

export const StyledPageContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 160px auto auto;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
  margin: 6px;
  
  > * {
    padding: 10px;
  }
`;