import gsap from 'gsap';

export const animatePuzzles = (
  puzzleRefs: Record<string, React.RefObject<HTMLImageElement>>,
) => {
  const animations = [
    {
      ref: 'puzzleTopLeft',
      props: { top: '20px', left: '31px', opacity: 1 },
    },
    { ref: 'puzzleTopCenter', props: { top: '30px', opacity: 1 } },
    {
      ref: 'puzzleTopRight',
      props: { top: '22px', right: '31px', opacity: 1 },
    },
    {
      ref: 'puzzleUpperMidLeft',
      props: { top: '-47px', left: '22px', opacity: 1 },
    },
    {
      ref: 'puzzleUpperMidCenter',
      props: { top: '-47px', left: '-8px', opacity: 1 },
    },
    {
      ref: 'puzzleUpperMidRight',
      props: { top: '-48px', right: '40px', opacity: 1 },
    },
    {
      ref: 'puzzleLowMidLeft',
      props: { top: '-100px', left: '10px', opacity: 1 },
    },
    {
      ref: 'puzzleLowMidCenter',
      props: { top: '-118px', left: '-20px', opacity: 1 },
    },
    {
      ref: 'puzzleLowMidRight',
      props: { top: '-118px', right: '50px', opacity: 1 },
    },
    {
      ref: 'puzzleBottomLeft',
      props: { bottom: '170px', left: '5px', opacity: 1 },
    },
    {
      ref: 'puzzleBottomCenter',
      props: { bottom: '160px', left: '-25px', opacity: 1 },
    },
    {
      ref: 'puzzleBottomRight',
      props: { bottom: '152px', right: '55px', opacity: 1 },
    },
  ];

  animations.forEach(({ ref, props }) => {
    if (puzzleRefs[ref]?.current) {
      gsap.to(puzzleRefs[ref].current, {
        ...props,
        duration: 1,
        delay: 0.5,
        ease: 'back.inOut',
      });
    }
  });
};
