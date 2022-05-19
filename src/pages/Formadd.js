import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../components/Header";

export default function Formadd() {
  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={2} justifyContent="center" mt="10px">
          <Grid item width={512}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth="true"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" mt="10px">
          <Grid item width={512}>
            <FormControl sx={{ width: 500 }}>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
              >
                <MenuItem key="$" value="$">
                  $
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
