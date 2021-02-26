import '@/styles/style.scss';
import Carousel from '@/components/carousel/Carousel';
import Card from '@/components/card/Card'
import RecommendCard from '@/components/recommendCard/RecommendCard'
const cards = [
  {
    text: '独家',
    img: 'http://felis.top:9000/picture?md5=20d08190c4476d714d590da54ea02c03',
  },
  {
    text: '热歌推荐',
    img: 'http://felis.top:9000/picture?md5=95d9dfe939e9af46b9010193da48f314',
  },
  {
    text: '独家',
    img: 'http://felis.top:9000/picture?md5=0cdd0273603346beb88dae6cd9530750',
  },
  {
    text: '新歌推荐',
    img: 'http://felis.top:9000/picture?md5=1498ec4aa74fa686ac5947786ae094a2',
  },
  {
    text: '独家',
    img: 'http://felis.top:9000/picture?md5=ecf627f87d4a225d1621848fd62f138e',
  },
  {
    text: '独家',
    img: 'http://felis.top:9000/picture?md5=bb3eb13291a15847056195528ac9665d',
  },
];

export default function IndexPage() {
  return (
    <div className="index-page">
      {/* <Carousel cards={cards}/> */}
      <RecommendCard/>
    </div>
  );
}
