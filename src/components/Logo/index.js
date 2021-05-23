
import TradingImage from 'components/TradingImage';

const sources = [
  {
    srcSet: '/assets/logo/trading.webp 600w, /assets/logo/trading.webp 960w, /assets/logo/trading.png 1280w',
    type: 'image/webp'
  },
  {
    srcSet: '/assets/logo/etherbone_32.webp 600w, /assets/logo/etherbone_32.webp 960w, /assets/logo/png/etherbone_32.webp',
    type: 'image/png'
  }
];

const Logo = props => (
  <TradingImage
    {...props}
    width={32}
    height={32}
    sources={sources} />
);

export default Logo;
