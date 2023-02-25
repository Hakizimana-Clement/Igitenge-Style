import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export default function Checked() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* <button
        onClick={() => setOpen(true)}
        className="btn-buy btn btn-outline-success"
      >
        View Details
      </button> */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogContent className="row dialog-content">
          <DialogContentText
            className=" dialog-content-text"
            id="dialog-description"
          >
            <p>After this process there not undone about your action.</p>
            <p>Are you sure?</p>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>No</Button>
              <Button autoFocus onClick={Checked}>
                yes
              </Button>
            </DialogActions>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
