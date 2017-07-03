var fs =require('fs');
//
// fs.readFile('./resourse.json','utf8',function(err,data){
//   if (err)
//       throw err;
//   var obj = JSON.parse(data);
//   console.log(obj);
// });

var obj = {
    name: "fred",
    friend :[
      'Thon',
      'Robert'
    ]
};

fs.writeFile('./saved.json',JSON.stringify(obj) ,function(err){
  if (err)
    throw err;
  console.log('Saved');
});
