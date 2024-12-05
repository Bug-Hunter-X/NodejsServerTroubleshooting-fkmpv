# Node.js Server Issue

This repository demonstrates a common issue encountered when developing Node.js HTTP servers: the server starts without errors, but fails to properly respond to incoming requests.  The bug and solution are provided in separate JavaScript files.

**Bug:** The provided `bug.js` file contains a simple HTTP server that should respond with 'Hello, World!' to any request.  However, it doesn't respond as expected.

**Solution:**  The `bugSolution.js` file offers a corrected version of the server, addressing the identified bug.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Attempt to access the server (e.g., using `curl http://localhost:8080`). You will likely find it unresponsive or receiving an error.
4. Run `node bugSolution.js` and repeat step 3. This time the server should respond correctly.

## Contributing

Contributions are welcome. Please open issues or pull requests to report any problems or improvements.