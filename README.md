# challenge2

Build a mobile responsive 3 page app using an express.js server   Page 1 is the homepage, it has:
- A navigation bar linking you to ‘Home’, ‘About’, ‘Services’ and ‘Contact’
- a ‘hero’ section with a large background image which is full width, and centrally placed website title of your choosing
- A title + text section
- A 3-across card section where each card has a ‘service name’ and a ‘service image’ which when clicked, link you to that part of the ’Services’ page
- The Contact Us form, where users can enter their Email and a Question, clicking the ‘contact’ link in the header takes you here.

Page 2 is the About page, it has:
- A navigation bar linking you to ‘Home’, ‘About’, ‘Services’ and ‘Contact’
- a ‘hero’ section with a large background image which is full width, and centrally placed title saying “About”
- A title + text section

Page 3 is the Services page, it has:
- A navigation bar linking you to ‘Home’, ‘About’, ‘Services’ and ‘Contact’
- a ‘hero’ section with a large background image which is full width, and centrally placed title saying “Services”
- 3 sections containing a title, text and an image 

Pick a bunch of examples of these page elements from anywhere you like which fit into these place, eg:
a navigational header (and make it have a mobile responsive variant)
<img width="1512" alt="Screen Shot 2022-01-12 at 4 21 02 pm" src="https://user-images.githubusercontent.com/18094975/149068647-20704cfb-469f-46bc-85e1-fc523678b440.png">

a 'card' (and make them align correctly at all device sizes
<img width="1030" alt="Screen Shot 2022-01-12 at 4 18 03 pm" src="https://user-images.githubusercontent.com/18094975/149068386-208c8336-6681-4bed-a39e-a76ddbed314d.png">

a title + text layout (and make it work on mobile too)
<img width="1334" alt="Screen Shot 2022-01-12 at 4 16 38 pm" src="https://user-images.githubusercontent.com/18094975/149068209-86e38fc3-6757-4c07-af5b-459e2628f60e.png">

Don't overthink the design, just try to copy something which works well. make it work down to 320px browser width and up to 2000px browser width

# install steps:

On a linux shell which has `git`, `nvm`, `yarn` installed globally:

```
git clone git@github.com:richardverheyen/challenge2.git
cd challenge2
nvm install
yarn install
yarn serve
```
