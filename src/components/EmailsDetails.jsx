import { useEmailsContext } from "../hooks/useEmailsContext";

const EmailDetails = ({ email }) => {
  const { dispatch } = useEmailsContext();
  const handleClick = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/emails/` + email._id,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CONTACT", payload: json });
    }
  };

  return (
    <>
      <div className="card mb-4" style={{ width: "23rem" }}>
        <div className="card-body">
          <h5 className="card-title mb-2">Email: {email.email}</h5>
          <p className="card-text">
            <strong>Created: </strong>
            {email.createdAt}
          </p>
          <button className="btn btn-outline-dark mt-2" onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailDetails;
