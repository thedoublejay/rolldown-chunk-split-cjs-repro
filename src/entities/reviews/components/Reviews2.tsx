
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useReviews3 } from "../hooks/use-reviews-3";
export function Reviews2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="reviews2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews2;
