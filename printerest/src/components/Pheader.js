import React from "react";
import styled from "styled-components";
import PinterestIcon from '@material-ui/icons/Pinterest';
function Pheader() {
  return (
    <WraperHeader>
      <LogoWraper>
          <IconButton>
            <PinterestIcon/>
          </IconButton>
      </LogoWraper>
    </WraperHeader>
  );
}
export default Pheader;
const WraperHeader = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;
const LogoWraper = styled.div``;
const IconButton = styled.div``;
