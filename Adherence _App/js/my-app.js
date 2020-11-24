// Initialize your app
var myApp = new Framework7({
    pushState: true,
    swipePanel: 'left',
    animateNavBackIcon:true
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;

// Login

$$('#signIn').on('click', function () {
    var username = $$("#username").val();    
    myApp.alert('Welcome ' + username + ' to MedPill', function() {
      myApp.closeModal();
    });
});

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

$$('#clickMe').on('click', function () {
  myApp.modal({
    title:  'Medication Alert!',
    text: 'Yoy are scheduled to take 0.1 unit/Kg Humulin injection at 10:02 PM',
    verticalButtons: true,
    buttons: [
      {
        text: 'Snooze',
        onClick: function() {
          myApp.alert('You clicked Snooze!')
        }
      },
      {
        text: 'OK',
        onClick: function() {
          myApp.alert('You clicked OK!')
        }
      },
      {
        text: 'Cancel',
        onClick: function() {
          myApp.alert('You clicked Cancel!')
        }
      },
    ]
  })
});   

var calendarRange = myApp.calendar({
    input: '#calendar-range',
    dateFormat: 'M dd yyyy',
    rangePicker: true
});


myApp.onPageInit('addtimeline', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
    var calendarDefault = myApp.calendar({
        input: '#calendar-default',
    }); 
})


 


