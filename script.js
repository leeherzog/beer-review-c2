var beers = [];

var beer;

var addBeer = function (name, category, rate) {
    let beer = {
        name: name,
        category: category,
        rate: rate
    };
    beers.push(beer);
    return beer;
};

$(".post-beer").click(function () {
    addBeer($(".beer-input").val(), $(".category-input").val(), $(".selector").val());
    renderBeers();
});



var renderBeers = function () {
    $("ul").find("li").remove();
    for (var i = 0; i < beers.length; i++) {
        $("ul").append("<li>" + beers[i].name + " " + beers[i].category + " " + beers[i].rate + "</li>");
    }
};


/*var sortObject = function (obj) {
    var arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) { return a.value - b.value; });
    //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
    return arr; // returns array
};


var mySort = function (){
for (var i = 0; i < beers.length; i++) {
    var arr = sortObject(beers[i]);
};
for (var i = 0; i < arr.length; i++) {
    $("ul").append("<li>" + arr[i].name + " " + arr[i].category + " " + arr[i].rate + "</li>");
};
};
*/
/*var mySort = function () {

    beers.sort(function(a, b) { return a.value - b.value; });

       var sorted = beer.keys(beers.rate).sort(function(a,b){return list[a]-list[b]});
       for (var i = 0; i < sorted.length; i++) {
        $("ul").append("<li>" + sorted[i].name + " " + sorted[i].category + " " + sorted[i].rate + "</li>");
    };
    };
    for (var i = 0; i < (beers.length-1); i++) {
        for (var j = 1; j <beers.length; j++) {
            if ((beers[i].rate < beers[j].rate)) {
                $("ul").append("<li>" + beers[i].name + " " + beers[i].category + " " + beers[i].rate + "</li>");
                //$("ul").append("<li>" + beers[1].name + " " + beers[1].category + " " + beers[1].rate + "</li>");
            }
            else if ((beers[i].rate > beers[j].rate)){
                $("ul").append("<li>" + beers[j].name + " " + beers[j].category + " " + beers[j].rate + "</li>");
                $("ul").append("<li>" + beers[i].name + " " + beers[i].category + " " + beers[i].rate + "</li>");
            }
            //else if ((beers[i].rate < beers[j].rate)) {
               // $("ul").append("<li>" + beers[i].name + " " + beers[i].category + " " + beers[i].rate + "</li>");
               // $("ul").append("<li>" + beers[j].name + " " + beers[j].category + " " + beers[j].rate + "</li>");
            //}
        };
    };*/


    var acends = true;

var sortBeers =function(){
    for (let i=0; i<beers.length; i++){
        if (acends===false) {
    beers.sort(function(a, b){
         return a.rate - b.rate ||  a.name.localeCompare(b.name)
        })
        $("ul").append('<li>'+beers[i].name+' '+beers[i].category+' rating is '+beers[i].rate+'</li>')
    } else {
        beers.sort(function(a, b){
            return b.rate - a.rate ||  b.name.localeCompare(a.name)
           })
           $("ul").append('<li>'+beers[i].name+' '+beers[i].category+' rating is '+beers[i].rate+'</li>')
    }
}

}

$(".sort").click(function () {
    $("ul").find("li").remove();
    sortBeers();
});


