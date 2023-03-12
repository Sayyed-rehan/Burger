import React from "react";
import { Box, Divider, TextField, Typography } from "@mui/material";
import "./Table.css";
import japan from "../../images/breakfast.jpg";

const Table = () => {
  return (
    <div>
      <div className="table-container">
        <div className="table-header">
          <Typography variant="h4">RESERVE A FAMILY TABLE</Typography>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
            alt="dish"
          />
        </div>
        <Divider variant="fullWidth" />

        <div className="table-form">
          <Box boxShadow={12} borderRadius="20px">
            <img src={japan} alt="japan" />
          </Box>

          <div className="table-form1">
            <TextField
              label="First Name"
              placeholder="Enter your name"
              fullWidth
              size="small"
            />
            <TextField
              label="Email"
              placeholder="Enter your email"
              fullWidth
              size="small"
            />
            <TextField
              label="Phone Number"
              placeholder="Enter your phone number"
              fullWidth
              size="small"
              type={"phone"}
            />
            <TextField
              label="Date and Time"
              placeholder="Enter your name"
              fullWidth
              size="small"
            />
            <TextField
              label="Number of people"
              placeholder="Enter your name"
              fullWidth
              size="small"
            />
            <TextField
              label="Message"
              id="outlined-multiline-static"
              placeholder="Enter your message"
              multiline
              row={4}
              fullWidth
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
