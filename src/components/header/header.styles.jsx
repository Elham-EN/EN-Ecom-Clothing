import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

/**<Link className="logo-container" to="/">
      <h1 className="logo-header">famazone</h1>
    </Link> */
export const LogoContainer = styled(Link)`
  position: relative;
`;

//<h1 className="logo-header">famazone</h1>
export const LogoHeader = styled.h1`
  color: black;
  font-family: "Audiowide", cursive;
  font-weight: bolder;
  font-size: 3rem;
  position: absolute;
  top: -50%;
`;

//Have option classname for two different element tags (DIV & LINK) */
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
