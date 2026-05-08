import { createBrowserRouter } from 'react-router';
import LoginPageLogic from './pages/LoginPage/LoginPage.logic';
import SignupPageLogic from './pages/SignupPage/SignupPage.logic';
import MyPageLogic from './pages/MyPage/MyPage.logic';
import MemberPageLogic from './pages/MemberPage/MemberPage.logic';
import MemberDetailPageLogic from './pages/MemberDetailPage/MemberDetailPage.logic';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPageLogic />,
  },
  {
    path: '/signup',
    element: <SignupPageLogic />,
  },
  {
    path: '/mypage',
    element: <MyPageLogic />,
  },
  {
    path: '/members',
    element: <MemberPageLogic />,
  },
  {
    path: '/members/:id',
    element: <MemberDetailPageLogic />,
  },
]);

export default router;