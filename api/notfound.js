export default function handler(req, res) {
    res.status(404).json({
        status: 404,
        error: "File Not Found",
        message: "The requested resource could not be found.",
        visit: "https://obscuraworks.com"
    });
}
