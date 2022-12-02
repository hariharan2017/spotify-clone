import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actions as dataActions } from "../../store/data";
import SongBanner from "../../components/SongBanner";

const Album = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();

  const selectedAlbum = useSelector(state => state.data.album.selectedAlbum);

  useEffect(() => {
    dispatch(dataActions.getAlbumData(albumId));
  }, [albumId])

  const calculateDuration = (album) => {
    let totalTime = 0;
    album?.tracks?.items?.forEach((item) => {
      totalTime += item?.duration_ms || 0;
    });
    return totalTime;
  };

  const duration = useMemo(() => calculateDuration(selectedAlbum), [selectedAlbum]);

  const bannerProps = {
    type: selectedAlbum?.type,
    name: selectedAlbum?.name,
    description: selectedAlbum?.description,
    owner: selectedAlbum?.artists?.[0]?.name,
    releaseDate: selectedAlbum?.release_date,
    totalTracks: selectedAlbum?.tracks?.total + " songs",
    image: selectedAlbum?.images?.[0]?.url,
    duration
  }

  return (
    <div>
      <SongBanner {...bannerProps} />
    </div>
  );
};

export default Album;