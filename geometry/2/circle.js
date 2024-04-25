class Circle{
  static dimensions = 2;
  static perfect = true;
  static rel = {
    radius:{
      diameter(r){return r*2},
      circumference(r){return 2 * Math.PI * r},
      area(r){return Math.PI * (r**2)}
    },
    diameter:{
      radius(d){return d /2},
      circumference(d){return d * Math.PI},
      area(d){return Math.PI * ((d/2)**2)}
    },
    circumference:{
      radius(c){return c / (2*Math.PI) },
      diameter(c){return c / Math.PI},
      area(c){return (c**2) / (4*Math.PI)} // pi*(c/(2*Math.PI))**2
    },
    area:{
      radius(a){return Math.sqrt( a / Math.PI )},
      diameter(a){2*Math.sqrt(a / Math.PI)},
      circumference(a){return 2*Math.sqrt( a*pi )}//2 * Math.PI * Math.sqrt( a / Math.PI )
    }
  };
  constructor(r = 0){
    this.r = r;
  }
  #r = undefined;
  #d = undefined;
  #c = undefined;
  #a = undefined;
  
  get r(){ return this.#r; }
  get d(){ return this.#d; }
  get c(){ return this.#c; }
  get a(){ return this.#a; }
  
  set r(r){//radius
    this.#r = r;
    this.#d = Circle.rel.radius.diameter(r);
    this.#c = Circle.rel.radius.circumference(r);
    this.#a = Circle.rel.radius.area(r);
  }
  set d(d){//diameter
    this.#d = d;
    this.#r = Circle.rel.diameter.radius(d);
    this.#c = Circle.rel.diameter.circumference(d);
    this.#a = Circle.rel.diameter.area(d);
  }
  set c(c){//circumference
    this.#c = c;
    this.#r = Circle.rel.circumference.radius(c);
    this.#d = Circle.rel.circumference.diameter(c);
    this.#a = Circle.rel.circumference.area(c);
  }
  set a(a){//area
    this.#a = a;
    this.#r = Circle.rel.area.radius(a);
    this.#d = Circle.rel.area.diameter(a);
    this.#c = Circle.rel.area.circumference(a);
  }
}

export Circle;
