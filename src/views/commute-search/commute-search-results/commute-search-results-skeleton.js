import React from "react";

import Stack from "@material-ui/core/Stack";
import Skeleton from "@material-ui/core/Skeleton";

const CommuteSearchResultsSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" height={100} />
      <Skeleton variant="rectangular" height={100} />
      <Skeleton variant="rectangular" height={100} />
      <Skeleton variant="text" height={60} />
    </Stack>
  );
};

export default CommuteSearchResultsSkeleton;
