import styled from 'styled-components'

export const App = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  background: #1d1939;
  display: grid;
  min-width: 60%;
  border-radius: 10px;
  grid-template-columns: 50% 50%;

  @media (max-width: 900px) {
    display: flex;
    max-width: 90%;
    flex-direction: column;
  }
`

export const CardInfo = styled.div`
  display: flex;
  order: 0;
  gap: 40px;
  padding: 80px 5px;
  flex-direction: column;
  margin: auto;
  max-width: 380px;

  @media (max-width: 900px) {
    order: 1;
    gap: 20px;
    padding: 30px 25px;
  }
`

export const Header = styled.div`
  background: #1d1939;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 30px;
    text-align: center;
  }
`

export const Pharagraph = styled.p`
  color: rgba(255, 255, 255, 0.5);
  line-height: 25px;
  height: 100%;
  font-weight: lighter;
`

export const Highlight = styled.span`
  color: #964cf8;
`

export const MoreInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: grid;
    justify-content: center;
    justify-items: center;
    text-align: center;
    gap: 20px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const InfoHeader = styled.div`
  font-weight: bold;
  font-size: 25px;
`

export const InfoLabel = styled.div`
  font-size: 13px;
  font-weight: lighter;
  color: gray;
`

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 10px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 250px;
  }
`

export const Overlay = styled.div`
  background: #4600a1;
  opacity: 0.5;
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
`
