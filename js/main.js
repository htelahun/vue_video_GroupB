const vm = new Vue ({
  el : "#app",

data : {

    welcome : "Welcome to your first vue app",

    movieData : [
    {name: "Star wars", thumb : "forceawakens.jpg", vidSource : "forceawakens.mp4", description: "another star wars movie"},
    {name: "Stranger things", thumb : "strangerthings.jpg", vidSource : "strangerthings.mp4", description: "stranger things stuff"},
    {name: "Avengers", thumb : "avengers.jpg", vidSource : "avengers.mp4", description: "something about thor"}

  ],
  moviename:"movie name here",

  moviedesc : "movie desc here",

  moviesource : "",

  showDetails: false
  },

  methods : {
    logMovie(e){
      e.preventDefault();
    console.log(e.currentTarget);
    //find the href (name of video) and use it to filter the collection
    dataKey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/')+1);

    //filter the collection and use the video name as ref
    currentData = this.movieData.filter(video => video.vidSource=== dataKey);


    //update the view with relevent info
    this.moviename = currentData[0].name;
    this.moviedesc = currentData[0].description;
    this.moviesource = dataKey;

    this.showDetails = true;
    setTimeout(function () {window.scrollTo(0,1200);}, 500);

  },

  scrollBackUp(){
window.scrollTo(0,0);
this.showDetails= false;
this.movieSource= null ;

  }


  }

});
