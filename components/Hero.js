export default function Hero(props) {
  const { title, description, overline, image, cta } = props;
  const shouldRenderHero = title || description || overline || image || cta;
  return shouldRenderHero ? (
    <section className="hero bleed">
      {image && <img src={image.url} width="100%" alt={image.title} />}
      <div className="body">
        {overline && <div className="overline">{overline}</div>}
        {title && <h1 className="h2">{title}</h1>}
        {description && <p>{description}</p>}
        {cta && (
          <a className="button" href={cta.url}>
            {cta.title}
          </a>
        )}
      </div>
    </section>
  ) : null;
}

/**
 * <section className="hero textonly">
          <p className="h6">Prices starting at USD $6.79/mo., cancel anytime</p>
          <a href="https://www.chegg.com/auth?redirect=%2Fcspofferinterstitial%2Fib%3FproductType%3DCHEGG_STUDY%26checkoutFlowType%3DSINGLE_ITEM_PURCHASE%26data%3DeyJpdGVtcyI6W3siY2F0YWxvZ0l0ZW1JZCI6IjkxNDYiLCJwcmljaW5nSWQiOiI5N2I1MjE2Yy0yZGQwLTM4YzAtYjI2MS1mYjViMDFhNjBmZGEiLCJxdWFudGl0eSI6MSwiY2F0YWxvZ0l0ZW1Tb3VyY2UiOiJORVRTVUlURSIsImFubm90YXRpb25zIjp7fX1dLCJob3N0QW5ub3RhdGlvbnMiOnt9LCJzdWNjZXNzVXJsIjoiLyIsImVycm9yVXJsIjoiLyJ9%26originalSource%3DCONTENTFUL&action=signup&type=simplifiedstudy">
            Sign up
          </a>
        </section>

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
 */
