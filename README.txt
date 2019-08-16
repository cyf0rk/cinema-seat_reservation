NOTE: To run this app you will need a local development server, live-server

This is a little development server with live reload capability. Use it for hacking your HTML/JavaScript/CSS files, but not for deploying the final site.

There are two reasons for using this:

1. AJAX requests don't work with the file:// protocol due to security restrictions, i.e. you need a server if your site fetches content through JavaScript.
2. Having the page reload automatically after changes to files can accelerate development.

You need node.js and npm. You should probably install this globally.


Npm way:

npm install -g live-server


Manual way:

git clone https://github.com/tapio/live-server
cd live-server
npm install # Local dependencies if you want to hack
npm install -g # Install globally