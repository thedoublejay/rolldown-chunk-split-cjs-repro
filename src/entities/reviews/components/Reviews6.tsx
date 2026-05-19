
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useReviews7 } from "../hooks/use-reviews-7";
export function Reviews6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="reviews6">item</Shared7><LegacyContainer7 title="reviews-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews6;
