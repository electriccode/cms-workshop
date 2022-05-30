export default function Card(props) {
  const { title, description, cta, image } = props;
  const shouldRenderCard = title || description || cta || image;
  return shouldRenderCard ? (
    <div className="card">
      {image && <img src={image.url} alt={image.title} />}
      {title && <h3 className="h2">{title}</h3>}
      {description && <p>{description}</p>}
      {cta && (
        <a className="cta" href={cta.url}>
          {cta.title} <img src="/arrow.svg" alt="" />
        </a>
      )}
    </div>
  ) : null;
}

/*
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
*/

/**
 * <div className="card rounded">
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
 */

/**
  * <div className="card noborder rounded">
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
  */
