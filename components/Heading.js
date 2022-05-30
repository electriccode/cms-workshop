export default function Heading(props) {
  const { title } = props;
  return title ? <h2 className="h2">{title}</h2> : null;
}

/**
 * <h2 className="h2">
          94% of Chegg customers say they get better grades when they use Chegg
          to understand their coursework2
        </h2>
 */
