# GitHub-Portfolio-Generator
Profile generator that prompts user to input GitHub  username and pick a color template from the options it prompts. When done it will create a new PDF file in the folder location.

**How To Use:**

    1. Clone repository
    2. Run your terminal/CMD with the path set for cloned repository folder
    3. In the terminal, run the command: npm install (a new folder should appear in the repo named node_modules)
    4. Next, run the command: node index.js
    5. A prompt should appear asking to choose a color template from the list
    6. Another prompt will appear asking for your GitHub username
    7. Wait a few seconds and when its done you will see the PDF in the repo folder

___________________________________________________________________________________________________________________________________


You can see the instructions here via GIF: https://github.com/Anil1992-rgb/Portfolio-Generator/blob/master/Instructions-GIF.gif

___________________________________________________________________________________________________________________________________


**The PDF displays the GitHub users:**

- profile image
- name
- current company
- location
- link to github profile
- link to blog
- Bio
- number of followers
- number following
- public repos
- GitHub Stars

___________________________________________________________________________________________________________________________________

**Node Modules being used:**

- inquirer - (used to ask questions and obtain data)

- Axios - (used for makinging API calls, Github api specifically)

- Electron version 1.8.8 & Electron-html-to version 2.6.0 - (used for PDF conversion)

- Pre-made node.js modules
