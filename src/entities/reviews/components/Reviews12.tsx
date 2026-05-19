
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useReviews5 } from "../hooks/use-reviews-5";
export function Reviews12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="reviews12">item</Shared13><LegacyContainer13 title="reviews-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews12;
