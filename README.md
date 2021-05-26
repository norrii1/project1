# <Project 1: SongSlang>
## Description
- Our motivation to build this app was due to our group's similar interests in music. 
  While pondering about what we can develop for an app, we eventually became very interested.
- We built this project to showcase our abilities of teamwork, organization, and to demonstrate our proficiency of using JavaScript, HTML, and CSS in VSCode. 
- The SongSlang app is the solution to users who want primary information from a song which are usually the following: 
  1. an image relating to his/ her search
  2. following with the appropriate lyrics
  3. However, there are times when people are unaware what a certain definition of a word within those lyrics. <br>
  Hence, SongSlang offers functionality that provides the definition (connotation and denotation) of the searched word.
- During this project everyone in the group learned:
  1. To utilize as much outside resources to refer to
  2. How to work as a group especially when it comes to using GitHub
  3. That there are always gonna be a reason to debug issues; that is hard to create perfect code from the start.
  4. Staying organized is very important to eliminate any ambiguity
  5. Creating a project together is difficult due to sharing of a repository in Github 
    - Though we do understand the principles of why it is so importnat to do so

## Table of Contents 
- [Credits](#Credits)
- [License](#license)
- [Features](#Features)

## Credits
- Michael Schwarf
- Alex Noriega
- Sle Ahn

- Third-party assets
 1. Lyrics.ovh: the database used to access the lyrics.
 2. Urban Dictionary: used to access slang term definitions.
 3. Merriam Webster: used to access dictionary definitions.
 4. TheAudioDB: used to access artist images.
 5. Freelogodesign for logo creation
 6. Lofi hip hop radio: for the lofigirl pic we used for our index.html
 7. Materialize: provide the library for all the CSS we used in SongSlang

## License
- This is all free and open source; hence, we'd like to keep it that way.
- Anything used from this project must be referenced to and can only be used for educational purposes.

## Features
- media responsivness
- Home Page
  1. Navbar with:
    - Home page navigation
    - Definitions page navigation
    - About Us page navigation
    - Contents drop down:
      1. Search
      2. Lyrics
      3. Definition
  2. Side Navbar (hidden for large devices and above)
    - its intention is to show up only when media devices are medium and smaller
    - features: everything that the Navbar has but without the "contents drop down" while keeping its contents
  3. Search forms for a song title and song artist with a search button
  4. A Lyrics content that is displayed after what has been submitted in the forms
    - will have the appropriate lyrics
    - will have the appropriate image
    - once generated will have an optional search form to input any words to define
  5. Definitions Content which will have the definitions from any "word" that been searched. 
    - These definitions will be provided by Merriam-Webster and Urban Dictionary
- Definitions Page
  1. Search form
  2. The Results from Merriam Webster and from Urban Dictionary
  3. Buttons to go to previous definition and to the next definition
- About Us Page
  1. Title: About SongSlang
  2. Section: What is SongSlang?
    - description of what SongSlang is
    - provide databases of where we obtained our information
  3. Section: About the Team
    - description of the Team
    - Team Cards that has the following:
      - an image of the person
      - his/ her name
      - a brief description of him/her
      - a link for his/her LinkedIn