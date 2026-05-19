
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useReviews3 } from "../hooks/use-reviews-3";
export function Reviews10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="reviews10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews10;
