# data-date-challenge
Data date challenge was a challenge held by Part Software Group in Mashhad. This challenge was about working with databases (you can make it on your own) and search algorithms (it's up to you which one is the best) and sort algorithms (like a search algorithm). After you found some records by applying search and sort algorithms you must use the pagination algorithm to send correct and expected results to users based on their inputs. First of all, the user sends input in JSON format and it includes one array of tags, sortIndex, pageSize, Pageindex and you must use your function and write an API service that found records with array tags and sort them by keys that are in a position sortIndex. after that you must applying pagination algorithms on the records you found in the previous phase based on PageSize and return pageIndex to the user. user input is like this:
* Tags: ['enc_base64, active] 
* SortIndex : 2 
* PageSize : 10 
* PageIndex : 3


# how to use
you should use postman and run index.js file and send request to http://localhost/search
