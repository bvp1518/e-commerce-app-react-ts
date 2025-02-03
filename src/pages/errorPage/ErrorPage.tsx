import "./ErrorPage.css";
import { NavLink, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import { RouteError } from "../../types/ErrorInterface";

export const ErrorPage = () => {
  const error = useRouteError() as RouteError;

  return (
    <div className="errorPage_main">
      <motion.img
        src="https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif"
        alt="404"
        className="rounded-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="error_message"
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg font-bold text-red-900"
        >
          {error.statusText || error.message || "An unknown error occurred"}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <NavLink to="/">
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
          >
            Go Home
          </motion.button>
        </NavLink>
      </motion.div>
    </div>
  );
};
