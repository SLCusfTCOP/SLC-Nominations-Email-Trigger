// **IMPORTANT: PLEASE READ**
// Hello, current SLC Vice President or Elections & Constitution Committee member! My name is Yasmine, and I wrote the original code for this email trigger (with a little help from my friend Cardin at Georgia Tech).
// I've designed this code to be as straightforward as possible, so you won't need to edit anything beyond the specified areas.

// **Editable Sections:**
// - Only edit the red text starting from line 26 to 30.
// - You will be updating predefined variables to reflect the current year, date, and names as needed.
// - All other parts of the code should remain unchanged. Comments are included to guide you on what to input.
// - Comments are grey text that start with //

// **Important Notes:**
// - Do not modify the templates; they should only be copied for use.
// - If the original code on the template is accidentally altered (please avoid this), a backup copy is available on GitHub: https://github.com/SLCusfTCOP/SLC-Nominations-Email-Trigger/blob/main/main.js
// - For additional guidance, refer to the linked YouTube tutorial: REDACTED.

// Thank you, and good luck! If you follow these instructions carefully, everything should work smoothly. Have fun!


function onFormSubmit(event) {
// NAMES OF QUESTIONS
  const Question1 = 'First and last name of the nominee'; // should you choose to change the names of the questions then you MUST change them here as well
  const Question2 = 'Position for nomination'; // should you choose to change the names of the questions then you MUST change them here as well
  const Question3 = 'Please provide the USF email address of the nominee (please ensure correct spelling as these nominees will receive an email of their nomination with the provided information)'; // should you choose to change the names of the questions then you MUST change them here as well

// CHANGE VARIABLES
  const emailSubject = 'Class of 202X' // change the text in the quotations to the cohort year
  const DATEANDTIME = 'March 19th @ 11:59pm' // change the text in the quotations to the time that the candidate statements are due
  const YOURNAME = 'YOUR NAME HERE' // change the text in the quotations to your name
  const YOURPOSITION = 'YOUR POSITION HERE' // change the text in the quotations to your position
  const LINKTOFORM = 'https://google.com' // change the text in the quotations to the candidate statement link


// IGNORE ALL CODE BELOW
  const formResponse = event.response;
  const itemResponses = formResponse.getItemResponses();
  // STORED ANSWERS
  let name ='';
  let checkboxes = [];
  let email = '';

  for (let j = 0; j < itemResponses.length; j++) {
    const itemResponse = itemResponses[j];
    const questionTitle = itemResponse.getItem().getTitle();
    const answer = itemResponse.getResponse();

    if (questionTitle === Question1) {
        name = answer;
      } else if (questionTitle === Question2) {
        checkboxes = answer;
      } else if (questionTitle === Question3) {
        email = answer;
      }
      
  }

  const htmlBody = `<html>
  <head>
  <script>
  </script>
  </head>
  <body>
    <p>Congrulations <b>${name}</b>! You have been nominated for <u>${checkboxes.join(', ')}</u>!</p>
    <p>
      To accept your nomination, please follow this link to submit your
      candidate statement:
      <a href="${LINKTOFORM}">link</a>
    </p>
    <p>
      You can only run for <b>one position</b>. Candidate statements are due by
      <b>${DATEANDTIME}</b>. If you have any questions, please reach out to me.
    </p>
    <p>
      Best, <br />
      ${YOURNAME} <br />
      ${YOURPOSITION}
    </p>
      
  </body>
</html>`

  MailApp.sendEmail({
    to: email,
    subject: emailSubject,
    htmlBody: htmlBody
  })

}
