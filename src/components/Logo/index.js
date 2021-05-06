
import BoneImage from 'components/BoneImage';

const sources = [
  {
    srcSet: '/assets/logo/etherbone_32.webp 600w, /assets/logo/etherbone_32.webp 960w, /assets/logo/etherbone_32.webp 1280w',
    type: 'image/webp'
  },
  {
    srcSet: '/assets/logo/etherbone_32.webp 600w, /assets/logo/etherbone_32.webp 960w, /assets/logo/png/etherbone_32.webp',
    type: 'image/png'
  }
];

const Logo = props => (
  <BoneImage
    {...props}
    width={32}
    height={32}
    sources={sources} />
);

export default Logo;
