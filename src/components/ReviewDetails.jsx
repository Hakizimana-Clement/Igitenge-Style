const AdminDetails = ({ review }) => {
  return (
    <>
      <h2>Review List:</h2>
      <div class="card" style={{ width: "23rem" }}>
        <div class="card-body">
          <h5 class="card-title mb-2">Name: {review.name}</h5>
          <h6 class="card-subtitle mb-1 ">
            <strong>Rating: </strong> {review.rating}
          </h6>
          <p class="card-text mb-1">
            <strong>Comment: </strong>
            {review.comment}
          </p>
          <p class="card-text">
            <strong>Created: </strong>
            {review.createdAt}
          </p>
          <button className="btn btn-outline-dark">Delete</button>
        </div>
      </div>
    </>
  );
};

export default AdminDetails;
