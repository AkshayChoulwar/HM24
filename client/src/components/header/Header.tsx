import React from "react"
import { HeaderProps } from "../../helpers";
import { StyledHeader } from "./StyledHeader"

export const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <StyledHeader>
      <strong>home24</strong>
      <input type="text"
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
    </StyledHeader>
  )
}