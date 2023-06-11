import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchselectedData } from "../../apis";
import { Store } from "../../store";


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
  }, []);

  return <div>VideoDetail</div>;
};

export default VideoDetail;
