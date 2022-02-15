import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Peanut from "components/Header/Peanut";
import VideoLive from "components/VideoLive/VideoLive";
import Checkbooks from "components/Checkbooks/Checkbooks";
import TodayClass from "components/Todayclass/Todayclass";
import Diary from "components/Diary/Diary";
import Footer from "components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Peanut />
      <VideoLive />
      <Checkbooks />
      <TodayClass />
      <Diary />
      <Footer />
    </div>
  );
};

export default Home;
