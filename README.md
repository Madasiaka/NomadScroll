# NomadScroll
The social app for the social traveler - NomadScroll. This is a fullstack application with authentication so you can log in securly and track your hostel stays, recommend them to your friends, and easily remember where you've stayed. Hostels are fun, social places - but also some of them are terrible, and reviews from people you don't know aren't always useful. Free up the space on your google maps pins and use NomadScroll to save hostels instead. 

**Live site:** https://nomadscroll.herokuapp.com/

![alt tag](https://user-images.githubusercontent.com/99517890/192553735-93b5f329-40b1-43fd-aa19-33b26276b6c0.png)


## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, Tailwinds, MongoDB

This app uses passport for user authentication strategies and is styled with a mix of Tailwinds and plain CSS. Data is stored using MongoDB via Mongoose while user supplied images are stored using Cloudinary.

## Optimizations

I will continue to work on optimizing the site for mobile users as well as adding additional features such as adding functionality to allow the user to link directly to a friend's page, adding share buttons, and finalize connecting to the MapQuest API in order to plot out hostels on a user specific and feed specific Map.

## Lessons Learned:

This project was my first time using Tailwinds, which was a fun challenge. Reading the docs was an hourly experience as I worked through how the tags actually work. However, it was a rewarding endeavor and I percieve myself using it more in the future.

---
# To run your own copy
---
# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 8000 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
