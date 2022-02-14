import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

/** MyApp **
- 페이지 이동할 때마다 유지해야 하는 스타일이나 레이아웃 적용
- 페이지 이동할 때 유지해야할 state 관리
- componentDidCatch 라이프사이클로 공통 에러 처리
- 페이지에 공통 로직을 통해 데이터를 주입해야하는 경우
- 모든 페이지에 필요한 css를 적용하는 경우 */
