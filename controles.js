const controles = () => {
	$("#tomove").css({
		width: "50px",
		height: "50px",
		background: "#666",
	});

	$("#controles button:nth-child(1)").click(function (e) {
		e.preventDefault();
		const a = $("#tomove");

		const ml = parseInt(a.css("margin-left").replace("px", ""));

		a.css("margin-left", `${ml + 30}px`);
	});

	$("#controles button:nth-child(2)").click(function (e) {
		e.preventDefault();
		$("#tomove").css({ width: "25px" });
	});
	$("#controles button:nth-child(3)").click(function (e) {
		e.preventDefault();
		$("#tomove").toggle("d-none");
	});
};

export default controles;
