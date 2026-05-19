
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useReviews4 } from "../hooks/use-reviews-4";
export function Reviews11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="reviews11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews11;
