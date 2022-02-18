import styled from "@emotion/styled";

export const StyledDivContent = styled.div`
  grid-area: content;
  grid-column: span 2;
`;

export const StyledArticlesContent = styled.div`
  display: grid;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
`;