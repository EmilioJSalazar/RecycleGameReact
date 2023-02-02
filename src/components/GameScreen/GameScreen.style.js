import styled from "styled-components";

import { ReactComponent as Grass1Svg } from "../../assets/grass.svg";
import { ReactComponent as Grass2Svg } from "../../assets/grass.svg";

const Header = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 20px;
`;

const LivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20vw;
`;

const Grass1 = styled(Grass2Svg)`
  width: 100vw;
  position: fixed;
  bottom: -100px;
  left: 0;
  height: 40vh;
`;

const Grass2 = styled(Grass1Svg)`
  width: 100vw;
  height: 40vh;
  position: fixed;
  bottom: 20px;
  left: 0;
`;

const BlackBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 8%;
`;

const RecycleBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  margin-left: -107px;
`;

const CompostBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  right: 8%;
`;

const GameItem = styled.div`
  position: fixed;
  top: 20%;
  left: 20%;
  margin-left: -50px;
`;

const ItemText = styled.h2`
  text-align: center;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  position: fixed;
  bottom: 2%;
  margin: 0;
  width: 100vw;
`;

export {
  Header,
  LivesContainer,
  Grass1,
  Grass2,
  BlackBinBox,
  RecycleBinBox,
  CompostBinBox,
  GameItem,
  ItemText
};
