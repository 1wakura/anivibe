import { makeStyles } from '@mui/styles';

const usePlaylistStyles = makeStyles(() => ({
  videoPlaylistWrapper: {
    height: '95.5%',
    position: 'absolute',
    overflow: 'scroll',
    top: 0,
  },

  videoPlaylist: {
    width: 110,
    color: '#000',
    borderRadius: 3,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  videoPlayListItem: {
    fontSize: 14,
    cursor: 'pointer',
    color: '#fff',
    width: '100%',
    borderRadius: 3,
    padding: 2.4,
    transition: 'background 200ms',

    '&:hover': {
      background: 'rgba(255, 255, 255, 0.40)',
      transition: 'background 200ms',
    },
  },

  videoPlayListItemActive: {
    background: '#fff',
    color: '#000',
    '&:hover': {
      background: '#fff',
    },
  },
}));

export default usePlaylistStyles;
