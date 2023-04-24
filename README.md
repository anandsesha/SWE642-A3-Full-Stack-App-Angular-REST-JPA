-------------------------------------------
# SWE642-A3-Full-Stack-App-Angular-REST-JPA
-------------------------------------------
- The application starts with a welcome homepage, which in essence has two links: Student Survey and List All Surveys. 
- The Student Survey link allows a prospective student to fill out a survey form with an acknowledgement. 
- When the user clicks the submit button, the angular application should invoke a RESTful call which in turn uses JDBC or JPA to store the data in the data base. 
- List All Surveys link allows a user to view all surveys done to date.



-------------------------------------------------------------------------------------
# SWE642-A2-JS-Cookie-AJAX-Bootstrap
-------------------------------------------------------------------------------------

In HW Assignment 2, Enhancing Assignment 1, we have added:
1. Navigation bar
2. Cookie and Greetings implementation
3. Survey form validation (using event handling) 
4. Added new 'data' field added.
5. Use Ajax and JSON to implement a portion of the Student Survey Form to provide a better user experience in filling out the survey form. 

Please check out my HW-assignment-2 below hosted on AWS S3 bucket:

http://swe-642-assignment-2.s3-website.us-east-2.amazonaws.com





------------------------------------------------------------------------------------
Assignment 1 Contains:
------------------------------------------------------------------------------------
This assignment contains:
1) A index.html page - Has my personal Introduction page with a picture and breif description about myself. A student class Webpage. 
2) A department.html - A CS Department Information page. With two paragraphs, a MS degrees List and the required courses as per each degree table. It also links to the student survey form page. You can find the button link on top at the header section of this page.
3) A survey-form.html - It has a student survey form made keeping in mind all the requirements mentioned on the assignemnt question.
Facility given to navigate from any of the 3 pages to the others. 

4) An assets folder - which contains images, files and the external stylesheets used for this assignment.
5) bootstrap.min.css and bootstrap.min.js files
6) A readme.md file



Please check out my HW-assignment-1 below hosted on AWS S3 bucket: 

http://anand-swe-642-assignment-1.s3-website-us-east-1.amazonaws.com/

You can view my homework assignment 1 using above is the link. All 3 pages (Introduction, CS Department Info and Survey Pages) along with their CSS files and other media are uploaded to the AWS S3 bucket.

Steps followed to host on AWS S3:
1) Created an AWS free tier account and created a S3 bucket. Unchecked the disable public access while doing so.
2) Under properties - enable static website hosting and save changes
3) under permissions - enable public access and add bucket policy wherein added bucketname under Resource (from the tutorial given)
4) Uploaded all files mentioned above to the bucket created
Tested the above link and is working.

------------------------------------------------------------------------------------