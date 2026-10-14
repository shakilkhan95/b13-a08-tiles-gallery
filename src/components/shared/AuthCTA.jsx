import Link from "next/link";



const AuthCTA = () => {
  const isLoggedIn = false;
    return (
      <div>
        {isLoggedIn ? (
          <Link href="/login">
            <button
              type="button"
              className="px-4 py-2 tracking-tight bg-(--color-glaze) text-(--color-porcelain) rounded-md cursor-pointer"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button
              type="button"
              className="px-4 py-2 tracking-tight bg-(--color-glaze) text-(--color-porcelain) rounded-md cursor-pointer"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    );
};

export default AuthCTA;