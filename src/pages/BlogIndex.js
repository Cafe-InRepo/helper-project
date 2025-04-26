import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Blog Posts",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1024&q=80",
      category: "Product Update",
      date: "April 20, 2025",
      title: "New Features to Supercharge Your Restaurant Operations",
      description:
        "Discover the latest updates to OrderCraft: table management, real-time order tracking, and AI-driven menu suggestions designed to make your workflow smoother than ever.",
      url: "#", // You can replace "#" with a real link
      featured: true,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1024&q=80",
      category: "Tips & Tricks",
      date: "April 18, 2025",
      title: "5 Tips to Speed Up Your Coffee Shop Orders with OrderCraft",
      description:
        "Learn how simple tweaks inside OrderCraft can reduce wait times and boost customer satisfaction in your coffee shop or café.",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1544148105-0b74482b3c1e?auto=format&fit=crop&w=1024&q=80",
      category: "Success Story",
      date: "April 15, 2025",
      title: "How Café Bloom Increased Revenue by 35% Using OrderCraft",
      description:
        "Read how a local café transformed their operations and improved customer loyalty with smart order management and online promotions through OrderCraft.",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1542444459-db63c36a8d99?auto=format&fit=crop&w=1024&q=80",
      category: "Industry Insights",
      date: "April 10, 2025",
      title: "Top 5 Trends in Restaurant Technology for 2025",
      description:
        "Stay ahead of the curve by learning about self-service kiosks, AI-powered recommendations, loyalty programs, and how OrderCraft supports these trends.",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1024&q=80",
      category: "How-To",
      date: "April 5, 2025",
      title: "Setting Up Your Online Menu in Less Than 15 Minutes",
      description:
        "A step-by-step guide to setting up your digital menu with OrderCraft — no coding, no headaches, just beautiful results.",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1564675671004-c7b1af13d72b?auto=format&fit=crop&w=1024&q=80",
      category: "Announcements",
      date: "April 2, 2025",
      title: "OrderCraft Now Integrates with Delivery Apps!",
      description:
        "Manage orders from UberEats, DoorDash, and more directly inside OrderCraft. Learn how to activate integrations and maximize your delivery sales.",
      url: "#",
    },
  ],
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && (
                      <Description>{post.description}</Description>
                    )}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>
                Load More
              </LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};


