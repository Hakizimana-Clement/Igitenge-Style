// import React, { useState } from "react";

// // Material UI
// // import { Dialog } from "@mui/material";
// // import DialogContent from "@mui/material";
// // import Dialog from "@material-ui/core/Dialog";
// // import DialogContent from "@material-ui/core/DialogContent";
// // import MuiPhoneNumber
// // import MuiPhoneNumber from "material-ui-phone-number";

// import { Dialog, DialogContent } from "@mui/material";
// // const Dialog2 = ({ open, close }) => {

// function Dialog2(open, close) {
//   const [selectedValue, setSelectedValue] = useState("");
//   return (
//     <Dialog
//       style={{ zIndex: 1800 }}
//       open={open}
//       keepMounted
//       onClose={close}
//       aria-labelledby="alert-dialog-slide-title"
//       aria-describedby="alert-dialog-slide-description"
//     >
//       <div>
//         <DialogContent style={{ width: 300, height: 500 }}>
//           {/* <MuiPhoneNumber
//             name="MobileNo"
//             label="Mobile No."
//             variant="outlined"
//             fullWidth
//             defaultCountry={"vn"}
//             value={selectedValue}
//             onChange={(e) => setSelectedValue(e)}
//           /> */}
//           <h1
//             name="MobileNo"
//             label="Mobile No."
//             variant="outlined"
//             fullWidth
//             defaultCountry={"vn"}
//             value={selectedValue}
//             onChange={(e) => setSelectedValue(e)}
//           >
//             hello
//           </h1>
//         </DialogContent>
//       </div>
//     </Dialog>
//   );
// }

// export default Dialog2;

import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
const Dialog2 = ({ open, close }) => {
  const [selectedValue, setSelectedValue] = useState(false);
  return (
    <Dialog
      style={{ zIndex: 1800 }}
      open={open}
      keepMounted
      // fullScreen
      onClose={close}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <div>
        <DialogContent
        // style={{ width: 300, height: 500 }}
        >
          <input
            type="number"
            name="MobileNo"
            label="Moblile No."
            variant="outline"
            fullWidth
            value={selectedValue}
            onChange={(r) => setSelectedValue(r)}
          />
        </DialogContent>
        {/* <p>After this process there not undone about your action.</p>

          <p>Are you sure?</p>
        <DialogActions>
          <button>No</button>
          <button
            autoFocus
            onClick={(e) => setSelectedValue(e)}
            value={selectedValue}
          >
            Yes
          </button>
        </DialogActions>
         */}
        <DialogContent />
      </div>
    </Dialog>
  );
};
export default Dialog2;
