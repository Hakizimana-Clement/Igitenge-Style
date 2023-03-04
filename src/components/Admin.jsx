import React, { useEffect, useState } from "react";
const Admin = () => {
  /////////////////////////// FETCH DATA FROM BACKEND /////////////////////////////////////
  const [emails, setEmails] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch("/api/emails");
      const json = await response.json();

      if (response.ok) {
        setEmails(json);
      }
    };

    fetchEmails();
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////
  // const a = 1;
  return (
    <div className="admin">
      {/* <h1>a</h1> */}
      {/* {emails && emails.map((email) => <p key={email._id}> {email.email}</p>)} */}

      {emails && emails.map((email) => <p key={email._id}>{email.emails}</p>)}
    </div>
  );
};

export default Admin;
