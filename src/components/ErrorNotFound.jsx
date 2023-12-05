/**
 * Christmas Website Project
 * @author Gurpreet Singh & Michaela 
 * @version 12-04-2023
 */
import { useRouteError } from "react-router-dom";

function ErrorNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && (error.statusText || error.message)}</i>
      </p>
    </div>
  );
}

export default ErrorNotFound