import MyPageHeader from '../MyPage/MyPageHeader';
import {
  PageContainer,
  ContentContainer,
  InfoBox,
  InputGroup,
  MainButton
} from './MyInfoPage.style';

interface UserInfoProps {
  loginId: string;
  part: string;
  name: string;
  email: string;
  age: string | number;
}

interface MyInfoPageProps {
  userInfo: UserInfoProps;
  headerName: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdate: () => void;
}

const MyInfoPage = ({ userInfo, headerName, onInputChange, onUpdate }: MyInfoPageProps) => {
  return (
    <>
      <PageContainer>
        <MyPageHeader name={headerName} />

        <ContentContainer>
          <h2>내 정보</h2>

          <InfoBox>
            <section className="row">
              <span>아이디</span>
              <span>{userInfo.loginId}</span>
            </section>

            <section className="row">
              <span>파트</span>
              <span>{userInfo.part}</span>
            </section>
          </InfoBox>

          <InputGroup>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              name="name"
              value={userInfo.name || ''}
              onChange={onInputChange}
            />

            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="email"
              type="email"
              value={userInfo.email || ''}
              onChange={onInputChange}
            />

            <label htmlFor="age">나이</label>
            <input
              id="age"
              name="age"
              type="number"
              value={userInfo.age || ''}
              onChange={onInputChange}
            />
          </InputGroup>

          <MainButton onClick={onUpdate}>정보 수정</MainButton>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default MyInfoPage;