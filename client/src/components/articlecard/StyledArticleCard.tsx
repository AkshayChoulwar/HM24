import styled from "@emotion/styled";

export const StyledArticleCard = styled.div`
  border: 1px solid lavenderblush;
  padding: 10px;
  text-align: center;

  > * {
    display: inline-block;
    padding: 4px 0;
    margin: 4px 0;
    width: 100%;
  }

  > button {
    padding: .2em;
    background-color: lightgoldenrodyellow;
    border: 1px solid lightgray;
    cursor: pointer;
    text-align: center;
    margin-bottom: 1px;
}
`;