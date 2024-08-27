--NAME
Angle

--MODE
explicit ~ not many units

--FUNC
pi = 3.14159268

--UNIT

---"Degree"
deg = [rad]*(180/pi)
deg = [mrad]*((180/1000)*pi)
deg = [grd]*(180/200)
deg = [arcm]/60
deg = [arcs]/(60*60)

---"Radian"
rad = [deg]*(pi/180)
rad = [mrad]/1000
rad = [grd]*(pi/200)
rad = [arcm]*(pi/(180*60))
rad = [arcs]*(pi/(180*60*60))
