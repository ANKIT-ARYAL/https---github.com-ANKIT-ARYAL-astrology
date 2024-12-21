import express from 'express';  // Use ES module import
import axios from 'axios';      // Axios for making API requests
import dotenv from 'dotenv';    // To load environment variables from a .env file

dotenv.config();  // Load the environment variables

const app = express();
const PORT = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to handle user messages
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.userMessage;  // Get the user message from the request body
  const apiKey = process.env.OPENAI_API_KEY;  // Fetch OpenAI API key from environment variables

  if (!userMessage) {
    return res.status(400).json({ error: 'User message is required' });  // If no message, return an error
  }

  try {
    // Request to the OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',  // OpenAI API URL
      {
        model: 'gpt-3.5-turbo',  // Model you are using (could be gpt-4 as well)
        messages: [{ role: 'user', content: userMessage }],  // User message
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,  // Authorization header with the API key
        },
      }
    );

    // Send the response from OpenAI API back to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });  // Handle errors gracefully
  }
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
