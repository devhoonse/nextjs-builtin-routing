import {useState} from "react";

/**
 * User
 * * id : 사용자 ID
 * * name : 사용자 이름
 * * age : 사용자 연령
 */
type User = {
  id: string;
  name: string;
  age: number;
};

/**
 * 로그인 상태를 관리합니다.
 */
function useAuth() {
  const [user] = useState<User | null>(Math.random() < 0.5 ? null : {
    id: 'devhoonse',
    name: 'Sehoon Choi',
    age: 34
  });

  return {
    user
  };
}

export default useAuth;
