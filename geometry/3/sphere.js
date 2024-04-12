class Sphere{
    constructor(){
      
    }
    #_c;
    #_a;
    #_
    #_r;
    #_d;
    set v(v){//volume
      
    }
    set a(a){//surface area
      this._a = a;
      this._r = (a /(4*Math.PI))**0.5;
      this._d = this._r *2
      this._c =        Math.PI*  this._d;
      this._v = (4/3) *Math.PI* (this._r ** 3);
    }
    set c(c){//circumference
      this._c = c;
      this._r = c  /(2*Math.PI);
      this._d = c     /Math.PI;
      this._a = 4     *Math.PI* (this._r **2);
      this._v = (4/3) *Math.PI* (this._r ** 3);
    }
    set r(r){//radius
      this._r = r;
      this._d = r*2;
      this._c = 2     *Math.PI* r;
      this._a = 4     *Math.PI* (r **2);
      this._v = (4/3) *Math.PI* (r **3);
    }
    set d(d){//diameter
      this._d = d;
      this._r = d     /2;
      this._c = d     *Math.PI;
      this._a = 4     *Math.PI* (this._r **2);
      this._v = (4/3) *Math.PI* (this._r **3);
    }
  }