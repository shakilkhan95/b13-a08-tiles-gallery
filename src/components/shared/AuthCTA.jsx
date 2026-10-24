import Link from "next/link";



const AuthCTA = () => {
  const isLoggedIn = false;
    return (
      <div>
        {isLoggedIn ? (
          <Link href="/signin">
            <button
              type="button"
              size="sm"
              className="px-4 py-2 tracking-tight bg-(--color-glaze) text-(--color-porcelain) rounded-md cursor-pointer"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link href="/signin">
            <button
              type="button"
              size="sm"
              className="px-4 py-2 tracking-tight bg-(--color-glaze) text-(--color-porcelain) rounded-md cursor-pointer"
            >
              Sign In
            </button>
          </Link>
        )}
      </div>
    );
};

export default AuthCTA;