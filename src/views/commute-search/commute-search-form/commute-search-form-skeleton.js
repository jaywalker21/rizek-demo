import React from "react";

import Stack from "@material-ui/core/Stack";
import Skeleton from "@material-ui/core/Skeleton";

const CommuteSearchFormSkeleton = () => {
  return (
    <Stack spacing={0.5}>
      <Skeleton variant="text" height={80} />
      <Skeleton variant="text" height={80} />
      <Skeleton variant="text" height={60} />
      <Skeleton variant="text" height={60} />
    </Stack>
  );
};

export default CommuteSearchFormSkeleton;
