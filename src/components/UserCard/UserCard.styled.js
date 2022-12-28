import styled, { css } from 'styled-components';

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
  background-size: contain;
  padding: 34px 45px 23px 52px;
`;

export const SectionBorder = styled.div`
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 218px;
  left: 192px;
  border-radius: 100px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const AvatarFrame = styled.img`
  z-index: 2;
  position: absolute;
  top: 214px;
  left: 181px;
`;

export const InfoSection = styled.div`
  padding: 74px 98px 48px;
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
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  border: 0;
  margin-top: 25px;
  transition: 250ms;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FollowButtonCase = styled(FollowButton)`
  ${props => {
    switch (props.$mode) {
      case 'following':
        return css`
          background-color: #ebd8ff;
        `;

      default:
        return css`
          background-color: #5cd3a8; ;
        `;
    }
  }}
`;
