import React, { useState } from "react";
import Dialog2 from "./Dialog2";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const Dialog1 = ({ open, close }) => {
  const [openDlg2Dialog, setDialog2Open] = useState(false);
  return (
    <div>
      <Dialog2 open={openDlg2Dialog} close={() => setDialog2Open(false)} />

      <Dialog
        style={{ zIndex: 1700 }}
        open={open}
        keepMounted
        // fullScreen
        onClose={close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div>
          <DialogTitle id="dialog-title">
            <strong>N.B:</strong> This Step is for option. You can
            <Button href="#"> skip it.</Button>
          </DialogTitle>
          <DialogContent className="row dialog-content">
            <DialogContentText
              className="col-lg-6 col-md-6"
              id="dialog-description"
            >
              <img
                src="http://via.placeholder.com/300x300"
                alt="placeholder"
                className="img-fluid"
              />
            </DialogContentText>
            <DialogContentText
              className="col-lg-6 col-md-6 dialog-content-text"
              id="dialog-description"
            >
              <p>Fill this form for according to you size:</p>
              <form>
                <div className="input-control">
                  <label>Enter Height: </label>
                  <input type="number" min={0} placeholder="0" />
                </div>

                <div className="input-control">
                  <label>Enter width: </label>
                  <input type="number" min={0} placeholder="0" />
                </div>
                <div className="input-control">
                  <label>Enter Arms size: </label>
                  <input type="number" min={0} placeholder="0" />
                </div>
                <div className="input-control">
                  <label>Enter leg size: </label>
                  <input type="number" min={0} placeholder="0" />
                </div>
                {/* <button className="btn btn-sm btn-primary">I Like It</button> */}
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setDialog2Open(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setDialog2Open(true);
              }}
            >
              Continue
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default Dialog1;
