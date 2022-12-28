import Logo from '../images/icons.svg';
import { LogoStyleSvg } from './Logo.styled';

const LogoSvg = ({ name }) => (
  <LogoStyleSvg width={88} height={26}>
    <use href={`${Logo}#icon-${name}`} />
  </LogoStyleSvg>
);

LogoSvg.defaultProps = { name: 'logo' };

export default LogoSvg;
