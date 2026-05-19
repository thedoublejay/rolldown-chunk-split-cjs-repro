
import { Button, Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";


import clsx from "clsx";
import { useForm } from "react-hook-form";
import { tokens } from "../styles/tokens";
import { useShared7 } from "../hooks/use-shared-7";

const Box6 = styled.div` color: ${tokens.colors.text}; padding: 8px; `;

export function Shared6({ label, children }) {
  const { state, derived } = useShared7(label);
  const { register } = useForm();
  const cls = clsx("shared-6", { active: state });
  return (
    <Paper className={cls}>
      <Stack>
        <Typography>{state} {derived}</Typography>
        <Divider />
        <Button startIcon={<AddIcon />}>Add</Button>
        <Button startIcon={<EditIcon />}>{children}</Button>
        
        
        <Box6>emotion</Box6>
      </Stack>
    </Paper>
  );
}
export default Shared6;
