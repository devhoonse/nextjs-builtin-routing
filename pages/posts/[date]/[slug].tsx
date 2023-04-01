/**
 * 페이지 : /posts/${date}/${slug} 에서 date, slug 값을 페이지 컴포넌트로 전달하기 위한 Parser
 * @param params
 */
export function getServerSideProps({ params }: { params: { date: string; slug: string; } }) {
  const { date, slug } = params;

  return {
    props: {
      date,
      slug
    }
  };
}

/**
 * 페이지 : /posts/${date}/${slug}
 * @constructor
 */
function Post(props: { date: string; slug: string; }) {
  return (
    <div>
      <span>Post</span>
      <div>Date : {props.date}</div>
      <div>ID : {props.slug}</div>
    </div>
  );
}

export default Post;
