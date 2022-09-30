import styled from "styled-components"

export default function Logo({ logo }) {
  return (
    <LogoContainer>
      <div>
        <img src={logo} alt="ZapRecall logo" />
        <h1>ZapRecall</h1>
      </div>
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
        width: 100%;
        height: 110px;
        position: fixed;
        top:0;
        z-index: 1;
        background-color: #fb6b6b;
        div {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }
        img {
          width: 52px;
        }
        h1 {
          font-family: "Righteous";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 45px;
          color: #ffffff;
          margin-left: 20px;
        }
        `