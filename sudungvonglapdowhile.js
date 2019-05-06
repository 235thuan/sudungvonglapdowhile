let a=null;
do {
    a=prompt("nhap cac so tu 1 - 10"); //123a
} while (isNaN(a)|| a<1 || a>10) ;

alert("so ban vua nhap la " + a);
