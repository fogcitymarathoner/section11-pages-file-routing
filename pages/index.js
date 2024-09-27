import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>
        Home Page
      </h1>
        <ul>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/blog/what/ever/i/want">Blog /what/ever/i/want</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
        </ul>
    </div>
  );
}

export function getStaticProps() {

    return {
        props: {

    },
  };
}

export default HomePage;
