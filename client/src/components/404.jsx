
export default function NotFound() {
    return (
        <div id="error-container">
        <div className="container">
            <h1 className="error-code">404</h1>
            <p className="message">Oops! Page not found.</p>
            <div className="image-container">
                <img src="https://live.staticflickr.com/8008/7392240584_0af497b408_b.jpg" alt="404 Error Image" />
            </div>
        </div>
    </div>
)
}