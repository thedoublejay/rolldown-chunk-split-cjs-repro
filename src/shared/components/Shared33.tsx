
import { Button, Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";


import clsx from "clsx";
import { useForm } from "react-hook-form";
import { tokens } from "../styles/tokens";
import { useShared14 } from "../hooks/use-shared-14";

const Box33 = styled.div` color: ${tokens.colors.text}; padding: 8px; `;

export function Shared33({ label, children }) {
  const { state, derived } = useShared14(label);
  const { register } = useForm();
  const cls = clsx("shared-33", { active: state });
  return (
    <Paper className={cls}>
      <Stack>
        <Typography>{state} {derived}</Typography>
        <Divider />
        <Button startIcon={<AddIcon />}>Add</Button>
        <Button startIcon={<EditIcon />}>{children}</Button>
        
        
        <Box33>emotion</Box33>
      </Stack>
    </Paper>
  );
}
export default Shared33;
