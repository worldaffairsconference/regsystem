#!/bin/bash


echo "enter desired port"
read USEPORT

if [[ $USEPORT == '' ]]; then
  USEPORT="3000"
fi

echo -e "Writing file...\c"
echo '{
  "name": "worldAffairsConference",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "react-scripts": "0.9.5"
  },
  "dependencies": {
    "bootstrap": "^4.0.0-alpha.6",
    "firebase": "^3.6.1",
    "react": "^15.6.2",
    "react-dom": "^15.6.2",
    "react-fontawesome": "^1.6.1",
    "react-router-dom": "^4.0.0-beta.8",
    "react-transition-group": "^1.2.0",
    "reactstrap": "^4.8.0"
  },
  "scripts": {
    "setup": "./shell/setup.sh",
    "start": "PORT='$USEPORT' react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}' > package.json
echo "[done]"
echo "Server will run on port ${USEPORT}"