
status="Mr.Dat"
var a=new Array(),n=""
a[1]='e';
a[2]='m';
a[3]=' ';
a[4]='s';
a[5]='ẽ';
a[6]=' ';
a[7]='c';
a[8]='h';
a[9]='o';
a[10]=' ';
a[11]='a';
a[12]='n';
a[13]='h';
a[14]=' ';
a[15]='5';
a[16]='0';
a[17]='0';
a[18]='k';
a[19]=' ';
a[20]='f';
a[21]='r';
a[22]='e';
a[23]='e';
a[24]=' ';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==23)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>Ơ anh cảm ơn nhá momo anh nè 0329138725</h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>đùa hoi chứ<img</p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Anh yêu em lắm ♥</p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				