# data-date-challenge
Data date challenge was challenge that was held by Part Software Group in Mashhad.
This challenge was about working with database (you can make it by your own) and search algorithms (it's up to you which one is the best) and sort algorithms (like as search algorithm).
After you found some record by applying search and sort algorithms you must use pagination algorithm to send correct and expected result to users based on their inputs.
First of all user send input in json format and it's include one array of tags, sortIndex, pageSize, Pageindex and you must use your function and write API service that found records with array tags and sort them by keys that are in a position sortIndex.
after that you must applying paginationg algorithms on the records you found in previous phase based on PageSize and return pageIndex to user.
user input is like this ex:


Tags: ['enc_base64, active]
SortIndex : 2
PageSize : 10 
pageIndex : 3

# how to use
you should use postman and run index.js file and send request to localhost/search
