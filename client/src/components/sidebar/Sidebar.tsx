import React from "react"
import { Categories } from "../categories/Categories";
import { StyledSidebar } from "./StyledSidebar"

export const Sidebar = React.memo(() => {
  return (
    <StyledSidebar>
      <h3>Kategorien</h3>
      <Categories />
    </StyledSidebar>
  )
});