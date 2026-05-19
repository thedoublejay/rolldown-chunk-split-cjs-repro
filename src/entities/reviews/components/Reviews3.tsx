
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useReviews4 } from "../hooks/use-reviews-4";
export function Reviews3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="reviews3">item</Shared4><LegacyContainer4 title="reviews-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews3;
