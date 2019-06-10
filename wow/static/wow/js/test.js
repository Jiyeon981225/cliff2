function nightDayHandler(x){
    var abc = document.querySelector('body');
    
    if(x.value ==='night'){
        abc.style.backgroundColor='black';
        abc.style.color='white';
        x.value='day';
    }
    else{
        abc.style.backgroundColor='white';
        abc.style.color='black';
        x.value='night';
    
    }
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$('#kronos').kronos();

$('#kronos').kronos({
  format: 'mm.dd.yy'
});

$('#kronos').kronos({
  button: {
    month : true,
    year : true,
    trigger : true,
    today : true
  }
});

$('#kronos').kronos({
  select : true,
  selectYear : {
    tart : -20,
    end : 20
  }
});

$('#kronos-1').kronos({
  periodTo: '#kronos-2'
});

$('#kronos-2').kronos({
  periodFrom: '#kronos-1'
});

$('#kronos').kronos({
  disableWeekends : true,
  date: {
    disabled : ['20180105', '0106'],
    holiday : ['0101', '0301', '0505', '1225', '20180108']
  }
});

$('#kronos').kronos({
  onChange: function(date){
    alert(date);
  }
});

$('#kronos').kronos({
  initDate: null,
  nameSpace: 'kronos',
  format: 'mm/dd/yyyy',
  visible: false,
  disableWeekends : false,
  button: {
    month : true,
    year : true,
    trigger : false,
    today : false
  },
  text: {
    thisMonth : '.',
    thisYear : '.',
    days : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    month : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    btnToday : 'Today',
    btnTrigger : 'Pick A Date',
    btnPrevMonth : 'Prev Month',
    btnNextMonth : 'Next Month',
    btnPrevYear : 'Prev Year',
    btnNextYear : 'Next Year'
  },
  select: false,
  selectYear : {
    start : -100,
    end : 0
  },
  periodFrom: false,
  periodTo: false,
  date: {
    disabled: [],
    holiday: []
  },
  onChange: function () {
  }
});