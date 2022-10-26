import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useContext, useRef } from "react";
import AuthContext from "../store/authContext";

export default function ThePasswordProtection() {
  const authCtx = useContext(AuthContext);
  const passwordRef = useRef<null | HTMLInputElement>(null);

  const checkInput = (event: any) => {
    event.preventDefault();
    const enteredPassword = passwordRef.current?.value;

    enteredPassword === "testing"
      ? authCtx?.setIsAuthorized(true)
      : authCtx?.setIsAuthorized(false);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Enter auth code to pass
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={checkInput}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="icon" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
