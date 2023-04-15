const BillsDetails = ({ bill }) => {
  return (
    <>
      <h2>Bills List:</h2>
      <div class="card" style={{ width: "23rem" }}>
        <div class="card-body">
          <h5 class="card-title mb-2">Name: {bill.country}</h5>
          <h6 class="card-subtitle mb-1 ">
            <strong>First Name: </strong> {bill.fname}
          </h6>
          <h6 class="card-subtitle mb-1 ">
            <strong>Last Name: </strong> {bill.lname}
          </h6>
          <p class="card-text mb-0">
            <strong>Address: </strong>
            {bill.address}
          </p>
          <p class="card-text mb-0">
            <strong>Apartment: </strong>
            {bill.apartment}
          </p>
          <p class="card-text mb-0">
            <strong>City: </strong>
            {bill.city}
          </p>
          <p class="card-text">
            <strong>Created: </strong>
            {bill.createdAt}
          </p>
          <button className="btn btn-outline-dark">Delete</button>
        </div>
      </div>
    </>
  );
};
export default BillsDetails;
