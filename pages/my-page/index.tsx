import {useEffect} from "react";
import useAuth from "@/hooks/useAuth";
import {useRouter} from "next/router";

/**
 * 페이지 : /my-page
 * @constructor
 */
function MyPage() {

  // 사용자를 리다이렉션 시키기 위한 Next.js 라우터입니다.
  const router = useRouter();

  // 현재 사용자 로그인 여부를 확인합니다.
  const { user } = useAuth();

  // 현재 사용자가 로그인 중이지 않으면, 로그인 페이지로 이동 시킵니다.
  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [router, user]);

  // 페이지 구조
  return user === null ? null : (
    <div>
      Private Page
      <div>
        id: {user.id}
      </div>
      <div>
        name: {user.name}
      </div>
      <div>
        age: {user.age}
      </div>
    </div>
  );

}

export default MyPage;
