
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useReviews2 } from "../hooks/use-reviews-2";
export function Reviews9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReviews2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="reviews9">item</Shared10><LegacyContainer10 title="reviews-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reviews9;
