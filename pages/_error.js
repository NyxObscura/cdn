function CustomError({ statusCode }) {
    return (
        <pre style={{ backgroundColor: "#1e1e1e", color: "#dcdcdc", padding: "20px", fontFamily: "monospace" }}>
            {JSON.stringify(
                {
                    status: statusCode || 404,
                    error: "File Not Found",
                    message: "The requested resource could not be found.",
                    visit: "https://obscuraworks.com"
                },
                null,
                4
            )}
        </pre>
    );
}

CustomError.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default CustomError;
