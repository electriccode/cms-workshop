import Head from 'next/head';
// import '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <header>
          <a href="https://www.chegg.com/">
            <img src="/logo.svg" alt="" width="80" />
          </a>
          <nav>
            <a href="https://www.chegg.com/books">Books</a>
            <a href="https://www.chegg.com/study">Study</a>
            <a href="https://www.chegg.com/career">Career</a>
            <a href="https://www.chegg.com/introducing-chegg-life">Life</a>
          </nav>
        </header>
        <section className="hero bleed">
          <img
            src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1200/site-assets/marketing/landing-pages/Cheggcom/optimized/full-hero-sohp-s.jpg"
            width="100%"
            alt=""
          />
          <div className="body">
            <div className="overline">24/7 COURSE HELP</div>
            <h1 className="h2">Learn with Chegg</h1>
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
        </section>
        <h2 className="h2">Here for every moment</h2>
        <section className="cards">
          <div className="card">
            <img
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/tile-hw.png"
              alt=""
            />
            <h3 className="h2">Homework help</h3>
            <p>
              Study with 55+ million step-by-step explanations, Expert Q&As &
              math support.
            </p>
            <a className="cta" href="https://www.chegg.com/homework-help">
              Learn more <img src="/arrow.svg" alt="" />
            </a>
          </div>
          <div className="card">
            <img
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/tile-exam-m.png"
              alt=""
            />
            <h3 className="h2">Exam prep & practice</h3>
            <p>
              Figure out what you don’t know & get ready for test day with
              practice exams.1
            </p>
            <a className="cta" href="https://www.chegg.com/prep-for-an-exam">
              Learn more <img src="/arrow.svg" alt="" />
            </a>
          </div>
          <div className="card">
            <img
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/tile-topics-m.png"
              alt=""
            />
            <h3 className="h2">Understand a topic</h3>
            <p>
              Simplify the toughest concepts with digestible topic breakdowns &
              videos.
            </p>
            <a className="cta" href="https://www.chegg.com/understand-a-topic">
              Learn more <img src="/arrow.svg" alt="" />
            </a>
          </div>
          <div className="card">
            <img
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/tile-writing-m.png"
              alt=""
            />
            <h3 className="h2">Writing & citations</h3>
            <p>
              Strengthen your writing with plagiarism checks, expert
              proofreading & instant citations.
            </p>
            <a className="cta" href="https://www.chegg.com/writing">
              Learn more <img src="/arrow.svg" alt="" />
            </a>
          </div>
        </section>
        <section className="hero textonly">
          <p className="h6">Prices starting at USD $6.79/mo., cancel anytime</p>
          <a href="https://www.chegg.com/auth?redirect=%2Fcspofferinterstitial%2Fib%3FproductType%3DCHEGG_STUDY%26checkoutFlowType%3DSINGLE_ITEM_PURCHASE%26data%3DeyJpdGVtcyI6W3siY2F0YWxvZ0l0ZW1JZCI6IjkxNDYiLCJwcmljaW5nSWQiOiI5N2I1MjE2Yy0yZGQwLTM4YzAtYjI2MS1mYjViMDFhNjBmZGEiLCJxdWFudGl0eSI6MSwiY2F0YWxvZ0l0ZW1Tb3VyY2UiOiJORVRTVUlURSIsImFubm90YXRpb25zIjp7fX1dLCJob3N0QW5ub3RhdGlvbnMiOnt9LCJzdWNjZXNzVXJsIjoiLyIsImVycm9yVXJsIjoiLyJ9%26originalSource%3DCONTENTFUL&action=signup&type=simplifiedstudy">
            Sign up
          </a>
        </section>
        <h2 className="h2">
          94% of Chegg customers say they get better grades when they use Chegg
          to understand their coursework2
        </h2>
        <section className="hero">
          <img
            src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1000/site-assets/marketing/landing-pages/Cheggcom/optimized/panel-expertmade-s.jpg"
            width="100%"
            alt=""
          />
          <div className="body">
            <h2 className="h2">Save up to 90% off textbooks3</h2>
            <p>The smartest way to rent or buy textbooks. Period.</p>
            <a className="button" href="https://www.chegg.com/books">
              Find your books
            </a>
          </div>
        </section>
        <section className="hero textonly">
          <h1 className="h2">Study time, crunch time, anytime</h1>
          <p>
            Explore some of our best study tools & get 24/7 support for your
            assignments
          </p>
        </section>
        <section className="cards">
          <div className="card rounded">
            <img
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/optimized-V4.1/card-test-prep-xl.png"
              alt=""
            />
            <h3>Test prep, simplified</h3>
            <p>
              Check your knowledge with practice problems, quizzes, and more.1
            </p>
            <a className="cta" href="https://www.chegg.com/prep-for-an-exam">
              Learn more <img src="/arrow.svg" alt="" />
            </a>
          </div>
          <div className="card rounded">
            <img
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/optimized-V4.1/card-snap-a-pic-xl.png"
              alt=""
            />
            <h3>Experts by your side</h3>
            <p>
              Have millions of explanations at your fingertips. Plus, snap a pic
              to get an expert answer.
            </p>
            <a className="cta" href="https://www.chegg.com/study/qa">
              Learn more <img src="/arrow.svg" alt="" />
            </a>
          </div>
          <div className="card rounded">
            <img
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/optimized-V4.1/card-feedback-xl.png"
              alt=""
            />
            <h3>Professional proofreading</h3>
            <p>
              Receive detailed comments from real writing experts on your
              assignment’s thesis, style, and more—within 48 hours.
            </p>
            <a
              className="cta"
              href="https://www.chegg.com/writing/features/proofreading"
            >
              Learn more <img src="/arrow.svg" alt="" />
            </a>
          </div>
        </section>
        <section className="cards">
          <div className="card noborder rounded">
            <img
              className="rounded"
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1000/site-assets/marketing/landing-pages/Cheggcom/panel-careers-m.jpg"
              alt=""
            />
            <h3 className="h2">Make your dream job a reality</h3>
            <p>Grow your skills and find opportunities.</p>
            <a className="cta" href="https://www.chegg.com/career">
              Explore Careers & Internships
              <img src="/arrow.svg" alt="" />
            </a>
          </div>
          <div className="card noborder rounded">
            <img
              className="rounded"
              src="https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1000/site-assets/marketing/landing-pages/Cheggcom/panel-life-m.jpg"
              alt=""
            />
            <h3 className="h2">Balance more than just classes</h3>
            <p>Navigate life and money matters.</p>
            <a
              className="cta"
              href="https://www.chegg.com/introducing-chegg-life"
            >
              Explore Life <img src="/arrow.svg" alt="" />
            </a>
          </div>
        </section>
      </main>
      <footer>© 2003-2022 Chegg Inc. All rights reserved.</footer>
    </div>
  );
}
