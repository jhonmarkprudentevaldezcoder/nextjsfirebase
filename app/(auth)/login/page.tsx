import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div className="items-center justify-items-center align-middle min-h-screen">
        <div className="md:w-2/5 p-5 bg-gray-50 items-center justify-items-center align-middle min-h-screen">
          <div className="flex flex-col items-center p-5">
            <span className="p-2">
              <Image
                src={"/images/iconlogo.png"}
                width={100}
                height={100}
                alt="logo"
              />
            </span>
            <p>Login to Your Account</p>
          </div>
          <div className="flex flex-col">
            <div className="input-container">
              <label htmlFor="email" className="label">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                placeholder="username"
                required
                className="input"
              />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                className="input"
              />
            </div>

            <button className="p-2 mt-2 rounded-md bg-emerald-500 text-white font-sans font-medium">
              LOGIN
            </button>
            <Link
              href={"/register"}
              className="p-2 my-2 w-full text-center  rounded-md bg-gray-700 border text-white border-gray-400  font-sans font-medium"
            >
              REGISTER
            </Link>
          </div>

          <span className="items-center flex flex-col ">
            <p className="text-gray-500">or</p>

            <div className="flex flex-row gap-6 p-3">
              <span>
                <Image
                  src={"/images/facebook.png"}
                  alt="facebook"
                  width={35}
                  height={35}
                />
              </span>
              <span>
                <Image
                  src={"/images/github.png"}
                  alt="facebook"
                  width={35}
                  height={35}
                />
              </span>
              <span>
                <Image
                  src={"/images/email.png"}
                  alt="facebook"
                  width={35}
                  height={35}
                />
              </span>
            </div>
          </span>
        </div>
        <div className="hidden">right</div>
      </div>
    </div>
  );
}
