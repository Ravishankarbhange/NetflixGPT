
const Login = () => {

    return (
      <div className="h-full text-white p-4 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/US-en-20241104-TRIFECTA-perspective_3f9119c8-336a-434d-aaaa-2deac24bc220_small.jpg')]">
        <img
          className="h-[50px] w-[150px]"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
        <div className="flex flex-col justify-center items-center mt-10">
          <div className=" bg-black opacity-80 p-10 w-[350px]">
            <h1 className="text-white mb-10 text-3xl flex justify-center">
              Sign In
            </h1>
            <input
              className="mb-5 w-[270px] px-2 py-2 rounded-sm bg-black border border-white"
              type="text"
              placeholder="Email or mobile number"
            />
            <input
              className="mb-7 w-[270px] px-2 py-2 rounded-sm bg-black border border-white"
              type="password"
              placeholder="Password"
            />

            <button className="bg-red-600 px-5 py-1.5 rounded-sm w-[270px] opacity-100">
              {" "}
              Login
            </button>

            <p className="flex justify-center py-3">OR</p>

            <button className="bg-gray-500 px-5 py-1.5 rounded-sm w-[270px] opacity-100">
              {" "}
              Use a sign-in code
            </button>

            <p className="flex justify-center py-3">Forgot Passowrd?</p>

            <p className="text-xs"> This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500 underline hover:text-blue-600" > Learn more </a></p>
          
          </div>
        </div>
      </div>
    );
};

export default Login;