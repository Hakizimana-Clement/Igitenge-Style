// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
// } from "@mui/material";

// export default function MuiDialog() {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="btn-buy btn btn-outline-success"
//       >
//         View Details
//       </button>
//       <Dialog
//         // fullScreen
//         open={open}
//         onClose={() => setOpen(false)}
//         aria-labelledby="dialog-title"
//         aria-describedby="dialog-description"
//       >
//         <DialogTitle id="dialog-title">
//           <strong>N.B:</strong> This Step is for option. You can
//           <Button href="#"> skip it.</Button>
//         </DialogTitle>
//         <DialogContent className="row dialog-content">
//           <DialogContentText
//             className="col-lg-6 col-md-6"
//             id="dialog-description"
//           >
//             <img
//               src="http://via.placeholder.com/300x300"
//               alt="placeholder"
//               className="img-fluid"
//             />
//           </DialogContentText>
//           <DialogContentText
//             className="col-lg-6 col-md-6 dialog-content-text"
//             id="dialog-description"
//           >
//             <p>Fill this form for according to you size:</p>
//             <form>
//               <div className="input-control">
//                 <label>Enter Height: </label>
//                 <input type="number" min={0} placeholder="0" />
//               </div>

//               <div className="input-control">
//                 <label>Enter width: </label>
//                 <input type="number" min={0} placeholder="0" />
//               </div>
//               <div className="input-control">
//                 <label>Enter Arms size: </label>
//                 <input type="number" min={0} placeholder="0" />
//               </div>
//               <div className="input-control">
//                 <label>Enter leg size: </label>
//                 <input type="number" min={0} placeholder="0" />
//               </div>
//               <button className="btn btn-sm btn-primary">I Like It</button>
//             </form>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button autoFocus onClick={() => setOpen(false)}></Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }

import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
import Dialog1 from "./Dialog1";
export default function FormDialog() {
  const [openDlg1Dialog, setDialog1Open] = useState(false);

  return (
    <div>
      <div>
        <Dialog1 open={openDlg1Dialog} close={() => setDialog1Open(false)} />
      </div>
      <button
        onClick={() => setDialog1Open(true)}
        className="btn-buy btn btn-outline-success"
      >
        View Details
      </button>
    </div>
  );
}
