export default function NotFound() {
  return (
    <section>
      <p className="font-mono text-accent text-sm mb-2">$ curl -I /this-page</p>
      <p className="font-mono text-sm mb-4">
        <span className="text-text">HTTP/1.1</span>{" "}
        <span className="text-accent">404</span>{" "}
        <span className="text-muted">Not Found</span>
      </p>
      <p className="font-mono text-xs text-muted leading-[1.8]">
        <span className="text-accent">Content-Type:</span> application/disappointment<br />
        <span className="text-accent">X-Error:</span> command not found: /this-page
      </p>
    </section>
  );
}
