import { useEffect } from "react";
import { useEmailsContext } from "../hooks/useEmailsContext";
import EmailDetails from "./EmailsDetails";

const Email = () => {
  const { emails, dispatch } = useEmailsContext();
  useEffect(() => {
    const fetchEmail = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/emails`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EMAILS", payload: json });
      }
    };

    fetchEmail();
  }, [dispatch]);
  return (
    <>
      <h2>Email list</h2>
      {emails &&
        emails.map((email) => <EmailDetails key={email._id} email={email} />)}
    </>
  );
};

export default Email;
