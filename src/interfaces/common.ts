import BaseReactPlayer, { BaseReactPlayerProps } from 'react-player/base';

import {
  EButtonPlay,
  EButtonSide,
  ELinkPath,
  ELoadingStatus,
  EMangaReliase,
  EMediaInfo,
  EReliase,
  EScrollSide,
  EVideoPlayerMenu,
  EVideoPlayerStatus,
} from '@enums/enums';

export type EReliaseType = keyof typeof EReliase;
export type EMediaInfoValueType = `${EMediaInfo}`;
export type EScrollSideType = keyof typeof EScrollSide;
export type EButtonPlayType = keyof typeof EButtonPlay;
export type EMangaReliaseType = keyof typeof EMangaReliase;
export type ELoadingStatusType = keyof typeof ELoadingStatus;
export type EVideoPlayerMenuType = keyof typeof EVideoPlayerMenu;
export type VideoPlayerRef = BaseReactPlayer<BaseReactPlayerProps>;
export type EVideoPlayerStatusType = keyof typeof EVideoPlayerStatus;
export type ButtonSideType = EButtonSide.prev | EButtonSide.next | null;
export type EMainRouteType = Extract<keyof typeof ELinkPath, 'home' | 'animes' | 'mangas'>;

export type Values<T> = {
  [K in keyof T]: T[K]
}[keyof T];

export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][];

export type KeysWithValues<T> = {
  [K in keyof T]: T[K];
};

export type MainRouteType = {
  [key in EMainRouteType]: { title: string }
};

export type GetMangaSeoProps = {
  title: string,
  page: number,
  chapter: number | null,
  vol: number | null,
};

export type VideoPlayerProgressType = {
  loaded: number;
  loadedSeconds: number;
  played: number;
  playedSeconds: number;
};

export type FilterGenreType = {
  kind: string;
  label: string;
};

export type SelectType = {
  name: string;
  type: string;
};