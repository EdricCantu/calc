--NAME ~The name of the unit category
Data Storage

--MODE ~the mode, how the unit works.
foundational ~ means that the unit category has a single foundational that can be flawlessly converted to from any other unit as an integer

--FUNC ~ like mathematical functions, makes it easier on the eyes. arguments are in terms of before and after the letter, represented with brackets.
b = 2^[1]
e = [-1]*(10^[1])

--UNIT ~ units. in based mode, one unit is required to have the ampersand sign as its value, 

---small ~ subsection of the UNIT section, depicted with an extra dash.
b     Bit             = & ~ the foundation. all other units are more than this unit, and are integers above 1 in relation to this unit. this unit is implied to be "1".
n     Nibble          = b2 ~ 2^2 (b2) Bits
B     Byte            = b3
char  Character       = b3

---program
WORD  Word            = b4
DWORD Double_Word     = b5
QWORD Quadruple_Word  = b6

---misc
blk   Block           = b12

---"Kilo-"
Kb    Kilobit         = 1e3
Kib   Kibibit         = b10
KB    KiloByte        = 8e3
KiB   KibiByte        = b13

---"Mega-"
Mb    Megabit         = 1e6
Mib   Mebibit         = b20
MB    MegaByte        = 8e6
MiB   MebiByte        = b23

---"Giga-"
Gb    Gigabit         = 1e9
Gib   Gibibit         = b30
GB    GigaByte        = 8e9
GiB   GibiByte        = b33

---"Tera-"
Tb    Terabit         = 1e12
Tib   Tebibit         = b40
TB    TeraByte        = 8e12
TiB   TebiByte        = b43

---"Peta-"
Pb    Petabit         = 1e15
Pib   Pebibit         = b50
PB    PetaByte        = 8e15
PiB   PebiByte        = b53

---"Exa-"
Eb    Exabit          = 1e18
Eib   Exbibit         = b60
EB    ExaByte         = 8e18
EiB   ExbiByte        = b63

---"Zetta-"
Zb    Zettabit        = 1e21
Zib   Zebibit         = b70
ZB    ZettaByte       = 8e21
ZiB   ZebiByte        = b73

---"Yotta-"
Yb    Yottabit        = 1e24
Yib   Yobibit         = b80
YB    YottaByte       = 8e24
YiB   YobiByte        = b83
