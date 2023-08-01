#!/bin/bash

# Move the package.json to package-local.json temporarily
cp package.json package-local.json

# Remove devDependencies and dependencies from package.json
node -e "const packageJson = require('./package.json'); delete packageJson.scripts; delete packageJson.dependencies; delete packageJson.devDependencies; require('fs').writeFileSync('./package.json', JSON.stringify(packageJson, null, 2))"

# Set the package name and version
PACKAGE_NAME=$(node -p -e "require('./package.json').name")
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")

echo "Publishing $PACKAGE_NAME@$PACKAGE_VERSION to npm..."

# Publish the package to GitHub Packages (with error handling)
trap 'echo "Publish failed. Continuing script execution..."' ERR
npm publish --registry=https://npm.pkg.github.com --access private --owner=@metapals

# Move the package.json back to its original local data
rm package.json
mv package-local.json package.json

# Remove the trap
trap - ERR
