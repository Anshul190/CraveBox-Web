const Login = () => {
    return (
      <div className="login-container flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 dark:text-gray-200">Welcome Back</h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Log in to access your account and start ordering your favorite meals!
          </p>
  
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 dark:text-blue-500 bg-gray-100 dark:bg-gray-800 rounded border-gray-300 dark:border-gray-700"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
                Forgot Password?
              </a>
            </div>
  
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
            >
              Log In
            </button>
          </form>
  
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;