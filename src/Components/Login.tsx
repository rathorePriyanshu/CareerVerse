const Login = () => {
  return (
    <div className="flex flex-row gap-2">
      <button className="flex items-center bg-buttonSecondary rounded-lg gap-2 border border-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-buttonPrimary">
        Login
      </button>
      <button className="flex items-center bg-buttonSecondary rounded-lg gap-2 border border-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-buttonPrimary">
        Signup
      </button>
    </div>
  );
};

export default Login;
