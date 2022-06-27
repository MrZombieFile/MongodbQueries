db.Restaurants.find({});
db.Restaurants.find({}, {restaurant_id:1, name:1, borough:1, cuisine: 1});
db.Restaurants.find({}, {_id: 0, restaurant_id:1, name:1, borough:1, cuisine: 1});
db.Restaurants.find({}, {_id:0, restaurant_id: 1, name: 1, borough:1, address: {zipcode:1}});
db.Restaurants.find({borough: "Bronx"});
db.Restaurants.find({borough: "Bronx"}).limit(5);
db.Restaurants.find({borough: "Bronx"}).skip(5).limit(5);
db.Restaurants.find({"grades.score":{$gt:90}});
db.Restaurants.find({"grades.score": {$gt: 80, $lt: 100}});
db.Restaurants.find({"address.coord.0": {$lt: -95.754168}});
db.Restaurants.find({$and: [{"grades.score": {$gt: 70}}, {"address.coord.0": {$lt: -65.754168}}, {"cuisine": {$not: /American/}}]});
db.Restaurants.find({"grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}, "cuisine": {$not: /American/}});

db.Restaurants.find({name: /^Wil/}, {_id:0, restaurant_id: 1, name:1, borough: 1, cuisine: 1});
db.Restaurants.find({name: /ces$/}, {_id:0, restaurant_id: 1, name:1, borough: 1, cuisine: 1});
db.Restaurants.find({name: /Reg/}, {_id:0, restaurant_id: 1, name:1, borough: 1, cuisine: 1});
db.Restaurants.find({borough: "Bronx", $or:[{ "cuisine": "Chinese"}, {"cuisine": "American"}]});
db.Restaurants.find({$or: [{"borough": "Brooklyn"} , {"borough": "Staten Island"}, {"borough": "Queens" } ,{"borough": "Bronx"}]},{_id:0, restaurant_id: 1, name:1, borough: 1, cuisine: 1});
db.Restaurants.find({$nor: [{"borough": "Brooklyn"} , {"borough": "Staten Island"}, {"borough": "Queens" } ,{"borough": "Bronx"}]},{_id:0, restaurant_id: 1, name:1, borough: 1, cuisine: 1});
db.Restaurants.find({"grades.score": {$not: {$gt: 10}}},{_id:0, restaurant_id: 1, name:1, borough: 1, cuisine: 1});

db.Restaurants.find({grades: {$elemMatch: {"grade":"A" , "score": 11, "date": ISODate ("2014-08-11T00:00:00Z")}}}, {_id:0, restaurant_id: 1, name:1, grades: 1});
db.Restaurants.find({$and: [{"grades.1.grade": "A"}, {"grades.1.score": 9}, {"grades.1.date": ISODate ("2014-08-11T00:00:00Z")}]}, {_id:0, restaurant_id: 1, name:1, grades: 1});
db.Restaurants.find({"address.coord.1": {$gt: 42, $lte: 52}}, {_id:0, restaurant_id: 1, name:1, address: 1, geo_location: "$address.coord"});
db.Restaurants.find({}).sort({name:1});
db.Restaurants.find({}).sort({name:-1});
db.Restaurants.find({}).sort({cuisine:1, borough:-1});
db.Restaurants.find({"address.street": {$exists: true, $eq: null}});
db.Restaurants.find({"address.coord": {$type: "double"}});

db.Restaurants.find({name: /mon/}, {_id:0, name:1, borough: 1, "address.coord": 1, cuisine:1});
db.Restaurants.find({name: /^Mad/}, {_id:0, name:1, borough: 1, "address.coord": 1, cuisine:1});
