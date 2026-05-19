
import { Button, Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";

import { DatePicker } from "@mui/x-date-pickers";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { tokens } from "../styles/tokens";
import { useShared16 } from "../hooks/use-shared-16";

const Box15 = styled.div` color: ${tokens.colors.text}; padding: 8px; `;

export function Shared15({ label, children }) {
  const { state, derived } = useShared16(label);
  const { register } = useForm();
  const cls = clsx("shared-15", { active: state });
  return (
    <Paper className={cls}>
      <Stack>
        <Typography>{state} {derived}</Typography>
        <Divider />
        <Button startIcon={<AddIcon />}>Add</Button>
        <Button startIcon={<EditIcon />}>{children}</Button>
        
        <DatePicker label="picker" />
        <Box15>emotion</Box15>
      </Stack>
    </Paper>
  );
}
export default Shared15;
