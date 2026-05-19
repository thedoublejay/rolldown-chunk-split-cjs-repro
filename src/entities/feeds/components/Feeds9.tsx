
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useFeeds2 } from "../hooks/use-feeds-2";
export function Feeds9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="feeds9">item</Shared10><LegacyContainer10 title="feeds-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds9;
