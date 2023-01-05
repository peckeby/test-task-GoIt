import styled from 'styled-components';
import img from '../images/backgroundGroup.png';

export const UserCardLi = styled.li`
  width: 454px;
  height: 547px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
  position: relative;
`;

export const LogoPictureDiv = styled.div`
  height: 194px;
  padding: 34px 45px 23px 52px;
  background-image: url(${img});
  background-size: contain;
  background-origin: content-box;
  background-repeat: no-repeat;
`;

export const SpanImg = styled.span`
  position: relative;
  &::before {
    content: '';
    width: 92px;
    height: 92px;
    border-radius: 100px;
    box-shadow: 0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06),
      inset 0px -2.55556px 5.11111px #ae7be3,
      inset 0px 5.11111px 3.83333px #fbf8ff;
    display: block;
    z-index: 2;
    position: absolute;
    bottom: -50px;
    left: 181px;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: 209px;
  left: 181px;
  border-radius: 100px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  z-index: 1;
  border: 10px solid #ebd8ff;
`;

export const InfoSection = styled.div`
  &::before {
    content: '';
    display: block;
    height: 8px;
    width: -webkit-fill-available;
    background: #ebd8ff;
    background-origin: padding-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
      inset 0px 4px 3px #fbf8ff;
  }
`;

export const InfoSectionItems = styled.div`
  padding-top: 74px;
  padding-bottom: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InfoText = styled.p`
  margin-bottom: 20px;
`;

export const FollowButton = styled.button`
  cursor: pointer;
  width: 226px;
  height: 56px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  border: 0;
  margin-top: 32px;
  transition: 250ms;
  text-transform: uppercase;
  background-color: #5cd3a8;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FollowingButton = styled(FollowButton)`
  background-color: #ebd8ff;
`;
