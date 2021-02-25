import React from 'react';
import Card from './card/Card';
import Dots from './dots/Dots';
import Button from './button/Button';
import classnames from 'classnames';
interface CarouselProps {
  cards: Array<{ text: string; img: string }>;
}
const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [current, setCurrent] = React.useState(0); //当前卡片索引值
  const countRef = React.useRef(0);
  countRef.current = current;
  const [isHover, setHover] = React.useState(false); //鼠标是否hover到跑马灯上
  const useHoverRef = React.useRef(false);
  useHoverRef.current = isHover;
  const getClasses = (index: number) => {
    const isLeft =
      index === current - 1 || (current === 0 && index === cards.length - 1);
    const isRight =
      index === current + 1 || (current === cards.length - 1 && index === 0);
    const isCurrent = current === index;
    return classnames('carousel-card-size', {
      'carousel-card-dock': !(isLeft || isRight || isCurrent),
      'carousel-card-middle': isCurrent,
      'carousel-card-left': isLeft,
      'carousel-card-right': isRight,
    });
  };
  if (cards.length < 3) {
    throw new Error('走马灯元素不得少于3个');
  }

  const step = (directon: 1 | -1, source: 'manual' | 'auto') => {
    if (useHoverRef.current && source === 'auto') {
      return;
    }
    if (directon === 1) {
      if (countRef.current === cards.length - 1) {
        setCurrent(0);
      } else {
        setCurrent((current) => current + 1);
      }
    }
    if (directon === -1) {
      if (countRef.current === 0) {
        setCurrent(cards.length - 1);
      } else {
        setCurrent((current) => current - 1);
      }
    }
  };

  //设置定时滚动,滚动间隔4s
  React.useEffect(() => {
    const timer = setInterval(() => {
      step(1, 'auto');
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {cards.map((card, index) => (
        <Card key={index} text={card.text} className={getClasses(index)}>
          <img src={card.img} />
        </Card>
      ))}
      {isHover ? (
        <Button
          placement="left"
          className="carousel-button-left"
          onClick={() => step(-1, 'manual')}
        />
      ) : null}
      {isHover ? (
        <Button
          placement="right"
          className="carousel-button-right"
          onClick={() => step(1, 'manual')}
        />
      ) : null}
      <div className="carousel-bottom-dots">
        <Dots
          count={cards.length}
          current={current}
          onChange={(i) => setCurrent(i)}
        />
      </div>
    </div>
  );
};

export default Carousel;
