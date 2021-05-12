import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#FFC700" : "#000000")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 24px" : "10px 21px")};
  color: ${({ secondary }) => (secondary ? "#fff"  : "#000000")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  line-height:  ${({ big }) => (big ? "30px" : "26px")};
  font-weight: 700;
  outline: none;
  border:1px solid  ${({ border }) => (border ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)")};
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 8px;
 

  &:hover {
    background: ${({ primary }) => (primary ? "#000000" : "#FFC700")};
    color: ${({secondary})=>(secondary ? '#000000' : '#fff')};
   
   
  }
`
