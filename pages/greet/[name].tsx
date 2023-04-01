import {useRouter} from "next/router";

/**
 * 페이지 : /greet/${name}
 * @constructor
 */
function Greet() {

  // 페이지 /greet/${name} 에서 name 값을 읽어온다.
  const { query } = useRouter();
  console.log('query : ', query);

  return (
    <div>
      Hello, {query.name} !
      <div>learning: {`${query.learning}`}</div>
    </div>
  );
}

export default Greet;
