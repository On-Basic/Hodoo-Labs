import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "components/Header/Header";
import Main from "components/Header/Main";
import Peanut from "components/Header/Peanut";
import VideoLive from "components/VideoLive/VideoLive";
import Checkbooks from "components/Checkbooks/Checkbooks";
import TodayClass from "components/Todayclass/Todayclass";
import Diary from "components/Diary/Diary";
import Bookmarks from "components/Bookmark/Bookmarks";
import Footer from "components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Peanut />
      <VideoLive />
      <Checkbooks />
      <TodayClass />
      <Diary />
      <Bookmarks />
      <Footer />
    </div>
  );
};

export default Home;
