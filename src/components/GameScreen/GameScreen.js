import React from "react";
import ProgressScore from "./ProgressScore";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import OptionsModal from "./OptionsModal";
import Item from "./Item";
import LivesScore from "./LivesScore";
import { Container } from "../MasterCss";
import HowToPlayModal from "../LandingScreen/HowToPlayModal";

import * as SC from "./GameScreen.style";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as PauseIcon } from "../../assets/pause-icon.svg";
import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";
import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";
import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";
import WineBottle from "../../images/wine-bottle.svg";

const GameScreen = props => {
  const [currentItem, setCurrentItem] = React.useState({
    name: "Botellas de vidrio",
    src: WineBottle,
    bin: "reciclaje",
    binImg: "images/recycle-bin.svg",
    fact: "Las familias usan alrededor de 330 botellas y frascos de vidrio cada año."
  });
  const [itemVisibility, setItemVisibility] = React.useState(true);
  const [successModal, setSuccessModal] = React.useState(false);
  const [failModal, setFailModal] = React.useState(false);
  const [optionsModal, setOptionsModal] = React.useState(false);

  const dropReaction = currentBin => {
    setItemVisibility(!itemVisibility);

    if (currentItem.bin === currentBin) {
      setSuccessModal(!successModal);
      props.setCount(props.count + 1);
    } else {
      setFailModal(!failModal);
      props.setBadCount(props.badCount + 1);
    }
  };

  const showOptionsModal = () => {
    setOptionsModal(!optionsModal);
  };

  return (
    <Container key="rendering">
      {successModal && (
        <SuccessModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          successModal={successModal}
          setSuccessModal={setSuccessModal}
        />
      )}
      {failModal && (
        <FailModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          failModal={failModal}
          setFailModal={setFailModal}
          badCount={props.badCount}
        />
      )}
      {optionsModal && (
        <OptionsModal
          optionsModal={optionsModal}
          setOptionsModal={setOptionsModal}
          setCount={props.setCount}
          setBadCount={props.setBadCount}
          howToPlayModal={props.howToPlayModal}
          setHowToPlayModal={props.setHowToPlayModal}
          hideHowToPlayModal={props.hideHowToPlayModal}
          showHowToPlayModal={props.showHowToPlayModal}
        />
      )}

      {props.howToPlayModal && (
        <HowToPlayModal handleClose={props.hideHowToPlayModal}></HowToPlayModal>
      )}

      <SC.Header>
        <PauseIcon onClick={showOptionsModal} cursor="pointer"/>
        <SC.LivesContainer>
          <LivesScore
            badCount={props.badCount}
            successModal={successModal}
            failModal={failModal}
          />
        </SC.LivesContainer>
        <ProgressScore gameScreen count={props.count} />
      </SC.Header>


      <SC.Grass2 />

      <SC.GameItem>
        <DragDropContainer targetKey="bins">
          {itemVisibility && (
            <Item
              item={currentItem}
              itemVisibility={itemVisibility}
              setItemVisibility={setItemVisibility}
            />
          )}
        </DragDropContainer>
      </SC.GameItem>

      <SC.BlackBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("desecho general");
          }}
        >
          <BlackBin title="blackbin" />
        </DropTarget>
      </SC.BlackBinBox>

      <SC.RecycleBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("reciclaje");
          }}
        >
          <RecycleBin title="recyclebin" />
        </DropTarget>
      </SC.RecycleBinBox>

      <SC.CompostBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("desecho de comida");
          }}
        >
          <CompostBin title="compostbin" />
        </DropTarget>
      </SC.CompostBinBox>

      <SC.Grass1 />

      <SC.ItemText>{currentItem.name}</SC.ItemText>
    </Container>
  );
};

export default GameScreen;
