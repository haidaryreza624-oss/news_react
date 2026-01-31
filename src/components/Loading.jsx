
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card border-0" style={{ width: "18rem", textAlign: "center", padding: "2rem" }}>
        <div className="d-flex flex-column align-items-center">
          {/* Bootstrap Spinner */}
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          {/* Loading Text */}
          <p className="mb-0">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;