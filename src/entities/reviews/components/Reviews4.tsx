
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useReviews5 } from "../hooks/use-reviews-5";
export function Reviews4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="reviews4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews4;
