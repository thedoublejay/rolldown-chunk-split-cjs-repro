
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useReviews2 } from "../hooks/use-reviews-2";
export function Reviews1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="reviews1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews1;
