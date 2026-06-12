import LoginLeftSide from "./LoginLeftSide";

const AdminLoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
      <div
        className="
          relative
          overflow-hidden
          bg-white
          rounded-[30px]
          shadow-[0_5px_15px_rgba(0,0,0,0.35)]
          w-[768px]
          max-w-full
          h-[500px]
          flex
          
        "
      >
        {/* Left Side */}
        <div className="w-1/2 h-full bg-indigo-950 text-white flex flex-col items-center justify-center space-y-2">
          <h1 className="text-4xl font-bold tracking-wider animate-fade-in">
            Welcome Sir
          </h1>
          <p className="text-lg text-center px-4 tracking-wide leading-relaxed text-slate-300 animate-fade-in">
            Manage your employees with ease
          </p>
        </div>

        
        {/* Right Side */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
          <form className="w-full max-w-sm flex flex-col space-y-2">
            <label className="text-gray-700 font-medium">Admin Name</label>
            <input
              type="text"
              placeholder="Username"
              className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-gray-100
                text-gray-800
                placeholder:text-gray-500
                border border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />

            <label className="text-gray-700 font-medium">Admin ID</label>
            <input
              type="text"
              placeholder="Admin ID"
              className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-gray-100
                text-gray-800
                placeholder:text-gray-500
                border border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
            
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-gray-100
                text-gray-800
                placeholder:text-gray-500
                border border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />

            <button
              className="
                bg-indigo-950
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-indigo-900
                transition
                mt-4
                cursor-pointer
              "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
