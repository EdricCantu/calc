--NAME
Angle

--MODE
explicit ~ explicit, systemic, and foundational

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

---"Milliradian"
mrad = [rad]*1000
mrad = [deg]*((1000*pi)/180)
mrad = [grd]*((1000*pi)/200)
mrad = [arcm]*((1000*pi)/(180*60))
mrad = [arcs]*((1000*pi)/(180*60*60))

---"Gradian"
grd = [deg]*(200/180)
grd = [rad]*(200/pi)
grd = [mrad]*((200*pi)/1000)
grd = [arcm]*(200/(180*60)) = [arcm]/54
grd = [arcs]*(200/(180*60*60)) = [arcm]/3240

---"Arcminute"
arcm = [deg]*60
arcm = [rad]*((180*60)/pi)
arcm = [mrad]*((180*60)/(1000*pi))
arcm = [grd]*((180*60)/200) = [grd]*54
arcm = [arcs]/60

---"Arcsecond"
arcs = [deg]*(60*60)
arcs = [rad]*((180*60*60)/pi)
arcs = [mrad]*((180*60*60)/(1000*pi))
arcs = [grd]*((180*60*60)/200) = [grd]*3240
arcs = [arcm]*60
