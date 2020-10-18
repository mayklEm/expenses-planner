import React, {useContext} from "react";
import * as Realm from "realm-web";
import {useRealmApp} from "../RealmApp";
import {Redirect} from "react-router";

export default function LoginScreen() {
    const app = useRealmApp();
    // Toggle between logging users in and registering new users
    const [mode, setMode] = React.useState("login");
    const toggleMode = () => {
        setMode((oldMode) => (oldMode === "login" ? "register" : "login"));
    };
    // Keep track of form input state
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // Keep track of input validation/errors
    const [error, setError] = React.useState({});
    // Whenever the mode changes, clear the form inputs
    React.useEffect(() => {
        setEmail("");
        setPassword("");
        setError({});
    }, [mode]);

    const [isLoggingIn, setIsLoggingIn] = React.useState(false);
    const handleLogin = async () => {
        setIsLoggingIn(true);
        setError((e) => ({...e, password: null}));
        try {
            await app.logIn(Realm.Credentials.emailPassword(email, password));
        } catch (err) {
            handleAuthenticationError(err, setError);
        }
    };


    if (app.currentUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div>
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Sign in
                    </h2>
                </div>
                <form className="mt-8" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true"/>
                    <div className="rounded-md shadow-sm">
                        <div>
                            <input aria-label="Email address" name="email" type="email" required
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                   placeholder="Email address"
                                   onChange={(e) => {
                                       setError((e) => ({...e, email: null}));
                                       setEmail(e.target.value);
                                   }}
                                   value={email}
                            />
                        </div>
                        <div className="-mt-px">
                            <input aria-label="Password" name="password" type="password" required
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                   placeholder="Password"
                                   onChange={(e) => {
                                       setPassword(e.target.value);
                                   }}
                                   value={password}
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                onClick={() => handleLogin()}
                        >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                        fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"/>
                    </svg>
                  </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function handleAuthenticationError(err, setError) {
    const {status, message} = parseAuthenticationError(err);
    const errorType = message || status;
    switch (errorType) {
        case "invalid username":
            setError((prevErr) => ({...prevErr, email: "Invalid email address."}));
            break;
        case "invalid username/password":
        case "invalid password":
        case "401":
            setError((err) => ({...err, password: "Incorrect password."}));
            break;
        case "name already in use":
        case "409":
            setError((err) => ({...err, email: "Email is already registered."}));
            break;
        case "password must be between 6 and 128 characters":
        case "400":
            setError((err) => ({
                ...err,
                password: "Password must be between 6 and 128 characters.",
            }));
            break;
        default:
            break;
    }
}

function parseAuthenticationError(err) {
    const parts = err.message.split(":");
    const reason = parts[parts.length - 1].trimStart();
    if (!reason) return {status: "", message: ""};
    const reasonRegex = /(?<message>.+)\s\(status (?<status>[0-9][0-9][0-9])/;
    const match = reason.match(reasonRegex);
    const {status, message} = match?.groups ?? {};
    return {status, message};
}
