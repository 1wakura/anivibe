import { FC } from 'react';

import { Typography } from '@mui/material';
import clsx from 'clsx';

import ImageWithPlaceholder from '@ui/ImageWithPlaceholder';
import Link from '@ui/Link';

import useCheckWebpSupport from '@hooks/useCheckWebpSupport';

import useCardItemStyles from './CardItem.styles';

export type CardItemProps = {
  id: number;
  pathTo: string;
  title?: string;
  imageSource?: string;
  big?: boolean;
  className?: string;
};

const CardItem: FC<CardItemProps> = ({
  id,
  title,
  pathTo,
  imageSource,
  big = false,
  className,
}) => {
  const classes = useCardItemStyles();
  const image = useCheckWebpSupport(id);
  const currentImage = imageSource || image;

  return (
    <Link path={pathTo} className={clsx(classes.link, className, { [classes.big]: big })}>

      <ImageWithPlaceholder src={currentImage} className={classes.image}/>

      {title && <div className={classes.cardItemContent}>
        <Typography align="center" variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
      </div>
      }
    </Link>
  );
};

export default CardItem;