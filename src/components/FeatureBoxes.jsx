import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
function FeatureBox() {
  <section className="feature-box  row">
    <div
      className="col-lg-4 col-md-4 feature-box1"
      // style={{ background: "#e7c30459" }}
    >
      <SearchIcon style={{ fontSize: 66 }} aria-label="MoneyExchangeIcon" />
      <h3>Smart size customize</h3>
      <p>Customize the size for the clothes you choose before sale it.</p>
    </div>
    <div
      className="col-lg-4 col-md-4 feature-box2"
      // style={{ background: "#e7c30459" }}
    >
      <GroupsIcon style={{ fontSize: 70 }} aria-label="MoneyExchangeIcon" />
      <h3>Elite Clientelei</h3>
      <p>
        We have all the Ibitenge(igitenge in plural) style, the fanasty Ibitenge
        Sytles.
      </p>
    </div>
    <div
      className="col-lg-4 col-md-4 feature-box3"
      // style={{ background: "#e7c30459" }}
    >
      <CurrencyExchangeIcon
        // fontSize="large"
        // style={{ fontSize: 50 }}
        style={{ fontSize: 44 }}
        aria-label="MoneyExchangeIcon"
      />
      <h3>Get back Money in 30 days</h3>
      <p>
        If you don't like the product you purchase with us feel free to to us.
        you can get you money back
      </p>
    </div>
  </section>;
}

export default FeatureBox;
