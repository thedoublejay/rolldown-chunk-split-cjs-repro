
import { Button, Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { tokens } from "../styles/tokens";
import { useShared5 } from "../hooks/use-shared-5";

const Box24 = styled.div` color: ${tokens.colors.text}; padding: 8px; `;

export function Shared24({ label, children }) {
  const { state, derived } = useShared5(label);
  const { register } = useForm();
  const cls = clsx("shared-24", { active: state });
  return (
    <Paper className={cls}>
      <Stack>
        <Typography>{state} {derived}</Typography>
        <Divider />
        <Button startIcon={<AddIcon />}>Add</Button>
        <Button startIcon={<EditIcon />}>{children}</Button>
        <DataGrid rows={[]} columns={[]} autoHeight />
        
        <Box24>emotion</Box24>
      </Stack>
    </Paper>
  );
}
export default Shared24;
