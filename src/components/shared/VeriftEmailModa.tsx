export const VerifyEmailModal = () => {
  return (
    <div className="fixed top-36 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto w-full shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Verify Your Email
        </h2>
        <div className="bg-green-400 border border-green-400 text-white px-4 py-3 rounded mb-4">
          <span className="text-base font-semibold">Please verify your email address to continue.</span>
        </div>
        <h2 className="text-[#212529] text-base font-bold mb-4">Instructions:</h2>
        <p className="text-danger mb-6 text-base">
          Your email address is not verified. Kindly click on the link below to
          get a verification link sent to your email. Afterwards, visit your
          email address and click on the link to verify your email.
        </p>
        <button className="w-fit bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
          Send Verification Link
        </button>
      </div>
    </div>
  );
};
