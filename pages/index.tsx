import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import cardImage from '../assets/image-header-desktop.jpg'
import styled from 'styled-components'
import {
  App,
  CardInfo,
  Header,
  Highlight,
  ImageWrapper,
  Info,
  InfoHeader,
  InfoLabel,
  Main,
  MoreInfo,
  Overlay,
  Pharagraph,
} from '../styles/indexStyles'

const Home: NextPage = () => {
  return (
    <App>
      <Head>
        <title>Stats Preview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <CardInfo>
          <Header>
            Get <Highlight>insights</Highlight> that help your business grow.
          </Header>
          <Pharagraph>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </Pharagraph>
          <MoreInfo>
            <Info>
              <InfoHeader>10K+</InfoHeader>
              <InfoLabel>COMPANIES</InfoLabel>
            </Info>
            <Info>
              <InfoHeader>314</InfoHeader>
              <InfoLabel>TEMPLATES</InfoLabel>
            </Info>
            <Info>
              <InfoHeader>12M+</InfoHeader>
              <InfoLabel>QUERIES</InfoLabel>
            </Info>
          </MoreInfo>
        </CardInfo>

        <ImageWrapper>
          <Overlay />
          <Image
            objectFit="cover"
            alt="card pic"
            layout="fill"
            src={cardImage}
          />
        </ImageWrapper>
      </Main>
    </App>
  )
}

export default Home
