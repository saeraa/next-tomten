// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    res.status(201).json({ message: "Something was created!" });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: "John Doe" });
  }
}

// http://localhost:3000/api/hello --> { "name": "John Doe" }
