import * as React from 'react';
import clsx from 'clsx';

export default function SkeletonImage({ img, ...rest }) {
  const [visible, setVisible] = React.useState(false);
  const imgRef = React.useRef(null);

  const useSSRLayoutEffect =
  typeof window === 'undefined' ? () => {} : React.useLayoutEffect

  const { src, srcSet, sizes } = img.props;

  useSSRLayoutEffect(() => {
    if (imgRef.current?.complete) setVisible(true);
  }, [])


  React.useEffect(() => {
    if (!imgRef.current) return;
    if (imgRef.current.complete) return;

    let current = true;
    imgRef.current.addEventListener('load', () => {
      if (!imgRef.current || !current) return;
      setTimeout(() => {
        setVisible(true);
      }, 150);
    });
    /* eslint-disable*/
    return () => {
      current = false;
    };
  }, [src, srcSet, sizes]);

  const imgEl = React.cloneElement(img, {
    ref: imgRef,
    key: img.props.src,
    className: clsx(img.props.className, 'z-10 transition-opacity', {
      'opacity-0': !visible,
      'opacity-100': visible,
    }),
  });

  return (
    <>
      <div
        className={clsx(rest.className, 'w-full h-full', {
          'bg-slate-600 animate-pulse ': visible === false,
        })}
        style={
          visible === false
            ? {
                ...rest.style,
                backgroundSize: 'cover',
              }
            : rest.style
        }
      >
        {imgEl}
      </div>
    </>
  );
}
