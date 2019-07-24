# Library - MongoDB Operators  
This project injects fake library DB and lets you practice querying with MongoDB.
  
## Getting started:  
- `git clone` this repo
- Use `cd` to the repo folder and run `npm install`
- Make sure MongoDB is running in the background (if you can't remember how, see the explanation at the bottom)  
- Run `npm run populate` to insert the fake data to your MongoDB.
- Open Compass and see the new data.

## Your tasks:
Filter the data according to the following criterias.
Use the official documentation:
[https://docs.mongodb.com/manual/reference/operator/query/](https://docs.mongodb.com/manual/reference/operator/query/)

1. Students with the name "Corliss Zuk" (2 documents)
2. Books with more than 1,000 pages (3 documents)
3. Books with the title "MongoDB in Action" (1 document)
4. Books with the status "PUBLISH" (331 documents)
5. Books by the author "W. Frank Ableson" (3 documents)
6. Books with less than 100 pages (161 documents)
7. Books with page count of 384 or 360 (8 documents)
8. Books with the status "MEAP" and have more than 100 pages (4 documents)
9. Books of the category "Mobile Technology" or by the author "Don Jones" (12 documents)
10. Books by 5 authors (16 documents) 

---  
  
### How to run MongoDB:  
- On Mac: just run `mongod`  
- On Windows:  
Run `cd C:\Program Files\MongoDB\Server\4.0\bin`  
Then run `mongod`