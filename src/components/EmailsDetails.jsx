const EmailDetails = ({ email }) => {
  return (
    <>
      <div class="card" style={{ width: "23rem" }}>
        <div class="card-body">
          <h5 class="card-title mb-2">Email: {email.email}</h5>
          <button className="btn btn-outline-dark">Delete</button>
        </div>
      </div>
    </>
  );
};

export default EmailDetails;
