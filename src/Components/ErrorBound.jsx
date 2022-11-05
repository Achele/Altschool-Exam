import React from "react"
 export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  );
}