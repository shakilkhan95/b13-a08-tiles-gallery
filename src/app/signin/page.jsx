import Link from "next/link";


const SignInPage = () => {
    return (
        <div className="p-28">
            go to sign up Page <Link href={"/signup"}>Sign Up</Link>
        </div>
    );
};

export default SignInPage;