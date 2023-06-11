import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPopularData } from "../apis/index";
import { Store } from "../store";
import VideoGridItem from "../components/VideoGridItem/VideoGridItem";
import VideoGrid from "../components/VideoGrid/VideoGrid";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log(res);
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: res.data.items },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <VideoGrid>
        {globalState.popular &&
          globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title}
              ></VideoGridItem>
            );
          })}
      </VideoGrid>
    </Layout>
  );
};

export default Top;
