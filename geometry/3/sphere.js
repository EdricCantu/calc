class Sphere{
  static dimensions = 3;
  static perfect = true;
  constructor(r = 0){
    this.r = r;
  }
  #_c =  undefined;
  #_a =  undefined;
  #_v =  undefined;
  #_r =  undefined;
  #_d =  undefined;

  get r(){ return this.#_r; }
  get c(){ return this.#_c; }
  get d(){ return this.#_d; }
  get a(){ return this.#_a; }
  get v(){ return this.#_v; }
    set v(v){//volume
      this.#_v = v;
      this.#_r = Math.sqrt(v /( (4/3)*Math.PI ))
      this.#_d = this.#_r * 2
      this.#_a = 4     *Math.PI* (this.#_r **2);
      this.#_c =        Math.PI*  this.#_d;
    }
    set a(a){//surface area
      this.#_a = a;
      this.#_r = (a /(4*Math.PI))**0.5;
      this.#_d = this.#_r *2
      this.#_c =        Math.PI*  this.#_d;
      this.#_v = (4/3) *Math.PI* (this.#_r ** 3);
    }
    set c(c){//circumference
      this.#_c = c;
      this.#_r = c  /(2*Math.PI);
      this.#_d = c     /Math.PI;
      this.#_a = 4     *Math.PI* (this.#_r **2);
      this.#_v = (4/3) *Math.PI* (this.#_r ** 3);
    }
    set r(r){//radius
      this.#_r = r;
      this.#_d = r*2;
      this.#_c = 2     *Math.PI* r;
      this.#_a = 4     *Math.PI* (r **2);
      this.#_v = (4/3) *Math.PI* (r **3);
    }
    set d(d){//diameter
      this.#_d = d;
      this.#_r = d     /2;
      this.#_c = d     *Math.PI;
      this.#_a = 4     *Math.PI* (this.#_r **2);
      this.#_v = (4/3) *Math.PI* (this.#_r **3);
    }
  }

export Sphere;
