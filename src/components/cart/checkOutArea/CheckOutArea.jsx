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

			nameEntry.current.value = "";
			emailEntry.current.value = "";
			streetAddrEntry.current.value = "";
			cityEntry.current.value = "";
			zipEntry.current.value = "";
			cardNumberEntry.current.value = "";
			expDateEntry.current.value = "";
			cvvEntry.current.value = "";

			console.log(e);

			console.log("success");
		} else if (cartItems.length > 0 && !isValid) {
			setErrorInForm(true);
			console.log("error in form");
		}
	};
	return (
		<section className="col col-xl-7 col-md-12 col-sm-12 text-bg-warning p-2 checkout-area">
			<h3 className="mb-2">Check out</h3>
			<form action="" onSubmit={checkOut}>
				<div className="form-floating form-group">
					<input
						className="form-control w-100 mb-1"
						ref={nameEntry}
						id="name"
						type="text"
						name="name"
						placeholder="Name"
					/>
					<label className="form-label" htmlFor="name">
						Name
					</label>
				</div>
				<div className="form-floating form-group">
					<input
						className="form-control w-100 mb-1"
						ref={emailEntry}
						id="email"
						type="text"
						name="email"
						placeholder="Email"
					/>
					<label className="form-label" htmlFor="email">
						Email
					</label>
				</div>
				<div className="address-inputs">
					<div className="form-floating form-group">
						<input
							className="form-control w-100 mb-1"
							ref={streetAddrEntry}
							id="street-addr"
							type="text"
							name="street-addr"
							placeholder="Street address"
						/>
						<label className="form-label" htmlFor="street-addr">
							Street address
						</label>
					</div>
					<div className="form-floating form-group">
						<input
							className="form-control w-100 mb-1"
							ref={cityEntry}
							id="city"
							type="text"
							name="city"
							placeholder="City"
						/>
						<label className="form-label" htmlFor="city">
							City
						</label>
					</div>
					<div className="form-floating form-group">
						<select className="form-select w-100 mb-1" id="state" name="state">
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
						<label className="form-label" htmlFor="state">
							State
						</label>
					</div>
					<div className="form-floating form-group">
						<input
							className="form-control w-100 mb-1"
							ref={zipEntry}
							id="zip"
							type="text"
							name="zip"
							placeholder="Zip"
						/>
						<label className="form-label" htmlFor="zip">
							Zip
						</label>
					</div>
				</div>
				<div className="credit-card-inputs">
					<div className="form-floating form-group">
						<input
							className="form-control w-100 mb-1"
							ref={cardNumberEntry}
							id="card-number"
							type="text"
							name="card-number"
							placeholder="Card number"
						/>
						<label className="form-label" htmlFor="card-number">
							Card number
						</label>
					</div>
					<div className="form-floating form-group">
						<input
							className="form-control w-100 mb-1"
							ref={expDateEntry}
							id="exp-date"
							type="text"
							name="exp-date"
							placeholder="MM/YYYY"
						/>
						<label className="from-label" htmlFor="exp-date">
							Exp date
						</label>
					</div>
					<div className="form-floating form-group">
						<input
							className="form-control w-100 mb-1"
							ref={cvvEntry}
							id="cvv"
							type="text"
							name="cvv"
							placeholder="CVV"
						/>
						<label className="form-label" htmlFor="cvv">
							CVV
						</label>
					</div>
				</div>

				<p className="text-bg-dark fs-2 p-1 m-0 w-100 text-center checkout-total">
					$
					{cartItems
						.filter(cartItem => cartItem.toyPrice)
						.reduce((total, current) => total + current.toyPrice, 0)}
				</p>
				<button className="btn btn-primary fs-3 p-1 border-0 w-100 checkout-btn">
					Buy items
				</button>
				{purchaseComplete && (
					<p className="fs-4 text-success thank-you-msg">
						Thank you for shopping with us!
					</p>
				)}
				{errorInForm ? (
					<p className="fs-4 text-danger form-error-msg">
						One or more fields were filled out incorrectly.
					</p>
				) : null}
			</form>
		</section>
	);
}
