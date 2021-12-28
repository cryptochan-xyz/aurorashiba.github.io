import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import FluidAnimation from "./FluidAnimation";
import cameo from "./media/cameo.mp4";
import infograph from "./media/infograph.png";
import twitter from "./media/twitter.png";
import discord from "./media/discord.png";
import telegram from "./media/telegram.png";
import "./App.css";

const Hero = styled.div`
  display: grid;
  grid-auto-rows: 1fr auto;
  pointer-events: none;
  background: url("/wallpaper.jpg");
  background-size: cover;
  background-position: center;
  * {
    z-index: 1;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  pointer-events: none;
`;

const Logo = styled.img`
  position: absolute;
  pointer-events: auto;
  cursor: pointer;
  animation: none;
  opacity: 0.7;
  height: 150px;
  top: 50%;
  left: 50%;
  transition: transform 0.2s ease-in-out;
  transform: translate(-50%, -50%);
  &:hover {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
    cursor: pointer;
  }
`;

const Moon = styled.img`
  box-shadow: 0 0 30px 6px #fff;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-family: Nasalization;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  a,
  button {
    margin: 0 20px;
  }
`;

const rainbow = keyframes`
  0%{background-position:0% 82%}
  50%{background-position:100% 19%}
  100%{background-position:0% 82%}
`;

const BuyButton = styled.a`
  pointer-events: auto;
  text-decoration: none;
  color: #fff;
  border: 2px solid #ededed;
  box-shadow: 0px 0px 0px 0px #ededed;
  font-weight: bold;
  font-size: 1rem;
  padding: 15px 40px;
  cursor: pointer;
  background: none;
  outline: 0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  &::after {
    content: "";
    height: 100%;
    width: 100%;
    right: -10px;
    top: 0;
    border-radius: 5px;
    position: absolute;
    background: linear-gradient(
      124deg,
      #ff2400,
      #e81d1d,
      #e8b71d,
      #e3e81d,
      #1de840,
      #1ddde8,
      #2b1de8,
      #dd00f3,
      #dd00f3
    );
    background-size: 1800% 1800%;
    animation: ${rainbow} 8s ease infinite;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25s ease-in-out;
    z-index: -1;
    opacity: 0.6;
  }
  &:hover {
    box-shadow: 0px 0px 10px 0px #ededed;
    &::after {
      transform: scaleX(1.2);
    }
  }
  a {
    text-decoration: none;
    display: block;
    color: #fff;
  }
`;

const InfoButton = styled(Button)`
  && {
    pointer-events: auto;
    border-width: 2px;
    font-family: Nasalization;
    font-size: 1rem;
    box-shadow: 0px 0px 0px 0px #1976d2;
    transition: all 0.25s ease-in-out;
    &:hover {
      border-width: 2px;
      box-shadow: 0px 0px 10px 0px #1976d2;
    }
  }
`;

const Video = styled.video`
  width: 100%;
  max-height: 100vh;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-end;
  img {
    width: 30px;
    margin: 5px;
  }
`;

const Links = styled.div`
  display: grid;
  text-align: left;
  a {
    pointer-events: auto;
    display: inline-block;
    text-decoration: none;
    color: #57dad8;
    margin: 10px;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const Socials = styled.div`
  text-align: right;
  margin-right: 5px;
  a {
    pointer-events: auto;
  }
`;

function App() {
  const [open, setOpen] = useState(false);
  const [howToOpen, setHowToOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <FluidAnimation
        style={{ height: "100vh", position: "absolute", opacity: "0.6" }}
      />
      <div className="App">
        <Hero className="App-header">
          <div>
            <LogoWrapper>
              <Logo
                onClick={() => setOpen(true)}
                className="App-logo"
                src="/logo.png"
                alt="logo"
              />
              <Moon className="App-logo" src="/moon.png" />
            </LogoWrapper>
            <Title>THE MEME COIN OF AURORA</Title>
            <Actions>
              <BuyButton
                href="https://www.trisolaris.io/#/swap?outputCurrency=0x48687fb162a735a3fedd47a98fcbf58be3ed4538"
                target="_blank"
              >
                BUY
              </BuyButton>
              <InfoButton variant="outlined" onClick={() => setHowToOpen(true)}>
                HOW TO
              </InfoButton>
            </Actions>
          </div>
          <Footer>
            <Links>
              <a
                href="https://dexscreener.com/aurora/0x859184137d4670e138e92fc78701aef31be52829"
                target="_blank"
              >
                Charts
              </a>
              <a href="https://rainbowbridge.app/transfer" target="_blank">
                Bridge ETH
              </a>
              <a
                href="https://app.allbridge.io/bridge?from=TRA&to=AURO&asset=UST"
                target="_blank"
              >
                Bridge TERRA
              </a>
            </Links>
            <Socials>
              <a href="https://twitter.com/AuroraShibaMoon" target="_blank">
                <img src={twitter} />
              </a>
              <a href="https://discord.com/invite/fdnhh7PwxJ" target="_blank">
                <img src={discord} />
              </a>
              <a href="https://t.me/aurorashibamoon" target="_blank">
                <img src={telegram} />
              </a>
            </Socials>
          </Footer>
        </Hero>
        <Dialog open={open} onClose={handleClose}>
          <Video controls autoPlay style={{ overflow: "hidden" }}>
            <source src={cameo} type="video/mp4" />
          </Video>
        </Dialog>
        <Dialog open={howToOpen} onClose={() => setHowToOpen(false)}>
          <img src={infograph} />
        </Dialog>
      </div>
    </>
  );
}

export default App;
