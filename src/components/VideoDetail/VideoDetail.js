import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchselectedData } from "../../apis";
import { Store } from "../../store";
import VideoPlay from "../VideoPlay/VideoPlay";
import Linkify from "react-linkify";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();

  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    await fetchselectedData(id).then((res) => {
      const item = res.data.items.shift();
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } });
    });
  };

  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return globalState.selected && globalState.selected.id ? (
    <div>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify> <pre>{globalState.selected.snippet.description}</pre></Linkify>
     
    </div>
  ) : (
    <span>nodeta</span>
  );
};

export default VideoDetail;
