import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <header>
          <a href="https://www.chegg.com/">
            <img src="" alt="" />
          </a>
        </header>
        <div className="hero">
          <img
            src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1200/site-assets/marketing/landing-pages/Cheggcom/optimized/full-hero-sohp-s.jpg"
            width="100%"
            alt=""
          />
          <div className="overline">24/7 COURSE HELP</div>
          <h1>Learn with Chegg</h1>
          <p>
            From first day to finals, get homework help, exam prep & writing
            support—tailored to your courses.
          </p>
          <a
            className="button"
            href="https://www.chegg.com/auth?redirect=%2Fcspofferinterstitial%2Fib%3FproductType%3DCHEGG_STUDY%26checkoutFlowType%3DSINGLE_ITEM_PURCHASE%26data%3DeyJpdGVtcyI6W3siY2F0YWxvZ0l0ZW1JZCI6IjkxNDYiLCJwcmljaW5nSWQiOiI1MzA1ZTU5YS04Mzk3LTM5OGYtOTY2Mi05NWEyNzA2Njc0M2IiLCJxdWFudGl0eSI6MSwiY2F0YWxvZ0l0ZW1Tb3VyY2UiOiJORVRTVUlURSIsImFubm90YXRpb25zIjp7fX1dLCJob3N0QW5ub3RhdGlvbnMiOnt9LCJzdWNjZXNzVXJsIjoiLyIsImVycm9yVXJsIjoiLyJ9%26originalSource%3DCONTENTFUL&action=signup&type=simplifiedstudy"
          >
            Get started
          </a>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
