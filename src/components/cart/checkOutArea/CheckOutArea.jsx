import React, { useState, useContext } from "react";

import { CartItems } from "../../../App";

export default function CheckOutArea() {
	const [cartItems, setCartItems] = useContext(CartItems);
	const [purchaseComplete, setPurchaseComplete] = useState(false);


	const checkOut = e => {
		if (cartItems.length > 0) {
			e.preventDefault();
			setCartItems([]);
			setPurchaseComplete(true);
		}
	};
	return (
		<section>
			<h3>Check out</h3>
			<form action="" onSubmit={checkOut}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Name"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="text"
						name="email"
						placeholder="Email"
						required
					/>
				</div>
				<div className="address-inputs">
					<div className="form-group">
						<label htmlFor="street-addr">Street address</label>
						<input
							id="street-addr"
							type="text"
							name="street-addr"
							placeholder="Street address"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="city">City</label>
						<input
							id="city"
							type="text"
							name="city"
							placeholder="City"
							required
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
						<input id="zip" type="text" name="zip" placeholder="Zip" required />
					</div>
				</div>
				<div className="credit-card-inputs">
					<div className="form-group">
						<label htmlFor="card-number">Card number</label>
						<input
							id="card-number"
							type="text"
							name="card-number"
							placeholder="Card number"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="cvv">CVV</label>
						<input id="cvv" type="text" name="cvv" placeholder="CVV" required />
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
			</form>
		</section>
	);
}
