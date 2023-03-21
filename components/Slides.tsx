import {
  Deck,
  SlideLayout,
  FullScreen,
  AnimatedProgress,
  Markdown,
  Text,
  UnorderedList,
  ListItem,
  FlexBox,
} from "spectacle";
import { Performant } from "./Performant";
import { GrowButton } from "./GrowButton";
import styled from "styled-components";
import { ShadowButton } from "./ShadowButton";
import Image from "next/image";
import animation from "components/animation.png";
import cssOverview from "components/css-overview.png";
import layerBorders from "components/layer-borders.png";
import layers from "components/layers.png";
import layoutShiftRegions from "components/layout-shift-regions.png";
import paintFlashing from "components/paint-flashing.png";
import performance from "components/performance.png";
import performance2 from "components/performance2.png";
import theRenderPipeline from "components/the-render-pipeline.png";

export const Slides = () => (
  <Deck
    theme={{
      colors: {
        primary: "black",
        secondary: "black",
        quaternary: "RoyalBlue",
        quinary: "pink",
        tertiary: "white",
      },
    }}
    template={() => (
      <>
        <div
          style={{
            position: "fixed",
            top: 10,
            right: 10,
            cursor: "pointer",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <DiscreetLink
            onClick={() => {
              const urlParams = new URLSearchParams(window.location.search);
              urlParams.set("presenterMode", "true");
              window.location.search = urlParams.toString();
            }}
          >
            presenter mode
          </DiscreetLink>

          <div
            style={{
              marginTop: 7,
            }}
          >
            <FullScreen color="primary" />
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <AnimatedProgress color="#000" pacmanColor="gold" />
        </div>
      </>
    )}
  >
    <SlideLayout.Statement>
      Web Animation and the Render Pipeline
    </SlideLayout.Statement>

    <SlideLayout.Center>
      <Performant></Performant>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <Text fontSize="250px">16ms</Text>
    </SlideLayout.Center>

    <SlideLayout.Statement>
      <Image
        src={theRenderPipeline}
        alt=""
        style={{
          maxWidth: "80%",
          maxHeight: "80%",
        }}
      ></Image>
    </SlideLayout.Statement>

    <SlideLayout.Section>Script</SlideLayout.Section>

    <SlideLayout.Center>
      <UnorderedList>
        <ListItem>Avoid heavy computations</ListItem>
        <ListItem>Offload heavy computations</ListItem>
        <ListItem>Avoid unnecessary DOM modifications</ListItem>
      </UnorderedList>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <UnorderedList>
        <ListItem>Prefer CSS Animations</ListItem>
        <ListItem>Avoid blocking javascript</ListItem>
        <ListItem>Use requestAnimationFrame</ListItem>
      </UnorderedList>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image alt="" width={800} src={performance}></Image>
        <Text textAlign="center">Performance tab</Text>
      </FlexBox>
    </SlideLayout.Center>

    <SlideLayout.Section>Styles</SlideLayout.Section>

    <SlideLayout.Center>
      <UnorderedList>
        <ListItem>Minimize the number of selectors</ListItem>
        <ListItem>Avoid universal selectors</ListItem>
        <ListItem>Avoid the descendant selector</ListItem>
        <ListItem>Use classes</ListItem>
      </UnorderedList>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image alt="" width={800} src={cssOverview}></Image>
        <Text textAlign="center">CSS Overview tab</Text>
      </FlexBox>
    </SlideLayout.Center>

    <SlideLayout.Section>Layout</SlideLayout.Section>

    <SlideLayout.Center>
      <Column>
        <GrowButton>Hover me!</GrowButton>
        <GrowButton>Hover me!</GrowButton>
      </Column>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image alt="" width={800} src={layoutShiftRegions}></Image>
        <Text textAlign="center">Rendering tab</Text>
      </FlexBox>
    </SlideLayout.Center>

    <SlideLayout.Section>Paint</SlideLayout.Section>

    <SlideLayout.Center>
      <Column>
        <ShadowButton>Hover me!</ShadowButton>
      </Column>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image alt="" width={800} src={paintFlashing}></Image>
        <Text textAlign="center">Rendering tab</Text>
      </FlexBox>
    </SlideLayout.Center>

    <SlideLayout.Section>Composite</SlideLayout.Section>

    <SlideLayout.Center>
      <Performant />
    </SlideLayout.Center>

    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image alt="" width={800} src={layers}></Image>
        <Text textAlign="center">Layers tab</Text>
      </FlexBox>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image alt="" width={800} src={layerBorders}></Image>
        <Text textAlign="center">Rendering tab</Text>
      </FlexBox>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image alt="" width={800} src={performance2}></Image>
        <Text textAlign="center">Performance tab</Text>
      </FlexBox>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <FlexBox flexDirection="column">
        <Image alt="" width={800} src={animation}></Image>
        <Text textAlign="center">Animation tab</Text>
      </FlexBox>
    </SlideLayout.Center>

    <SlideLayout.Section>Further reading</SlideLayout.Section>

    <SlideLayout.Center>
      <Markdown>{`
          The venerable Nielsen Norman Group has compiled a lot of interesting data on how to use animation to support the user experience.

          * https://www.nngroup.com/articles/animation-usability
        `}</Markdown>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <Markdown>{`
          Google has written an abundance of great articles on the topic of animation, ranging from UX to performance and tooling.

          * http://jankfree.org/
          * https://developers.google.com/web/fundamentals/design-and-ux/animations/
          * https://developers.google.com/web/fundamentals/performance/rendering/
          * https://csstriggers.com/
        `}</Markdown>
    </SlideLayout.Center>

    <SlideLayout.Center>
      <Markdown>{`
          Anna Migas amazing talk on animation performance at Nordic.js was the primary inspiration that got me writing [this article](https://dnjstrom.se/blog/web-animation-and-the-render-pipeline).

          * https://twitter.com/szynszyliszys/status/1037668518999846912
        `}</Markdown>
    </SlideLayout.Center>

    <SlideLayout.Statement>Thanks!</SlideLayout.Statement>
  </Deck>
);

const DiscreetLink = styled.a`
  pointer-events: all;
  color: #aaa;
  &:hover {
    color: black;
  }
`;

const Column = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
