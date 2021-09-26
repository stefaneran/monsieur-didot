import React from 'react';
import clsx from 'clsx';
import styles from './Carousel.module.css';
import IconButton from '@mui/material/IconButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import getUrlWithParams from '../../utils/getUrlWithParams';

const CarouselImage = ({ className, imageUrl, width, height, offset, testid }) => {
  const url = getUrlWithParams(imageUrl, width, height);
  const style = { 
    backgroundImage: `url(${url})`,
    marginLeft: offset || undefined 
  }
  return (
    <div 
      role="img" 
      aria-label="Carousel image of listing" 
      className={className} 
      style={style} 
      data-testid={testid}
    />
  )
}

const getInitialPreloaded = (imagesList) => {
  const imagesToPreload = imagesList[0] ? [imagesList[0]] : [];
  if (imagesList.length > 1) {
    imagesToPreload.push(imagesList[1]);
  }
  return imagesToPreload;
}

const Carousel = ({ 
  height, 
  width, 
  limit,
  imagesList 
}) => {
  const [index, setIndex] = React.useState(0);
  const [loadedImages, setLoadedImages] = React.useState(getInitialPreloaded(imagesList));

  const numOfImages = React.useMemo(() => imagesList.length, [imagesList]);
  const maxIndex = numOfImages - 1;
  const offset = `-${index * width}px`
  const style = { width, height }

  const handleForward = () => {
    if (index === maxIndex || index + 1 === limit) return;
    // Check for an image that can be preloaded
    const canPreload = maxIndex - index > 1;
    const nextImageToPreload = imagesList[index + 2];
    const isOverLimit = index + 2 > limit + 1;
    const isNextLoaded = Boolean(loadedImages.includes(nextImageToPreload));

    if (canPreload && !isOverLimit && !isNextLoaded) {
      setLoadedImages([...loadedImages, nextImageToPreload]);
    }
    setIndex(index + 1)
  }

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <div className={styles.carouselContainer} style={style}>
      <div className={styles.carouselControls}>
        <IconButton 
          role="button" 
          aria-label="previous image" 
          className={clsx(styles.carouselControlsArrow, styles.carouselControlsButton, styles.carouselControlsButtonBack)} 
          onClick={handleBack} 
        >
          <ArrowBackIcon />
        </IconButton>
        <div className={clsx(styles.carouselControlsButton, styles.carouselControlsButtonForward)}>
          <p 
            className={styles.carouselControlsCounter}
            aria-label={`${index + 1} out of ${limit || numOfImages} images`} 
          >
            {index + 1}/{limit || numOfImages}
          </p>
          <IconButton 
            role="button" 
            aria-label="next image" 
            className={styles.carouselControlsArrow} 
            onClick={handleForward} 
          >
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.carouselImageContainer}>
        {loadedImages && loadedImages.length ? loadedImages.map((imageUrl, imageIndex) => 
          <CarouselImage 
            key={imageUrl}
            className={styles.carouselImage}
            imageUrl={imageUrl}
            width={width}
            height={height}
            testid={imageIndex === 0 ? "carouselFirstImage" : ""}
            offset={imageIndex === 0 ? offset : undefined}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Carousel;