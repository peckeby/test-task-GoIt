import { useState } from 'react';
import { useEffect } from 'react';

import {
  UserCardLi,
  LogoPictureDiv,
  Avatar,
  InfoSection,
  InfoSectionItems,
  InfoText,
  SpanImg,
  FollowButton,
  FollowingButton,
} from './UserCard.styled';

import LogoSvg from 'components/Logo/Logo';

export default function UserCard({
  name,
  avatar,
  tweetsNumber,
  totalFollowers,
}) {
  const [isFollow, setIsFollow] = useState(false);
  const [followers, setFollowers] = useState(totalFollowers);
  const [btnTextContent, setBtnTextContent] = useState('Follow');

  const UserUpdate = () => {
    if (localStorage.getItem(`${name}`)) {
      setFollowers(followers + 1);
      setBtnTextContent('Following');
    }

    if (!localStorage.getItem(`${name}`) && isFollow === true) {
      setFollowers(followers + 1);
      setBtnTextContent('Following');
      localStorage.setItem(`${name}`, 'isFollowing');
    }
    if (localStorage.getItem(`${name}`) && followers > totalFollowers) {
      setFollowers(followers - 1);
      setBtnTextContent('Follow');
      localStorage.removeItem(`${name}`);
    }
  };

  useEffect(() => {
    UserUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFollow]);

  const onFollow = () => {
    setIsFollow(!isFollow);
  };

  return (
    <UserCardLi>
      <LogoPictureDiv>
        <LogoSvg />
      </LogoPictureDiv>
      <Avatar src={avatar} alt={name} width={72} height={72} loading="lazy" />
      <SpanImg />
      <InfoSection>
        <InfoSectionItems>
          <InfoText>{tweetsNumber} tweets</InfoText>
          <p>{followers.toLocaleString('en-US')} followers</p>
          {btnTextContent === 'Follow' ? (
            <FollowButton type="button" name="followbtn" onClick={onFollow}>
              {btnTextContent}
            </FollowButton>
          ) : (
            <FollowingButton type="button" name="followbtn" onClick={onFollow}>
              {btnTextContent}
            </FollowingButton>
          )}
        </InfoSectionItems>
      </InfoSection>
    </UserCardLi>
  );
}
