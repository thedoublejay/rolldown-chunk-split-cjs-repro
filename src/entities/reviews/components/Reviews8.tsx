
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useReviews1 } from "../hooks/use-reviews-1";
export function Reviews8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="reviews8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews8;
