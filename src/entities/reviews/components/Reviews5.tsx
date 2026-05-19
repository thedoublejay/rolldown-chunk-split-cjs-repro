
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useReviews6 } from "../hooks/use-reviews-6";
export function Reviews5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="reviews5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews5;
