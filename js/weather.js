class Weather{
   
    constructor()
    {
     

      this.input = createInput("Name");
      this.title = createElement('h2');
      this.rain = createButton("RAINY");
   
      

      
    }

    display()
    {
       
      
      
      
       this.title.html("Choose Weather Outside");
       this.title.position(660,170); 
        
       this.input.position(700,120);
      
       this.rain.position(670,390);
     
   
        imageMode(CENTER);
        image(rainI,700,320,100,100);

        imageMode(CENTER);
        image(sunI,860,320,100,100);

        imageMode(CENTER);
        image(snowI,700,500,100,100);

        imageMode(CENTER);
        image(fogI,860,500,100,100);

        this.name = this.input.value();
      
       this.rain.mousePressed(()=>{
        console.log(this.input.value()) 
        state = 1;
        console.log(state);
        })

       

    }
}