import toast from "react-hot-toast";

export const toastAlert = (msg, alert) =>
	toast[alert](msg, {
		position: "top-right",
		reverseOrder: false,
	});
