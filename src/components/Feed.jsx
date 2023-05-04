import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import P2 from "./P2";
import P3 from "./P3";
import P4 from "./P4";
import P5 from "./P5";
import P6 from "./P6";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post />
          <P2 />
          <P3 />
          <P4 />
          <P5 />
          <P6 />
        </>
      )}
    </Box>
  );
};

export default Feed;
