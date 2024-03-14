# oauth-test

Sample Github OAuth Authentication

1. Register new application from Github OAuth Apps: **https://github.com/settings/applications/new**

2. Fill Application Homepage URL: **http://localhost:2400/**
   Fill Application callback URL: **http://localhost:2400/github/callback**

3. Run ```npm install``` to install required packages

4. Fill in the **clientID** and **clientSecret** with the corrosponding values from GitHub OAuth Apps.

5. Run ```node index.js``` to run the server and open the page at **http://localhost:2400**
