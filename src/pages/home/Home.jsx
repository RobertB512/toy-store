import React from "react";

import Header from "../../components/home/header/Header";
import ExtraInfo from "../../components/home/extraInfo/ExtraInfo";

export default function Home() {
	return (
		<>
			<Header />
			<section>
				<ExtraInfo heading={"Mission"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem enim id ipsa possimus deleniti sed reiciendis velit porro debitis illum perspiciatis qui, aut ea libero architecto eligendi delectus aliquid quos ex. Dolorum, aut incidunt."} />
				<ExtraInfo heading={"Why us?"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa molestiae et enim quibusdam a soluta accusamus, cupiditate, laboriosam vel ex repellendus deleniti neque eum ipsam voluptas dicta sit esse quaerat facilis. Veniam, iure cupiditate."} />
        
			</section>
		</>
	);
}
