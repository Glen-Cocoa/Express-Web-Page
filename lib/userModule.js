var users = {
  all: function() {
    return [{
       "id": 1,
       "name": "Jonathan Morris",
       "phone": "(621) 559 5488",
       "dob": "12/01/1996",
       "email": "jonathan96@example.com",
       "gender": "Male"
    },
    {
       "id": 2,
       "name": "Joe Hayes",
       "phone": "(382) 660 9027",
       "dob": "15/12/1994",
       "email": "joehayes@example.com",
       "gender": "Male"
    },
    {
       "id": 3,
       "name": "Sue Hayes",
       "phone": "(382) 660 9028",
       "dob": "15/12/1993",
       "email": "suehayes@example.com",
       "gender": "Female"
    },
    {
       "id": 4,
       "name": "Frances Silva",
       "phone": "(257) 449 6403",
       "dob": "29/11/1981",
       "email": "frances@example.com",
       "gender": "Female"
    }]
  }, 

  getUserbyID: function(id){
    var user_list = users.all();
    for(i=0; i<user_list.length; i++){
      if(user_list[i].id == id){
      return user_list[i]
        }
      }
    }
 };

module.exports = users;