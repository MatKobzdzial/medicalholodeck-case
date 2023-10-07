Project created with create-react-app with TypeScript enabled.
Majority of the components were built with Material UI components.

To view this project simply visit this site:
LINK
or install it locally using npm:
cd ../mh-case
npm install
npm start

The main task to create a way for users to accept EULA was
solved with use of Modal component included in Material UI.
When user selects a story labelled as "use case" a modal appears.
A user can either accept or decline, in addition has the ability
to view contents of EULA by clicking bolded link with an icon.

The EULA acceptance could be saved to only create popup once and
not on every request. This could be achieved with the source code
and tools like Next.js <Link /> element.

Overall site was designed to resemble the original site of Medicalholodeck.
