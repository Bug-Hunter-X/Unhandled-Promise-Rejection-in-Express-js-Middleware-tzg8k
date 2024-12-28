const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(error => {
      // Proper error handling using next(error)
      next(error);
    });
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Example asynchronous operation
async function someAsyncOperation() {
  // Simulate an error
  //throw new Error('Something went wrong!');
  await new Promise(resolve => setTimeout(resolve,100));
}