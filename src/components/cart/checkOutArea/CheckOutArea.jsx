import React, { useState, useContext, useRef } from "react";

import FormDetails from "../../../Validations/CheckoutValidation";
import { CartItems } from "../../../App";

import "./checkOutArea.css";

export default function CheckOutArea() {
	const [cartItems, setCartItems] = useContext(CartItems);
	const [errorInForm, setErrorInForm] = useState(false);
	const [purchaseComplete, setPurchaseComplete] = useState(false);

	const nameEntry = useRef();
	const emailEntry = useRef();
	const streetAddrEntry = useRef();
	const cityEntry = useRef();
	const zipEntry = useRef();
	const cardNumberEntry = useRef();
	const expDateEntry = useRef();
	const cvvEntry = useRef();

	const checkOut = async e => {
		e.preventDefault();
		const paymentDetails = {
			name: e.target[0].value,
			email: e.target[1].value,
			streetAddr: e.target[2].value,
			city: e.target[3].value,
			zip: e.target[5].value,
			cardNumber: e.target[6].value,
			expDate: e.target[7].value,
			cvv: e.target[8].value,
		};
		const isValid = await FormDetails.isValid(paymentDetails);
		if (cartItems.length > 0 && isValid) {
			setCartItems([]);
			setPurchaseComplete(true);
			setErrorInForm(false);

      nameEntry.current.value = ""
      emailEntry.current.value = ""
      streetAddrEntry.current.value = ""
      cityEntry.current.value = ""
      zipEntry.current.value = ""
      cardNumberEntry.current.value = ""
      expDateEntry.current.value = ""
      cvvEntry.current.value = ""
      

			console.log(e);

			console.log("success");
		} else if (cartItems.length > 0 && !isValid) {
			setErrorInForm(true);
			console.log("error in form");
		}
	};
	return (
		<section>
			<h3>Check out</h3>
			<form action="" onSubmit={checkOut}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						ref={nameEntry}
						id="name"
						type="text"
						name="name"
						placeholder="Name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						ref={emailEntry}
						id="email"
						type="text"
						name="email"
						placeholder="Email"
					/>
				</div>
				<div className="address-inputs">
					<div className="form-group">
						<label htmlFor="street-addr">Street address</label>
						<input
							ref={streetAddrEntry}
							id="street-addr"
							type="text"
							name="street-addr"
							placeholder="Street address"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="city">City</label>
						<input
							ref={cityEntry}
							id="city"
							type="text"
							name="city"
							placeholder="City"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="state">State</label>
						<select id="state" name="state">
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
							<option value="AS">American Samoa</option>
							<option value="GU">Guam</option>
							<option value="MP">Northern Mariana Islands</option>
							<option value="PR">Puerto Rico</option>
							<option value="UM">United States Minor Outlying Islands</option>
							<option value="VI">Virgin Islands</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="zip">Zip</label>
						<input
							ref={zipEntry}
							id="zip"
							type="text"
							name="zip"
							placeholder="Zip"
						/>
					</div>
				</div>
				<div className="credit-card-inputs">
					<div className="form-group">
						<label htmlFor="card-number">Card number</label>
						<input
							ref={cardNumberEntry}
							id="card-number"
							type="text"
							name="card-number"
							placeholder="Card number"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exp-date">Exp date</label>
						<input
							ref={expDateEntry}
							id="exp-date"
							type="text"
							name="exp-date"
							placeholder="MM/YYYY"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="cvv">CVV</label>
						<input
							ref={cvvEntry}
							id="cvv"
							type="text"
							name="cvv"
							placeholder="CVV"
						/>
					</div>
				</div>

				<p className="checkout-total">
					$
					{cartItems
						.filter(cartItem => cartItem.toyPrice)
						.reduce((total, current) => total + current.toyPrice, 0)}
				</p>
				<button className="checkout-btn">Buy items</button>
				{purchaseComplete && (
					<p className="thank-you-msg">Thank you for shopping with us!</p>
				)}
				{errorInForm ? (
					<p className="form-error-msg">
						One or more fields were filled out incorrectly.
					</p>
				) : null}
			</form>
		</section>
	);
}
