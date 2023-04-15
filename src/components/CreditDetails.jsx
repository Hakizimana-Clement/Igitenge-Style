const CreditDetails = ({ credit }) => {
  return (
    <>
      {/* <h2>Contacts List:</h2> */}
      <div class="card" style={{ width: "23rem" }}>
        <div class="card-body">
          <h5 class="card-title mb-2">Card number: {credit.cardNum}</h5>
          <h6 class="card-subtitle mb-1 ">
            <strong>Card Name: </strong> {credit.cardName}
          </h6>
          <p class="card-text mb-0">
            <strong>Card Expiry Date: </strong>
            {credit.cardExpirtedDate}
          </p>
          <p class="card-text mb-0">
            <strong>Card Security: </strong>
            {credit.cardSecurity}
          </p>
          <p class="card-text">
            <strong>Created: </strong>
            {credit.createdAt}
          </p>
          <button className="btn btn-outline-dark">Delete</button>
        </div>
      </div>
    </>
  );
};

export default CreditDetails;
