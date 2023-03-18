---
title: Journey's focus
date: March 17, 2023
---
# Thinking about Journey’s first focus

I’m working on a travel planning app called [Journey](/blog/journey). I was to start by focusing on the minimum amount of stuff I can do to have something to play around with. So, what is _needed_ to plan travel?

The only item here that is truly necessary is a destination. Depending on how you like to travel all of the other parts of travel are optional. Even the destination is optional, but you likely wouldn’t be using a travel planning app if you linked to travel without a destination in mind. Let’s be a little more pragmatic. Realistically you aren’t going to plan “travel” for a trip that doesn't involve staying somewhere that isn’t your home. You don’t call a day hike “travel” even if it technically is travel.

Now, how do we translate this list of information into a data model for our app? Let’s start by thinking of what kind of data we need to store and track:

* **Destination**: you’re almost guaranteed to have at least on destination and you could have several. This could be as specific as an address and a latitude and longitude or as vague as a large area like a country.

* **Budget**: your budget might be strict, or it could be a range with some margin. The budget might even be variable and dependant on other planning factors like how many people are able to join on the trip. Currency and currency conversion will also be important factors.

* **Dates**: you could have set dates for your trip. It could have a set start but not an end date. The dates might be flexible depending on cost, or other people’s schedules

* **A place to stay:** hopefully this is at least an address with some dates tied to it

* **Transportation**: could take many forms: car, bikes, trains, planes, buses with nuances for each category like reservation numbers, stops for fueling, costs, closures, and delays. This will likely require attention for each category and maybe more detailed analysis by area.

* **Things to do**: trips often involve restaurants, museums, beaches, parks, hikes, or activities like rafting and concerts. This might involve phone numbers, reservations, and your budget.

* **Packing list**: a simple list of things you need to bring with you on your trip

A name for the trip would be nice too.

The first focus of my apps will try to solve the main problem I have when planning trips: comparing different options. You could leave one day or earlier or later, or a different time frame entirely to save money or give you time to move to a fun place or with people you love. You could stay in a hotel an extra night and save money because the flight the next day is cheaper. But its really hard to compare these options because so many different parts of the trip change and its hard to keep track and easy to miss things.

Later on, it would be nice to have the selected trip stored offline for reference and to have other people on the trip be able to collaborate on the different options for the trip, but for now, I just want to focus on a single person comparing different trip options. I will inevitably rewrite this app several times, and I want to focus on getting something working and iterating.
