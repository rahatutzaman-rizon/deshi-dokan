// pages/contact.js

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Deshi Dokan</h1>
        <p className="text-lg mb-8">
          We are located in Dhaka, Bangladesh.
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <label htmlFor="name" className="text-left block mb-2 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-400 p-2 w-80"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-left block mb-2 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-400 p-2 w-80"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-left block mb-2 font-bold">
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-400 p-2 w-80 h-40"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}