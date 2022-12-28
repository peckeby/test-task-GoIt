import { useState } from 'react';

import {
  UserCardLi,
  LogoPictureDiv,
  SectionBorder,
  Avatar,
  AvatarFrame,
  InfoSection,
  InfoText,
  FollowButtonCase,
} from './UserCard.styled';
import YourImage from '../images/backgroundGroup.png';
import Ellips from '../images/ellipse.png';
import LogoSvg from 'components/Logo/Logo';

export default function UserCard({
  name,
  avatar,
  tweetsNumber,
  totalFollowers,
}) {
  const defineFollowingState = () => {
    if (localStorage.getItem(`${name}`)) {
      return true;
    } else {
      return false;
    }
  };

  const [isFollow, setIsFollow] = useState(defineFollowingState);
  const [followers, setFollowers] = useState(
    isFollow === false ? totalFollowers : totalFollowers + 1
  );
  const [btnTextContent, setBtnTextContent] = useState(
    isFollow === false ? 'Follow' : 'Unfollow'
  );

  const onFollow = () => {
    setIsFollow(!isFollow);
    if (isFollow === false) {
      setFollowers(followers + 1);
      setBtnTextContent('Unfollow');
      localStorage.setItem(`${name}`, 'isFollowing');
    } else {
      setFollowers(followers - 1);
      setBtnTextContent('Follow');
      localStorage.removeItem(`${name}`);
    }
  };

  return (
    <UserCardLi>
      <LogoPictureDiv>
        <LogoSvg />
        <img alt="background" src={YourImage} width={357} height={194} />
      </LogoPictureDiv>
      <SectionBorder></SectionBorder>
      <InfoSection>
        <AvatarFrame alt="Ellipse" src={Ellips} width={92} height={92} />
        <Avatar src={avatar} alt={name} width={72} height={72} />
        <InfoText>{tweetsNumber} tweets</InfoText>
        <p>{followers.toLocaleString('en-US')} followers</p>
        {btnTextContent === 'Follow' ? (
          <FollowButtonCase type="button" name="followbtn" onClick={onFollow}>
            {btnTextContent}
          </FollowButtonCase>
        ) : (
          <FollowButtonCase
            $mode="following"
            type="button"
            name="followbtn"
            onClick={onFollow}
          >
            {btnTextContent}
          </FollowButtonCase>
        )}
      </InfoSection>
    </UserCardLi>
  );
}
