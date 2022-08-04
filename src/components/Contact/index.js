import { useState } from "react";
import styles from "./Contact.module.css";
import person from "./person.svg";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const nameHandler = (event) => {
		setFormData((prevState) => {
			return { ...prevState, name: event.target.value };
		});
	};

	const emailHandler = (event) => {
		setFormData((prevState) => {
			return { ...prevState, email: event.target.value };
		});
	};

	const messageHandler = (event) => {
		setFormData((prevState) => {
			return { ...prevState, message: event.target.value };
		});
	};

	const submitHandler = (event) => {
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<>
			<section
				id="contact"
				className="w-full flex flex-col items-center justify-center pt-10 pb-10"
			>
				<header className={styles.header}>
					<h3>Contact Me</h3>
					<h1 className="font-sans text-5xl p-0.5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
						Need to reach me?
					</h1>
				</header>
				<div className="flex bg-gradient-to-r from-purple-500 to-cyan-500 w-full rounded-2xl p-8">
					<div></div>
					<main className={styles["form-container"]}>
						<form action="https://formspree.io/f/xknyybrw" method="POST">
							<label>
								<p className="text-sm font-medium block dark:text-gray-300">
									Full Name
								</p>
								<div className="mt-2 relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<img
											src={person}
											className="w-5 h-5 text-gray-500 dark:text-gray-400"
											alt="person icon"
											fill="currentColor"
										/>
									</div>
									<input
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 mb-3"
										type="text"
										name="full-name"
										value={formData.name}
										placeholder="John Smith"
										onChange={nameHandler}
										required
									/>
								</div>
							</label>
							<label>
								<p className="text-sm font-medium block dark:text-gray-300">
									Email Address
								</p>
								<div className="mt-1 relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<svg
											className="w-5 h-5 text-gray-500 dark:text-gray-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
										</svg>
									</div>
									<input
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 mb-3"
										type="email"
										name="email-address"
										value={formData.email}
										placeholder="name@example.com"
										onChange={emailHandler}
										required
									/>
								</div>
							</label>
							<label>
								<p className="text-sm font-medium block mb-1 dark:text-gray-300">
									Message
								</p>

								<textarea
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 p-2.5 mb-6"
									name="message"
									value={formData.message}
									placeholder="Leave a message..."
									onChange={messageHandler}
									required
								></textarea>
							</label>
							<button
								className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 w-full"
								type="submit"
								onSubmit={submitHandler}
							>
								Send
							</button>
						</form>
					</main>
				</div>
			</section>
		</>
	);
}
