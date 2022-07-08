The following app has been made for the interview trial of ArabEasy. Instead of using a mock server or normal context file for user, we are instead hitting an open source mock API for getting our data to emulate asynchronous functionality the best we can. There is a lot of things used in here that you probably wouldnt use in an ideal app like prop drilling upto the extend I displayed, but it is for the sole purpose of visiting everything I could think of in one small Project. I tried using redux the best of my knowledge, we could use the middlewares more in order to do more with the data but since it looks like more of a UI test, I didn't go too deep into it. I tried to structure the project upto some extent as well. I also introduced protected route and custom hooks into the mix.


I have used template of redux to create the react app, which gave us the app with store and all boiler plate done out of the box.
I have tried to keep all component related CSS within its local directory.
I have tried to implement as much React as I could while making this, Since i have stated this before that I am not immensely good at markup and CSS but I tried my best to meet expectations on them too.
The UI has a custom hook to check if the device is mobile or not. If it is a mobile the UI behaves differently.
Since there is no backend and we have to emulate a Logged in user, i have done a fetch request to a Mock API to get some data, which is being done on the home page. Directly opening the account page will redirect you to home page.
There is a small folder of shared components that are basically the atom sized element to be used across the app.
The sidebar is fixed on the left as per how the design looked.
there is a userSlice and userService file in features/user that is supposed to handle all async logic to setup our redux store and manipulate it, trying to emulate an app which would have said functionality available.





REMEMBER TO USE THE LOGOUT BUTTON WHEN YOU ARE DONE TO REMOVE THE USER VARIABLE FROM YOUR LOCAL STORAGE.
