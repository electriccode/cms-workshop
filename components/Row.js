export default function Row({ children }) {
  return children ? <section className="cards">{children}</section> : null;
}
