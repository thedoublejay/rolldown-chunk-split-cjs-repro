
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useReviews8 } from "../hooks/use-reviews-8";
export function Reviews7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="reviews7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews7;
