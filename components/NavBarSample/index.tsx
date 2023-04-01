import Link from "next/link";

/**
 *
 * @constructor
 */
function NavBarSample() {
  return (
    <div
      style={{
        display: "flex",
        padding: '1rem',
        justifyContent: "space-between"
      }}
    >
      {/* 단순 페이지 링크 예시 */}
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/contact-us">Contact Us</Link>
      <Link href="/posts/2021-02-03/about-foo-bar">article1</Link>
      <Link href="/posts/2021-02-03/about-baz-qux">article2</Link>
      <Link href={{
        pathname: "/posts/[date]/[slug]",
        query: {
          date: '2020-01-01',
          slug: 'happy-new-year',
          foo: 'bar'
        }}}
      >
        Happy New Year
      </Link>
    </div>
  );
}

export default NavBarSample;
